import React from 'react';
import classes from './backdrop.css'
/*Name= Backdrop
*Description= Removes the pop up when the user clicks outside of the box   
*Coder= Sumeet
*Approved= Kush
*Start= Oct 17 2020
*End= Oct 17 2020
*Variable= backdrop
*/
const backdrop = (props) => (
    props.show?<div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
