import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';

import HomePage from '../containers/HomePage'
import InteractivePage from '../containers/InteractivePage'
import PlannerPage from '../containers/PlannerPage'
import SchedulePage from '../containers/SchedulePage'
import Colors from '../theme/colors'

const TabIcon = ({selected, title}) => {
    let iconName
    switch(title) {
        case 'Home':
            iconName = "ios-home"
            break
        case 'Schedule':
            iconName = "ios-calendar"
            break
        case 'Planner':
            iconName = "ios-bookmarks"
            break
        case 'Interactive':
            iconName = "ios-aperture"
            break
        case 'Settings':
            iconName = "ios-settings"
            break
        default:
            alert(title)
            break
    }

    if (!selected) {
        iconName += "-outline"
    }
    color = selected ? Colors.icnaGreen : "grey"
    return (
        <View style={styles.tabContainer}>
            <Icon name={iconName} size={25} color={color} />
            <Text style={[styles.tabTitle, {color: color}]}>{title}</Text>
        </View>
    )
    
    
}


// const TabIcon = <Text>WEIRD</Text>

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">

                    <Scene key="tabBar" tabs tabBarStyle={styles.tabbar}>

                        <Scene key='homeTab' title='Home' icon={TabIcon}>
                            <Scene key='home' component={HomePage} title='Home' />
                        </Scene>

                        <Scene key='scheduleTab' title='Schedule' icon={TabIcon}>
                            <Scene key='schedule' component={SchedulePage} title='Schedule' />
                        </Scene>

                        <Scene key='plannerTab' title='Planner' icon={TabIcon}>
                            <Scene key='planner' component={PlannerPage} title='Planner' />
                        </Scene>

                        <Scene key='interactiveTab' title='Interactive' icon={TabIcon}>
                            <Scene key='interactive' component={InteractivePage} title='Interactive' />
                        </Scene>

                        <Scene key='settingsTab' title='Settings' icon={TabIcon}>
                            <Scene key='settings' component={InteractivePage} title='Settings' />
                        </Scene>


                    </Scene>

                </Scene>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
  tabbar: {
        height: 45,
        backgroundColor: '#fff',
        borderTopWidth: 0.5,
        borderTopColor: '#707070'
    },
    tabContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    tabTitle: {
        fontFamily: "Avenir",
        fontSize: 10
    }
})