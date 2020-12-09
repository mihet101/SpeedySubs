import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem'

/*Function Name= navigatioItems
Description= Helps to navigate through pages
Coder Name= Kush
Approved= Saurav
Start Date= Oct 1st, 2020
End Date= Oct 1st, 2020
Code Approved= Oct 1st
Input= props(isAuthed) 
Output= navigation buttons
*/

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
