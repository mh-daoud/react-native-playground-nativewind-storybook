// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';

import LoginScreen from './src/screens/Login';
import "./global.css"
import StoryBook from './.storybook'


const isDev = true
function App(): React.JSX.Element {
  return (
    <LoginScreen />
  );
}


export default isDev ? StoryBook : App;

