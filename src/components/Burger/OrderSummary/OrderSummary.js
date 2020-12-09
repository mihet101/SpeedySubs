import React from 'react';
import Aux from '../../../hoc/Auxilliary/Auxilliary'
import Button from '../../UI/Button/Button'

/*Function Name= OrderSummary
Description= Shows pop-up of order details
Coder Name= Kush
Start Date= Sept 30th, 2020
End Date= Sept 30th, 2020
Code Approved= Sept 30th
Input= props(ingredients,price) 
Output= logo placed in the application 
*/

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;
