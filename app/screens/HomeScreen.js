import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,WebView
} from 'react-native';
import { Icon } from 'expo';
import styles from './styles/style'
import Colors from '../constants/Colors';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBit}>
        <Text style={styles.logo}>Best Places</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>alert('welcome')} >
            <Icon.Entypo name="flower" color={Colors.primary_white} size={23} style={{ padding: 20 }} />
          </TouchableOpacity>
        </View>
      </View>
        <WebView source={{ uri: 'http://192.168.1.88:8088/' }} />
      </View>
    );
  }

}
