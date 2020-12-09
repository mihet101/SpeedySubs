import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link="/">Burger Builder</NavigationItem>
        {props.isAuthed ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {!props.isAuthed
            ? <NavigationItem link="/auth">Sign up</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default navigationItems;
