import React from 'react';
import classes from './Button.css'
/*Name= Button
*Description= Button is being disabled
*Coder= Tim
*Approved= Sourav
*Start= Oct 11th
*End= Oct 11th
*Variable= button
*/
const button = (props) => (
    <button 
        disabled={props.disabled}
        className={[classes.Button,classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}
    </button>
);

export default button;
