const mockedNavigate = jest.fn();

jest.mock('react-native-vector-icons/EvilIcons', () => 'Icon')

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
import { create, act } from 'react-test-renderer';
import renderer from 'react-test-renderer'

const tree = create(<eventDetails/>)

describe('##SNAPSHOT##', () => {
	it('Events Snapshot', () => {
		const snap = renderer.create(<eventDetails />).toJSON()
		expect(snap).toMatchSnapshot()
	})
})
