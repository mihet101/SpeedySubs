/*Function Name= checkoutSummary
Description= the checkout summary with buttons continue and cancel
Coder Name= Sourav
Start Date= Nov 14th, 2020
End Date= Nov 15th, 2020
Code Approved= Sumeet
Arguments= Burger class, button class, and classes from checkoutSummary.css
Input= buttons and label
Output= checkout summary 

*/

import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>
                We hope it tastes well!
            </h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;
