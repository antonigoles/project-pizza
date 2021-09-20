import {Animated} from "react-animated-css";
import './CheckoutButtonList.css'
import CheckoutButtonListElement from "./CheckoutButtonListElement/CheckoutButtonListElement";
import CartManager from '../../../CartManager.js'
import { useState } from "react";

function CheckoutButtonList({hideCheckoutList}) {

    let mock_toppings = ["cheese", "pepperoni", "milk" ]

    const [ cartStatus, setCartStatus ] = useState( CartManager.getOrderItemsFromLocalStorage() )

    const parseToppings = (topps) => {
        return topps.map( e => e.name )
    }

    const removeHandler = (idx) => {
        CartManager.removeOrderItemFromLocalStorage(idx)
        setCartStatus( CartManager.getOrderItemsFromLocalStorage() )
    }

    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={200} >
            <div className="checkout-button-list">
                <div className="checkout-button-list-window">
                    <div className="checkout-button-list-close-btn-container">
                        <div onClick={hideCheckoutList} className="checkout-button-list-close-btn">X</div>
                    </div>
                    <div className="checkout-button-list-elements-table-description">
                        <div className="checkout-button-list-elements-table-description-category">Product name</div>
                        <div className="checkout-button-list-elements-table-description-category">Size</div>
                        <div className="checkout-button-list-elements-table-description-category">Toppings</div>
                        <div className="checkout-button-list-elements-table-description-category">Price</div>
                    </div>
                    <div className="checkout-button-list-elements" >
                        {
                            cartStatus.length > 0 ? 
                            cartStatus.map( (e,i) => {
                                return (
                                    <CheckoutButtonListElement 
                                        removeHandler={removeHandler} 
                                        key={i}
                                        id={i}
                                        toppings={parseToppings(e.toppings)}  
                                        orderPrice={e.finalPrice} 
                                        orderName={e.menuItem.name}
                                        orderSize={e.menuItem.possibleSizes[e.size][0]}
                                    />
                                )
                            }) : (
                                <div className="cart-empty"> Your cart is empty! :( </div>
                            )
                        } 
                    </div>
                </div>
                
            </div>
        </Animated>
    )
}

export default CheckoutButtonList;