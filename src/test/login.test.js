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
import { create, act } from 'react-test-renderer';
import Login from '../screens/login';
import { Platform } from 'react-native'

// import Auth from '../screens/login';
// import "jest-fix-undefined";
// import 'whatwg-fetch';

import * as auth from '../functions/auth';
// import {login} from '../functions/auth';

const loginAuth = require('../functions/auth')

const tree = create(
    <Login />
);



// test('text button login', () => {
//     const text = tree.root.findByProps({ testID: 'textButton' }).props
//     expect(text.children).toEqual('Entrar')
// });


// test('test soma', async ()  => {

//     // fetch.mockResponseOnce(JSON.stringify({token: true}))

//     // const value = 
//     expect(await auth.login2('student@ae.com', '1234564')).toEqual(true)



//     // const value = await auth.soma(1)
//     // expect(value).toEqual(4)
// });


test('Chamada da função auth.Login', () => {
    const button = tree.root.findByProps({ testID: 'entryButton' }).props
    act(() => button.onPress())

    // expect(mockedNavigate).toHaveBeenCalledTimes(1)
    expect(global.callLoginTest).toEqual(true)
});

