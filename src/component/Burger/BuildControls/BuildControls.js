import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {label : 'Salad', type : 'salad'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Bacon', type : 'bacon'},
    {label : 'Meat', type : 'meat'}
]

const buildControls = (props) =>{
    return (
        <div className={classes.BuildControl}>
            <p>Current Prices : <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disable={props.disabled[ctrl.type]} />
            ))}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
        </div>
    )
}

export default buildControls