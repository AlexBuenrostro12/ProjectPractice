import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Logo from '../../Logo/Logo';


const toolbar = (props) => (
    <View style={styles.Toolbar}>
        <Text>MENU</Text>
        <Logo />
    </View>
);



const styles = StyleSheet.create({
    Toolbar: {
      display: 'flex',
      backgroundColor: '#703B09',
      height: 56,
      width: '100%',
      position: 'relative',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 20,
      top: 0,
      left: 0
    },

    nav: {
        height: '100%'
    }
  });

export default toolbar;