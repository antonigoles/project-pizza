import './CheckoutButtonListElement.css'
import Utils from '../../../../../Utils.js'
import { Animated } from 'react-animated-css'

function CheckoutButtonListElement({
        orderName, 
        orderPrice, 
        toppings=["No additional toppings"], 
        orderSize=30, 
        removeHandler, 
        id
    }) {

    let toppings_parsed = Utils.parseTextOverflow(toppings.join(", "), 20)

    return (
        <Animated 
            animationOut="fadeOut"
            animationIn="fadeIn" >
            <div onClick={() => removeHandler(id) } className="checkout-button-list-element" >
                <div className="checkout-button-list-element-order-name">
                    1x { Utils.parseTextOverflow(orderName, 20) }
                </div>
                <div className="checkout-button-list-element-order-size">
                    { orderSize } cm
                </div>
                <div className="checkout-button-list-element-order-toppings">
                    { toppings_parsed }
                </div>
                <div className="checkout-button-list-element-order-price">
                    { Utils.parsePrice(orderPrice) } zł
                </div>
            </div>
        </Animated>
    )
}

export default CheckoutButtonListElement;