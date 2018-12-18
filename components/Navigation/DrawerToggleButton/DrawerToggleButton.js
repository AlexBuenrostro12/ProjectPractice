import React from 'react';
import { Header, Left, Right } from 'native-base';
import { StyleSheet, TouchableHighlight, Image } from 'react-native';
import iconMenu from '../../../assets/images/menu.png';
import iconSerch from '../../../assets/images/serch.png';

const drawerToggleButtton = ( props ) => (
    <Header>
        <Left>
            <TouchableHighlight onPress={() => props.open.navigation.openDrawer()}>
                <Image 
                    style={styles.icon} 
                    source={iconMenu} />
            </TouchableHighlight>
        </Left>
        <Right>
            <TouchableHighlight onPress={() => props.open.navigation.openDrawer()}>
                <Image 
                    style={styles.icon} 
                    source={iconSerch} />
            </TouchableHighlight>
        </Right>
    </Header>
 
        
);

const styles = StyleSheet.create({
    icon: {
        height: 25,
        width: 25,
      },
});

export default drawerToggleButtton;