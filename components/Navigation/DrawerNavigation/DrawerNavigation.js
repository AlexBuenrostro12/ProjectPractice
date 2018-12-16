
import React from 'react';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import {StyleSheet, View, Image, Text, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import SettingsScreen from '../../Screens/SettingsScreen/SettingsScreen';
import iconLogo from '../../../assets/images/logo.png';

const CustomDrawerComponent = ( props ) => (
    <SafeAreaView style={styles.sAV}>
        <View style={styles.view}>
            <Image style={styles.image} source={iconLogo} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
);


const draweNavigation = createDrawerNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen
},{
    contentComponent: CustomDrawerComponent
});

const styles = StyleSheet.create({
    sAV: {
        flex: 1
    },
    view: {
        height:150,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 60
    }
});

export default draweNavigation