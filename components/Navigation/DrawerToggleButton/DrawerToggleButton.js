import React from 'react';
import { Header, Left, Right, Icon, Container} from 'native-base';
import {StyleSheet, View} from 'react-native';

const drawerToggleButtton = ( props ) => (
    <Header>
        <Left>
            <Icon  
                name="eye" 
                onPress={() => props.open.navigation.openDrawer()}/>
        </Left>
        <Right>
        <Icon  
                name="menu" 
                onPress={() => props.open.navigation.openDrawer()}/>
        </Right>
    </Header>
);

const styles = StyleSheet.create({
    
});

export default drawerToggleButtton;