import {Animated} from "react-animated-css";
import './CheckoutButtonList.css'
import CheckoutButtonListElement from "./CheckoutButtonListElement/CheckoutButtonListElement";
import CartManager from '../../../CartManager.js'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from "react-toastify/dist/inject-style";
injectStyle();


function CheckoutButtonList({hideCheckoutList}) {

    const [ cartStatus, setCartStatus ] = useState( CartManager.getOrderItemsFromLocalStorage() )

    const parseToppings = (topps) => {
        return topps.map( e => e.name )
    }

    const removeHandler = (idx) => {
        toast.error(`${cartStatus[idx].menuItem.name} has been removed from the Cart`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        CartManager.removeOrderItemFromLocalStorage(idx)
        setCartStatus( CartManager.getOrderItemsFromLocalStorage() )

        

    }

    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={200} >
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
             />
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