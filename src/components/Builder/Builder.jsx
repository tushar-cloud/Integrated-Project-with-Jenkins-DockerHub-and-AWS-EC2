import React from 'react';
import classess from './Builder.module.css';
import Items from './Items/Items';
import Modal from './Modal/Modal';
import TotalPrice from './TotalPrice/TotalPrice';

const Builder = ({items, price, add, remove, scoops}) => {
  return (
    <div>
        <div className={classess.builder}>
            <h3>Build your own Ice Cream Sandue</h3>
            <Items items={items} add={add} remove={remove} scoops={scoops}/>
            <TotalPrice price={price}/>
            <button type="button" className={[classess.order, 'roundede'].join(' ')}>Add to cart</button>
        </div>
        <Modal>Hello Modal</Modal>
    </div>
  )
}

export default Builder;