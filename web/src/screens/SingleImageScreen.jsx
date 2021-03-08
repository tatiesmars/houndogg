import React from "react";
import {Image, StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    transform: [{ scale: 0.85 }],
  }
});

export default () => (<Image source={require('../images/coming_soon_white.png')} style={styles.backgroundImage} />)
