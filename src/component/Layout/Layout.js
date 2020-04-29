import React from 'react'
import Aux from '../../hoc/Aux/Aux'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showSideDrawer : false,
        }
    }

    sideDrawerClose = () =>{
        this.setState({showSideDrawer : false})
    }

    toggleOpenHandler = () =>{
        this.setState(prevState =>{
                return {showSideDrawer: !prevState.toggleOpen}
        })
    }



    render(){
        return(
            <Aux>
                <Toolbar toggleOpen={this.toggleOpenHandler}/>
                <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerClose}/>
                <main className={classes.Content}>
                {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout