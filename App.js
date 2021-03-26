import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Switch,
  Button,
  Animated,
  ImageBackground,
} from 'react-native';

export default App = props => {
  return (
    <View style={s.container}>
      <ImageBackground
        style={s.image}
        source={require('./assets/images/ModelY.jpeg')}></ImageBackground>
    </View>
  );
};

let s = StyleSheet.create({
  container: {
    flex: 2,
  },
  image: {
    flex: 1,
  },
});
