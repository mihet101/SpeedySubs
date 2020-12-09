import React from 'react';
import classes from './Input.css';
/*Name= Input
* Description: Text Box input
*Coder= Sumeet
*Approved= Kush
*Start= Oct 11
*End= Oct 17th
*Variable= input, inputElement, inputClasses
*/
const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType){
        case('input'):
            inputElement = <input className={inputClasses.join(' ')}{...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')}{...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (<select 
                                className={inputClasses.join(' ')}{...props.elementConfig} value={props.value} onChange={props.changed}>
                                {props.elementConfig.options.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.displayValue}
                                    </option>
                                ))}
                            </select>
                            );
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')}{...props.elementConfig} value={props.value}/>;
    }

    return(
        <div classes={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
    
};

export default input;
