import React from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls'
import Modal from '../../component/Ui/Modal/Modal'
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary'
import Spinner from '../../component/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders'
import Axios from 'axios'

const INGREDIENT_PRICE = {
    salad : 0.5,
    cheese : 0.7,
    bacon : 0.6,
    meat: 1.2
}

class BurgerBuilder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ingredients : null,
            totalPrice : 4,
            purchasabel : false,
            purchase : false,
            loading : false,
            error : false
        }
    }

    componentDidMount(){
        Axios.get(`https://react-burger-app-f382d.firebaseio.com/ingredients.json`)
        .then(res => this.setState({ingredients : res.data}))
        .catch(err => this.setState({error : true}))
    }

    purchase = () => {
        this.setState({purchase : true})
    }

    updatePurchase (ingredients) {

        const sum = Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey]
        }).reduce((sum,el)=>{
            return sum + el
        }, 0) 
        this.setState({purchasabel : sum > 0})
    }

    puschaseCancel = () =>{
        this.setState({purchase : false})
    }

    purchaseContinue = () =>{
        // alert('You Continue ')
        this.setState({loading : true})
        const order = {
            customer : {
                ingredients : this.state.ingredients,
                Price : this.state.totalPrice, 
                name : "Mas Ali",
                addred : {
                    street : 'Jl truntum Klego 2b',
                    codePos : '12345',
                    country : 'indonesia'
                },
                email : 'alim150102@gmail.com',
            },
            deliveryMethod : 'fastest'
        }
        axios.post(`/orders.json`, order)
        .then(res => {
            this.setState({loading : false, purchase: false})
        })
        .catch(err => {
            this.setState({loading : false, purchase: false})
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.updatePurchase(updateIngredients)
        this.setState({totalPrice : newPrice,ingredients : updateIngredients})

    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0){
            return
        }
        const updatedCount = oldCount - 1
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.updatePurchase(updateIngredients)
        this.setState({totalPrice : newPrice,ingredients : updateIngredients})

    }

    render(){

        const  disableKey = {
            ...this.state.ingredients
        }
        for(let key in disableKey){
            disableKey[key] = disableKey[key] <= 0
        }

        let orderSummary = null
        let burger = this.state.error ? <p style={{textAlign: "center"}}>Ingredient can't be loaded</p> : <Spinner/>

        if(this.state.ingredients){
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableKey}
                    ordered={this.purchase}
                    purchasable={this.state.purchasabel}
                    price={this.state.totalPrice}/>
                </Aux>
            )
            orderSummary = (
                <OrderSummary 
                ingredients={this.state.ingredients} 
                purchaseCancelled = {this.puschaseCancel}
                purchaseContinued = {this.purchaseContinue}
                price = {this.state.totalPrice} />
            )
        }

        if(this.state.loading){
            orderSummary = <Spinner/>
        }
        
        return(
            <Aux>
                <Modal show={this.state.purchase} modalClosed={this.puschaseCancel}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder,axios)