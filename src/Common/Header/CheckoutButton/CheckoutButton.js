import { useState } from 'react';
import './CheckoutButton.css'
import CheckoutButtonList from './CheckoutButtonList/CheckoutButtonList';

function CheckoutButton() {

    const [checkoutListShown, setCheckoutListShown] = useState(false)

    const hideCheckoutList = () => {
        setCheckoutListShown(false)
    } 

    return (
        <div onClick={() => { 
            if ( !checkoutListShown ) setCheckoutListShown( true ) 
        }} className="header-checkout">
            <img src="shoppingCart.png" alt="" className="header-checkout-img" />
            checkout
            {
                checkoutListShown ? (<CheckoutButtonList hideCheckoutList={hideCheckoutList} checkoutListShown={checkoutListShown} 
                     />) : ``
            }
        </div>
    )
}

export default CheckoutButton;