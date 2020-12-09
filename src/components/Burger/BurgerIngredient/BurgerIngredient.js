import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';


class BurgerIngredient extends Component{
    render() {
        let ingredient =null;

        switch(this.props.type){
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>               
                );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;            
            default:
                ingredient = null;
        }

        return ingredient;

    }
    
}

BurgerIngredient.propTypes ={
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;

/*Function Name= BurgerIngredient
Description= burger class that extends component. The ingredients for the burger
Coder Name= Sourav
Start Date= Sept 29, 2020
End Date= Oct 2nd, 2020
Code Approved= Tim
Variables= "ingredient"
Input= the class instances of each ingredient
Output= the ingredients being added to the application

*/
