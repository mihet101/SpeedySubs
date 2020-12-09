import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

/*Function Name= burger
Description= shows the sub gui
Coder Name= Tim
Start Date= Sept 30th, 2020
End Date= Sept 30th, 2020
Code Approved= Sept 30th
Input= props(ingredients) 
Output= sub ui
*/

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey +1} type = {igKey}/>;
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);

    if(transformedIngredients.length ===0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return(
        <div className ={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
