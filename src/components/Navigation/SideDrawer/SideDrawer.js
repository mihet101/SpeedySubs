import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/backdrop'
import Aux from '../../../hoc/Auxilliary/Auxilliary'

/*Function Name= SideDrawer
Description= Side menu for mobile to navigate
Coder Name= Kush
Approved= Tim
Start Date= Oct 2nd, 2020
End Date= Oct 2nd, 2020
Code Approved= Oct 2nd
Arguments= SideDrawer.css
Input= props(open) 
Output= Side menu for mobile devices
*/

const sideDrawer = (props)=>{
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems isAuthed={props.isAuthed}/>
                </nav>
            </div>
        </Aux>
        
    );
};

export default sideDrawer;
