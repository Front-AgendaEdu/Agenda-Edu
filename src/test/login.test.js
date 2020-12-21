const mockedNavigate = jest.fn();

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon')

jest.mock("@react-native-community/async-storage", () =>
	require("@react-native-community/async-storage/jest/async-storage-mock"),
);

jest.mock('@react-navigation/native', () => {
	return {
		...jest.requireActual('@react-navigation/native'),
		useNavigation: () => ({
			navigate: mockedNavigate,
		}),
	};
});


import React from 'react';
import { create, act } from 'react-test-renderer'
import { Login } from '../screens/login'
import renderer from 'react-test-renderer'


const LoginComponent = create(<Login />)

describe('##SNAPSHOT##', () => {
	it('Login Snapshot', async () => {
		const snap = renderer.create(<Login />).toJSON()

		expect(snap).toMatchSnapshot()
	})
})

describe('##ACTIONS CLICK##', () => {

	it('Verify if isVisiblePsw button status changed', () => {
		const button = LoginComponent.root.findByProps({ testID: 'showPswBtn' }).props
		act(() => button.onPress())
		expect(global.isVisiblePsw).toEqual(true);
	})

	it('Verify if entryButton click succesed', () => {
		const button = LoginComponent.root.findByProps({ testID: 'entryButton' }).props
		act(() => button.onPress())
		expect(global.callLoginTest).toEqual(true);
	})


	it('Verify if inputEmail focus succesed', () => {
		const inputEmail = LoginComponent.root.findByProps({ testID: 'inputEmail' }).props
		act(() => inputEmail.onFocus())
		expect(global.inputEmail).toEqual(true);
	})

	it('Verify if inputPassword focus succesed', () => {
		const inputPassword = LoginComponent.root.findByProps({ testID: 'inputPassword' }).props
		act(() => inputPassword.onFocus())
		expect(global.inputPassword).toEqual(true);
	})

})