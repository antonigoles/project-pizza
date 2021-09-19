import {Animated} from "react-animated-css";
import './CheckoutButtonList.css'
import CheckoutButtonListElement from "./CheckoutButtonListElement/CheckoutButtonListElement";

function CheckoutButtonList({hideCheckoutList, checkoutListShown}) {

    let mock_toppings = ["cheese", "pepperoni", "milk" ]

    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={200} >
            <div className="checkout-button-list">
                <div className="checkout-button-list-window">
                    <div className="checkout-button-list-close-btn-container">
                        <div onClick={hideCheckoutList} className="checkout-button-list-close-btn">X</div>
                    </div>
                    <div className="checkout-button-list-elements" >
                        <CheckoutButtonListElement toppings={mock_toppings}  orderPrice={30} orderName="Pizza Americana" />
                        <CheckoutButtonListElement toppings={mock_toppings} orderPrice={30} orderName="Pizza Americana" />
                        <CheckoutButtonListElement orderPrice={20.99} orderName="Pizza Americana" />
                        <CheckoutButtonListElement orderPrice={30} orderName="Pizza Americana" />
                        <CheckoutButtonListElement toppings={mock_toppings} orderPrice={30} orderName="Pizza Americana" />
                        <CheckoutButtonListElement orderPrice={30} orderName="Pizza Americana" />
                        <CheckoutButtonListElement orderPrice={30} orderName="Pizza Americana" />
                        <CheckoutButtonListElement orderPrice={30} orderName="Pizza Americana" />
                        <CheckoutButtonListElement orderPrice={30} orderName="Pizza Americana" />

                    </div>
                </div>
                
            </div>
        </Animated>
    )
}

export default CheckoutButtonList;