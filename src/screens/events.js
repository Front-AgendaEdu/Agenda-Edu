import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, LogBox, Animated, Alert, ActivityIndicator, FlatList } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import Styles from '../styles/styles'
import { Drawer } from 'react-native-material-drawer'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Icon } from 'react-native-elements'


const auth = require('../functions/auth')
const styled = require('../styledComponets/styles')

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const widthPercent = (screenWidth / 100)
const heightPercent = (screenHeight / 100)

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

var dataComponent = []
var metaDataComponent = []

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

options.timeZone = 'UTC';
options.timeZoneName = 'short';

const curencyMonth = ["janeiro", "fevereiro", "março", "Abril", "Maio", "Junho", "Julho", "agosto", "setempro", "outubro", "novembro", "dezembro"]
const weekday = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			label: "Eventos",
			isOpen: false,
			limit: 5,
			page: 1,
			data: null,
			metadata: null,
			dataLoad: false,
			scrollY: new Animated.Value(0),
			loadMore: true,
			dataComponent: [],
			total_pages: 1,
		}

	}

	async getEvents() {
		const myRequest = new Request(
			`https://frontend-test.agendaedu.com/api/events?limit=${this.state.limit};page=${this.state.page}`,
			{
				method: 'GET',
				headers: {
					token: await AsyncStorage.getItem('AUTH_TOKEN'),
					Accept: 'application/json', 'Content-Type': 'application/json'
				}
			}
		)

		fetch(myRequest)
			.then(response => {
				if (response.status === 200) {
					return response.json()
				} else {
					throw new Error('erro em no servidor.')
				}
			})
			.then(response => {
				response.data.forEach(function (item, indice) {
					let sendAt = new Date(item.sendAt)
					let startAt = new Date(item.startAt)

					let editedTimeSendAt = `${sendAt.getUTCHours() < 10 ? `0${sendAt.getUTCHours()}` : sendAt.getUTCHours()}:00`
					let editedTimeStartAt = `${startAt.getUTCHours() < 10 ? `0${startAt.getUTCHours()}` : startAt.getUTCHours()}:00`

					dataComponent.push({
						title: item.title,
						image: item.image,
						sendAt: sendAt,
						startAt: startAt,
						image: item.image,
						description: item.description,
						editedTimeSendAt: editedTimeSendAt,
						editedDataStartAt: editedTimeStartAt,
						editedDataTimeStartAt: `${weekday[startAt.getUTCDay()]}, ${startAt.getUTCDate()} de ${curencyMonth[startAt.getUTCMonth()]} às ${editedTimeStartAt}h`,
						weekday: weekday[sendAt.getUTCDay()],
						curencyMonth: curencyMonth[sendAt.getUTCMonth()]
					})
				});

				this.setState({ total_pages: response.metadata.total_pages })


				dataComponent.sort(function (a, b) {
					return new Date(a.sendAt).getTime() > new Date(b.sendAt).getTime() ? -1 : new Date(a.sendAt).getTime() < new Date(b.sendAt).getTime() ? 1 : 0
				})

				this.setState({ dataComponent: dataComponent, dataLoad: true, loadMore: true })

			})
			.catch(error => {
				console.log(`RESPONSE: ${JSON.stringify(error)} `)
			})
	}


	async componentDidMount() {
		const { navigation } = this.props

		navigation.setOptions({
			headerLeft: () => (
				<TouchableOpacity onPress={() => { this.setState({ isOpen: !this.state.isOpen }) }}>
					<Icon
						size={widthPercent * 8}
						color="#000"
						containerStyle={{ marginLeft: widthPercent * 4, backgroundColor: "#FFF" }}
						type="ionicon"
						name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
					/>
				</TouchableOpacity>
			),
		})

		await this.getEvents()
	}

	_scrollView(f) {
		f.getScrollResponder().scrollTo({ x: 140, y: 140, animated: false })
	}

	handleScroll(event) {
		console.log(event.nativeEvent.contentOffset.y);
	}

	loadMoreData = async () => {
		const { loadMore } = this.state
		if (loadMore) {
			await this.setState({ loadMore: false, page: this.state.page < this.state.total_pages ? this.state.page + 1 : this.state.page })

			if (this.state.page < this.state.total_pages) {
				await this.getEvents()
			} else {
				this.setState({ loadMore: true })
			}

			return
		}
	}

	isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
		const paddingToBottom = 20
		return layoutMeasurement.height + contentOffset.y >=
			contentSize.height - paddingToBottom
	}

	render() {
		const { navigation } = this.props

		return (
			<styled.Container>
				<styled.drawer
					width={widthPercent * 70}
					open={this.state.isOpen}
					drawerContent={
						<styled.drawerView>
							<styled.btnSair
								testID={'eventCardButton'}
								onPress={() => { this.setState({ page: 0 }), dataComponent = [], auth.logOut(navigation) }}
							>
								<styled.labelBtn>Sair</styled.labelBtn>
							</styled.btnSair>
						</styled.drawerView>
					}
					onClose={() => this.setState({ isOpen: false })}
					animationTime={250}
				>

					<FlatList
						contentContainerStyle={{ alignItems: 'center', paddingBottom: widthPercent * 5 }}
						ref={(view) => this._scrollView = view}
						scrollEventThrottle={16}
						onScroll={Animated.event(
							[{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
							{
								listener: event => {
									if (this.isCloseToBottom(event.nativeEvent)) {
										this.loadMoreData()
									}
								}
							}
						)}
						data={this.state.dataComponent}
						renderItem={({ item }) =>

							<styled.flatListContainer>
								<styled.flatListHeader>
									<styled.headerLabelView>
										<styled.headerLabel>{`${item.weekday}, ${item.sendAt.getUTCDate()} de ${item.curencyMonth}`}</styled.headerLabel>
									</styled.headerLabelView>
									<styled.headerLineView>
										<styled.headerLine />
									</styled.headerLineView>
								</styled.flatListHeader>

								<styled.btnEvent
									onPress={() => { navigation.navigate("EventDetails", { item: item }) }}
								>

									<styled.eventLateralMarker />
									{item.image != null ?
										<styled.imageView>
											<styled.cardImage
												source={{
													uri: item.image,
												}}
												resizeMode="contain"
											/>
										</styled.imageView>
										:
										null
									}

									<styled.eventContent>
										<styled.txtEvent>EVENTOS</styled.txtEvent>
										<styled.eventTitle ellipsizeMode='tail' numberOfLines={1}>{`${item.title}`}</styled.eventTitle>
										<styled.clockView>
											<EvilIcons
												size={widthPercent * 6.5}
												color="#666666"
												name={'clock'}
											/>
											<styled.txtClock>{item.editedTimeSendAt}</styled.txtClock>
										</styled.clockView>
										<styled.txtEventDateTime>{item.editedDataTimeStartAt}</styled.txtEventDateTime>
									</styled.eventContent>
								</styled.btnEvent>
							</styled.flatListContainer>
						}
					/>
					{!this.state.loadMore
						?
						<styled.loadView>
							<styled.txtLoadingEvents>{`Carregando...`}</styled.txtLoadingEvents>
						</styled.loadView>
						:
						null
					}

				</styled.drawer>

				<StatusBar style='auto' />
			</styled.Container>
		)
	}
}


export default function ({ props, route }) {
	const navigation = useNavigation()

	return <Home {...props} navigation={navigation} />
}
