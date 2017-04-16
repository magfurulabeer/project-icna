import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SegmentedControl from '../components/SegmentedControl'

export default class HomePage extends Component {

    state = {
      selectedDay: 1
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                Welcome to The New ICNA App!
                </Text>
                <Text style={styles.instructions}>
                This is the HOME page
                </Text>
                <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
                </Text>
                <SegmentedControl
                  values={["Day 1", "Day 2", "Day 3"]}
                  selectedIndex={this.state.selectedDay}//this.state.idx}
                  selectionColor={"blue"}
                  onChange={value => this.setState({ selectedDay: value})}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});