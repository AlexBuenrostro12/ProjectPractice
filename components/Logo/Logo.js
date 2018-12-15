import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import iconLogo from '../../assets/images/logo.png';

const logo = ( props ) => (
    <View style={styles.vLogo}>
        <Image style={styles.img} source={iconLogo} />
    </View>
);

const styles = StyleSheet.create({
    vLogo: {
        backgroundColor: '#ffffff',
        width: '18%',
        height: '250%',
        padding: 3,
        borderRadius: 5
        
    },
    img: {
        height: '100%',
        width: '100%',
    }

});

export default logo;