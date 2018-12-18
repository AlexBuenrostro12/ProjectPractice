import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderToolbar from '../../HeaderToolbar/HeaderToolbar';

const homeScreen = ( props ) => (
    <View style={styles.container}>
        <HeaderToolbar open={props} />
        <View style={styles.view}>
            <Text style={styles.text}>You're in HomeScreen</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default homeScreen;