import React, { Component } from 'react';
import { Text,Platform,AsyncStorage } from 'react-native';

import Swiper from '../components/Swiper/Swiper';
import {Icon,LinearGradient} from 'expo'
import Colors from '../constants/Colors';
import styles from './styles'
import { userChoice } from '../constants/util';
export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
        initialRouter: 'WelcomeStack'
    };
  }
_handleUser=async()=>{
await AsyncStorage.setItem(userChoice,'true').then(()=>{
    this.props.navigation.navigate('TabScreen')
    
}).catch(error=>{
console.log(error.message)
});
}
  render() {
    return (
        <Swiper handleThis={this._handleUser.bind(this)}>
        {/* First screen */}
        <LinearGradient
            colors={Colors.Swiper_gradient}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.slide}
        >
            <Icon.Ionicons name={Platform.OS === 'ios' ? "ios-cash" : 'logo-usd'} size={100} color={'#FFFFFF'} />
            <Text style={styles.header}>Welcome</Text>
            <Text style={styles.text}>The easiest way to find, locate and exchange foreign currencies</Text>
        </LinearGradient>
        {/* Second screen */}
        <LinearGradient
            colors={Colors.Swiper_gradient}
            start={{ x: 0.5, y: 1.0 }}
            end={{ x: 1.0, y: 0 }}
            style={styles.slide}
        >
            <Icon.Ionicons name={Platform.OS === 'ios' ? "ios-pin" : 'md-pin'} size={100} color={'#FFFFFF'} />
            <Text style={styles.header}>Locate</Text>
            <Text style={styles.text}>Find a forex bureau near your location Best Currency exchange today</Text>
        </LinearGradient>
        {/* Third screen */}
        <LinearGradient
            colors={Colors.Swiper_gradient}
            start={{ x: 0.5, y: 1.0 }}
            end={{ x: 1.0, y: 0 }}
            style={styles.slide}
        >
            <Icon.Ionicons name={Platform.OS === 'ios' ? "ios-chatboxes" : 'md-chatboxes'} size={100} color={'#FFFFFF'} />
            <Text style={styles.header}>Chats</Text>
            <Text style={styles.text}>Update/publish your currency on our Online public billboard Get Chats and contacted by clients</Text>
        </LinearGradient>
    </Swiper>
    );
  }
}
