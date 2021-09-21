import { useState } from 'react';
import CartManager from '../../CartManager';
import './CheckoutButton.css'
import CheckoutButtonList from './CheckoutButtonList/CheckoutButtonList';

function CheckoutButton() {

    const [checkoutListShown, setCheckoutListShown] = useState(false)

    const [ cartAmount, setCartAmount ] = useState(0)

    setInterval( () => {
        setCartAmount( CartManager.getOrderItemsFromLocalStorage().length )
    }, 100)

    const hideCheckoutList = () => {
        setCheckoutListShown(false)
    } 

    return (
        <div onClick={() => { 
            if ( !checkoutListShown ) setCheckoutListShown( true ) 
        }} className="header-checkout">
            <img src="shoppingCart.png" alt="" className="header-checkout-img" />
            checkout - { cartAmount }
            {
                checkoutListShown ? (<CheckoutButtonList hideCheckoutList={hideCheckoutList} checkoutListShown={checkoutListShown} 
                     />) : ``
            }
        </div>
    )
}

export default CheckoutButton;