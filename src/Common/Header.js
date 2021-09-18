import './Header.css'

function Header() {
    return (
        <div className="Header">
            <div className="logo-header">
                <img src="pizza.svg" alt="logo" className="logo-header-img"/>
                Pizza Project
            </div>
            <div className="header-router">
                <div className="header-checkout">
                    <img src="shoppingCart.png" alt="cart" className="header-checkout-img" />
                    checkout
                </div>
            </div>        
        </div>
    )
}

export default Header;