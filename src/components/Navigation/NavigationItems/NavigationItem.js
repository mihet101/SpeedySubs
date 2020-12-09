import React from 'react';
import classes from './NavigationItem.css';
import {NavLink} from 'react-router-dom';

/*Function Name= navigationItem
Description= navigation buttons
Coder Name= Summet
Approved = Tim
Start Date= Oct 1st, 2020
End Date= Oct 1st, 2020
Code Approved= Oct 1st
Input= props(links)
Output= navigation buttons
*/

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link} 
            exact={props.exact} 
            activeClassName={classes.active}>{props.children}
        </NavLink>
    </li>
);

export default navigationItem;
