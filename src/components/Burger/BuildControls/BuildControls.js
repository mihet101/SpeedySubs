import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

/*Name= BuildControls
* Description: Creating Buttons for adding and removing ingredients 
*Coder= Sumeet
*Approved= Kush
*Start= Sept 30
*End= Sept 30
*Variable= buildControl, controls
*/
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControl = (props) => (
    <div className ={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={()=>props.ingredientAdded(ctrl.type)}
                    removed = {()=>props.ingredientRemoved(ctrl.type)}
                    disabled = {props.disabled[ctrl.type]}/>
                    ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable} 
            onClick={props.ordered}>{props.isAuthed ? 'ORDER NOW' : 'LOGIN TO ORDER'}</button>
    </div>
);

export default buildControl;
