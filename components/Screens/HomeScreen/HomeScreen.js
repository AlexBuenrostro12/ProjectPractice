import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DrawerToggleButton from '../../Navigation/DrawerToggleButton/DrawerToggleButton';

const homeScreen = ( props ) => (
    <View style={styles.container}>
        <DrawerToggleButton open={props} />
        <View style={styles.text}>
            <Text>You're in HomeScreen</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default homeScreen;