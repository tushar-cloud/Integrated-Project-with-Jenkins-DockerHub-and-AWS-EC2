import React from 'react';
import iceCreamCss from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

const IceCream = ({scoops}) => {
  //const flavors = Object.keys(items);
  return (
    <div>
        <div className={iceCreamCss.icecream}>
            <p className={iceCreamCss.cone}></p>
            {scoops.map((scoop) => (
              <Scoop key={`${scoop}${Math.random()}`} scoop={scoop}/>
            ))}
            <div className={iceCreamCss.cherry}></div>
        </div>
    </div>
  )
}

export default IceCream;
