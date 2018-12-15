import React, { Component }  from 'react';
import Aux from '../Aux/Aux';
import StatusBar from '../../components/StatusBar/StatusBar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import DrawerNavigation from '../../components/Navigation/DrawerNavigation/DrawerNavigation';

export default class Layout extends Component {
    render () {
        return (
            <Aux>
                <StatusBar />                
                <Toolbar />
                <DrawerNavigation />
            </Aux>
        );
    }
}
