import React from 'react'
import burgerLogo from './../../../src/assets/images/logo.png'
import classes from './Logo.module.css'

const logo = () => {
    return(
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="logo-image"></img>
        </div>
    )
}

export default logo