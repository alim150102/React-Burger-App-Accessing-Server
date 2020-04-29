import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import ToogleDrawer from '../SideDrawer/ToggelDrawer/ToggleDrawer'

const toolbar = (props) =>{
    return(
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <ToogleDrawer clicked={props.toggleOpen}/>
            
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default toolbar