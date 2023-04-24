import React from 'react';
import classes from './TotalPrice.module.css';

const TotalPrice = ({price = 0}) => {
  return (
    <div className={classes.total}>
        <div>Total price</div>
        <div>{price.toFixed(2)} INR</div>
    </div>
  )
}

export default TotalPrice;