import React from 'react';
import classes from './BuildControl.css'
/*Name= BuildControl
* Description: Add & Subtract Ingredients
*Coder= Sumeet
*Approved= Kush
*Start= Sept 30
*End= Sept 30
*Variable= buildControl
*/
const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick = {props.removed} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.added} >More</button>
    </div>
)

export default buildControl;
