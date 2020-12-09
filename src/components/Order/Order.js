/*Function Name= order
Description= the ingredients get put into a list, and the order button and the price is displayed
Coder Name= Tim
Start Date= Nov 12th, 2020
End Date=  Nov 13th, 2020
Code Approved= Sourav
Variables= ingredients, order
Input= Order.css, list

*/

import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredients= [];

    for(let ingredientName in props.ingredients){
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}>
            {ig.name} ({ig.amount})</span>;
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default order;
