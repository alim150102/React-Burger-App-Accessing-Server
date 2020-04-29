import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerInngredient'

const burger = (props) =>{

    let trasnformedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
        .map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce(
        (arr,el) => {
            return arr.concat(el)
        }, []
    )

    if(trasnformedIngredient.length === 0){
        trasnformedIngredient = <p>Please Input Some Ingredient</p>
    }
    console.log(props.ingredients);
    console.log(trasnformedIngredient);
    
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {trasnformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger