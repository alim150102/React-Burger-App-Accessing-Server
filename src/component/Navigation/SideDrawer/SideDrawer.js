import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../Ui/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux'

const sideDrawer = (props) => {
    let sideDrawerControl = [classes.SideDrawer, classes.Close]
    if (props.open) {
        sideDrawerControl = [classes.SideDrawer, classes.Open]
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={sideDrawerControl.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer