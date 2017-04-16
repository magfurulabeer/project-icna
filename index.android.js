import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomePage from './app/containers/HomePage'

export default class ICNA extends Component {
  render() {
    return (
      <App />
    )
  }
}



AppRegistry.registerComponent('ICNA', () => ICNA);
