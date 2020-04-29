import React from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../../component/Ui/Button/Button'

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return(
            <li key={igKey}>
                <span style={{textTransform:"capitalize"}}>
                    {igKey} : {props.ingredients[igKey]}
                </span>
            </li>
        )
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicious burger with folowwing ingredient :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : $ {props.price}</strong></p>
            <p>Continue to Checkout...</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    )
}

export default orderSummary