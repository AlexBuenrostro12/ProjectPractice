import React, {Component} from 'react';
import { View, SafeAreaView, ScrollView, Dimensions, StyleSheet, Image} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';
import iconLogo from '../../../assets/images/logo.png';

export default class DrawerNavigation extends Component {
    render () {
        return (
            <AppDrawerNavigator />
        );
    }
}

const CustomDrawerComponent = ( props ) => (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.view}>
            <Image style={styles.img} source={iconLogo}></Image>
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen
},{
    contentComponent: CustomDrawerComponent
});

const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1
    },
    view:{
        height: 150,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 100,
        height: 100,
    }
  });