
import { Dimensions } from 'react-native'
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Drawer } from 'react-native-material-drawer'



const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const widthPercent = (screenWidth / 100)
const heightPercent = (screenHeight / 100)

// general styles
export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
`;
export const labelBtn = styled.Text`
  color: #FFFFFF;
  font-family: 'SFProDisplay-Semibold';
  font-size: ${widthPercent * 5};
`;

// ../screens/configuration.js
export const configContainer = styled.View`
    flex: 1;
    background-color: #733DBE;
    justify-content: center;
    align-items: center;
`;

export const configIcon = styled.Image`
    width: ${widthPercent * 40};
    height : ${widthPercent * 40};
`;

export const txtLoading = styled.Text`
   font-size: ${widthPercent * 7};
   font-family: 'SFProDisplay-Bold';
   color: #FFF;
`;


// ../screens/login.js
export const LoginTitle = styled.Text`
     color: #333333;
     font-family: 'SFProDisplay-Bold';
     font-size: ${widthPercent * 7.2};
     margin-bottom: ${widthPercent * 8};
`;

export const TextInputLabel = styled.Text`
     color: #666666;
     font-family: 'SFProDisplay-Regular';
     font-size: ${widthPercent * 4.2};
`;

export const InputView = styled.View`
    flex-direction: row;
`;


export const EmailInput = styled.TextInput`
  width: ${widthPercent * 87.2};
  height: ${heightPercent * 9.5};
  border-radius: ${widthPercent * 1};
  font-size: ${widthPercent * 5};
  font-family: 'SFProDisplay-Regular';
  border: 1px ${props => props.focusColor};
  color: #333333;
  padding-right: 14%;
  padding-left: 7%; 
`;

export const PswlInput = styled.TextInput`
  width: ${widthPercent * 87.2};
  height: ${heightPercent * 9.5};
  border-radius: ${widthPercent * 1};
  font-size: ${widthPercent * 5};
  font-family: 'SFProDisplay-Regular';
  border: 1px ${props => props.focusColor};
  color: #333333;
  padding-right: 14%;
  padding-left: 7%; 
`;

export const BtnView = styled.TouchableOpacity`
  position: absolute;
  right: ${widthPercent * 3};
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const EmailInputIcon = styled(MaterialCommunityIcons)`
  position: absolute;
  right: ${widthPercent * 3};
  align-self: center;
  color: #AAAAAA;
  font-size: ${widthPercent * 8};
  align-items: center;
  justify-content: center;
`;

export const PswlInputIcon = styled(MaterialCommunityIcons)`
  color: #AAAAAA;
  font-size: ${widthPercent * 8};
`;

export const containerLoginInput = styled.View`

`;

export const containerPsw = styled.View`
  margin-top: ${heightPercent * 2};
`;

export const btnEntrarContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const btnEntrar = styled.TouchableOpacity`
  align-self: center;
  width: 82%;
  height: ${widthPercent * 15};
  background-color: #733DBE;
  border-radius: ${widthPercent * 2};
  justify-content: center;
  align-items: center;
  bottom: 0;
  margin-bottom: 7%;
`;


// ../screens/events.js
export const drawer = styled(Drawer)`
  justify-content: center;
`;

export const drawerView = styled.View`
  padding-top: ${widthPercent * 5};
  padding-bottom: ${widthPercent * 5};
`;

export const btnSair = styled.TouchableOpacity`
  align-self: center;
  width: 95%;
  height: ${widthPercent * 15};
  background-color: #733DBE;
  border-radius: ${widthPercent * 2};
  justify-content: center;
  align-items: center;
  bottom: 0;
  margin-bottom: 7%;
`;

export const flatListContainer = styled.View`
  align-self: center;
  width: 88%;
  align-items: center;
  margin-top: ${heightPercent * 5};
`;

export const flatListHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${heightPercent * 2};
`;


export const headerLabelView = styled.View`
  margin-right: ${widthPercent * 2};
`;

export const headerLineView = styled.View`
  flex: 1;
`;

export const headerLabel = styled.Text`
  font-family: 'SFProDisplay-Semibold';
  font-size: ${widthPercent * 4.1};
  color: #999999;
`;

export const headerLine = styled.View`
  border-bottom-color: #C3CBD2;
  border-bottom-width: 1;
  justify-content: flex-start;
`;

export const btnEvent = styled.TouchableOpacity`
  width: 100%;
  height: ${heightPercent * 23};
  flex-direction: row;
  align-items: center;
  border-radius: ${widthPercent * 2};
  margin-top: ${widthPercent * 1.5};
  background-color: #FFF;
  elevation: 8px;
`;

export const eventLateralMarker = styled.View`
  width: 2.5%;
  height: 100%;
  background-color: #733DBE;
  border-top-left-radius: ${widthPercent * 2};
  border-bottom-left-radius: ${widthPercent * 2};
`;

export const imageView = styled.View`
  width: 23%;
  margin-left: ${widthPercent * 4};
`;

export const cardImage = styled.Image`
  flex: 1;
  /* resize: contain; */
  border-radius: ${widthPercent * 18};
`;

export const txtEvent = styled.Text`
  font-family: 'SFProDisplay-Medium';
  font-size: ${widthPercent * 4};
  color: #999999;
  margin-top: ${widthPercent * -2};
  margin-left: ${widthPercent * 3.5};
`;

export const eventTitle = styled.Text`
  font-family: 'SFProDisplay-Medium';
  font-size: ${widthPercent * 4.5};
  color: #333333;
  margin-top: ${widthPercent * 2};
  margin-left: ${widthPercent * 3.5};
  width: 80%;
`;


export const clockView = styled.View`
  flex-direction: row;
  align-items: center;
  font-size: ${widthPercent * 4.5};
  margin-top: ${widthPercent * 0};
  margin-left: ${widthPercent * 2.8};
`;

export const clockIcon = styled(EvilIcons)`
  size: ${widthPercent * 6.5};
`;

export const txtClock = styled.Text`
  font-family: 'SFProDisplay-Regular';
  font-size: ${widthPercent * 4.5};
  color: #666666;
`;

export const txtEventDateTime = styled.Text`
  width: ${widthPercent * 58};
  font-family: 'SFProDisplay-Regular';
  color: #666666;
  font-size: ${widthPercent * 3.2};
  margin-top: ${widthPercent * 1};
  margin-left: ${widthPercent * 3.5};
`;

export const eventContent = styled.View`
  flex: 1;
  height: 100%;
  background-color: #FFF;
  border-bottom-left-radius: ${widthPercent * 2};
  border-bottom-right-radius: ${widthPercent * 2};
  justify-content: center;
`;

export const loadView = styled.View`
  width: 100%;
  height: 10%;
  position: absolute;
  background-color: #733DBE;
  bottom: 0;
  border-top-left-radius: ${widthPercent * 7};
  border-top-right-radius: ${widthPercent * 7};
  justify-content: center;
  align-items: center;
`;

export const txtLoadingEvents = styled.Text`
  font-family: 'SFProDisplay-Bold';
  font-size: ${Platform.select({ iOS: widthPercent * 5, android: widthPercent * 7 })};
  margin-bottom: ${Platform.select({ iOS: widthPercent * 1, android: widthPercent * 0 })};
  color: #FFF;
`;

//../screens/eventDetails.js

export const eventDetailsBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

export const containerDetails = styled.View`
  width: 100%;
  height: 72%;
  position: absolute;
  background-color: #FFF;
  bottom: 0;
  border-top-left-radius: ${widthPercent * 7};
  border-top-right-radius: ${widthPercent * 7};
  padding-left: ${widthPercent * 8};
  padding-right: ${widthPercent * 8};
  padding-top: ${widthPercent * 8};
  padding-bottom: ${widthPercent * 8};
  align-items: center;
`;

export const headersDetailsView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const dateView = styled.View`
  width: ${widthPercent * 17};
  height: ${widthPercent * 17};
  background-color: rgba(115, 61, 190, 0.1);
  border-radius: ${widthPercent * 2};
`;

export const txtDayMonthView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const txtDayMonth = styled.Text`
  font-size: ${widthPercent * 6};
  color: #733DBE;
  font-family: 'FProDisplay-Bold';
  align-self: auto;
  font-weight: bold;
`;


export const txtMonth = styled.Text`
  font-size: ${widthPercent * 4};
  color: #733DBE;
  font-family: 'SFProDisplay-Regular';
`;


export const eventDetailsTitleView = styled.View`
  width: 80%;
  border-radius: ${widthPercent * 2};
`;

export const eventDetailsTitle = styled.Text`
  font-size: ${widthPercent * 6};
  margin-left: ${widthPercent * 4};
  font-family: 'SFProDisplay-Bold';
`;

export const headersClockDetailsView = styled.View`
  width: 76%;
  margin-top: ${widthPercent * 2.5};
  flex-direction: row;
  align-items: center;
  margin-left: ${widthPercent * 20};
`;

export const descriptionView = styled.View`
  width: 100%;
  height: 60%;
  margin-top: ${widthPercent * 8};
  flex-direction: row;
`;

export const txtEventDescription = styled.Text`
  font-family: 'SFProDisplay-Regular';
  font-size: ${widthPercent * 4.7};
  color: #666666;
  text-align: justify;
`;


