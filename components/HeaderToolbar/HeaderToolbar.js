import React from 'react';
import { Header, Left, Right } from 'native-base';
import IconMenu from './IconsToolbar/IconMenu/IconMenu';
import IconSerch from './IconsToolbar/IconSerch/IconSerch';

const headerToolbar = ( props ) => (
    <Header>
        <Left>
            <IconMenu open={props.open}/>
        </Left>
        <Right>
            <IconSerch open={props.open} />
        </Right>
    </Header>
);

export default headerToolbar;
