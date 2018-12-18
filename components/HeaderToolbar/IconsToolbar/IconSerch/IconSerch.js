import React from 'react';
import { TouchableHighlight, Image, StyleSheet } from 'react-native';
import serch from '../../../../assets/images/serch.png';

const iconSerch = ( props ) => (
    <TouchableHighlight onPress={() => props.open.navigation.openDrawer()}>
        <Image 
            style={styles.icon} 
            source={serch} />
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    icon: {
        height: 25,
        width: 25,
      },
});

export default iconSerch;