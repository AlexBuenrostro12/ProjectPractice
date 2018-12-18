import React from 'react';
import { TouchableHighlight, Image, StyleSheet } from 'react-native';
import menu from '../../../../assets/images/menu.png';

const iconMenu = ( props ) => (
    <TouchableHighlight onPress={() => props.open.navigation.openDrawer()}>
        <Image 
            style={styles.icon} 
            source={menu} />
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    icon: {
        height: 25,
        width: 25,
      },
});

export default iconMenu;