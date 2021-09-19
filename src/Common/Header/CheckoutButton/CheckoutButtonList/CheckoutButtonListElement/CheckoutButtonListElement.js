import './CheckoutButtonListElement.css'
import Utils from '../../../../../Utils.js'

function CheckoutButtonListElement({orderName, orderPrice, toppings=[]}) {

    let toppings_parsed = Utils.parseTextOverflow(toppings.join(", "), 20)

    return (
        <div className="checkout-button-list-element" >
            <div className="checkout-button-list-element-order-name">
                1x { Utils.parseTextOverflow(orderName, 20) }
            </div>
            <div className="checkout-button-list-element-order-toppings">
                {/* { toppings.map( e => {
                    return (
                        <div className="checkout-button-list-element-order-toppings-element">{e + ", "} </div>
                    )
                }) } */}
                { toppings_parsed}
            </div>
            <div className="checkout-button-list-element-order-price">
                { Utils.parsePrice(orderPrice) } zł
            </div>
        </div>
    )
}

export default CheckoutButtonListElement;