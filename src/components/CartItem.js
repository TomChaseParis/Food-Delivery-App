import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React from 'react';
import { useStateValue } from './StateProvider';
import { useState, useEffect } from 'react';
import { actionType } from './reducer';
let cartData = []

let cartItems = []

function CartItem({ name, imgSrc, price, itemId }) {

    const [qty, setQty] = useState(1);
    const [{cart}, dispatch] = useStateValue()

    // Calculate amount basket burgers
    const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

    useEffect(() => {
        cartItems = cart;
        setItemPrice(parseInt(qty) * parseFloat(price));
    }, [qty])


    // Function for to Add and Remove burgers in basket
    const updateQuantity = (action, id) => {
        if (action == "add") {
          setQty(qty + 1);
        } else {
            if(qty == 1) {
                cartItems.pop(id);
                dispatch({
                    type: actionType.SET_CART,
                    cart: cartData,
                })
            }
            setQty(qty - 1)   
        }
        };

  return (
    <div className='cardItem'>
        <div className='imgBox'>
            <img src={imgSrc} alt='' />
        </div>

        <div className='itemSection'>
            <h2 className='itemName'>{name}</h2>
            <div className='itemQuantity'>
                <span>x {qty}</span>
                <div className='quantity'>
                    <RemoveRounded className='itemRemove' onClick={() => updateQuantity('remove', itemId)} />

                    <AddRounded className='itemAdd' onClick={() => updateQuantity('add', itemId)} />
                </div>
            </div>
        </div>

        <p className='itemPrice'>
            <span className='dolorSign'>$ </span>
            <span className='itemPriceValue'>{itemPrice}</span>
        </p>
    </div>
    
  )
}

export default CartItem
