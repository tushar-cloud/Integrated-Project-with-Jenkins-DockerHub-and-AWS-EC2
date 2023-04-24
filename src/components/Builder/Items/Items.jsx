import { countBy } from 'lodash';
import React from 'react';
import Item from './Item/Item';

const Items = ({items, add, remove, scoops = []}) => {
  const flavors = Object.keys(items);
  const scoopsByCount = countBy(scoops);
  return (
    <div>
        <ul>
            {flavors.map((flavor) => (
              <Item key={flavor} name={flavor} add={add} remove={remove} scoops={scoops} quantity={scoopsByCount[flavor]}/>
            ))}
        </ul>
    </div>
  )
}

export default Items;