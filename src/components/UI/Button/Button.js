import React from 'react';
import classes from './Button.css'
/*Name= Button
*Coder= Tim
*Approved= Sourav
*Start= 2nd
*End= oct 2nd
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
