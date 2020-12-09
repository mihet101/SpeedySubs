import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

/*Function Name= toolbar
Description= upper bar to show logo and menu items
Coder Name= Tim
Approved= Sumeet
Start Date= Oct 3rd, 2020
End Date= Oct 3rd, 2020
Code Approved= Oct 3rd
Arguments= Toolbar.css
Input= Props(drawertoggleClicked) 
Output= upper menu bar
*/

const toolbar = (props)=>(
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={[classes.Logo].join(" ")}>
            <Logo/>
        </div>
        
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthed = {props.isAuthed}/>
        </nav>
    </header>
);

export default toolbar;
