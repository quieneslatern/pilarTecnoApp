import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class PostEdit extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{height}}
          source={require('../assets/images/fondo1.jpg')}>
          <Text>PostEdit</Text>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
