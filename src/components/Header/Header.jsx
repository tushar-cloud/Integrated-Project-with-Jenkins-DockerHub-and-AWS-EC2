import React from 'react'
import logo from '../../assets/images/logo.svg'
import reactLogo from '../../assets/images/react.svg'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div>
                <img src={logo} alt="Logo" className={classes.logo} />
            </div>
            <div className="textRight">
                <img src={reactLogo} alt="React" className={classes.reactLogo} />
                <strong>React</strong>
            </div>
        </div>
        <div className="container"><span><center>A web application that uses Jenkins for CI/CD pipeline to automatically pull code from GitHub, build images on Docker Hub and, deploy it to Amazon Elastic Compute Cloud (EC2)</center></span></div>
    </header>
  )
}

export default Header;