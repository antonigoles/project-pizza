import './Header.css'
import CheckoutButton from './CheckoutButton/CheckoutButton';

function Header() {
    return (
        <div className="Header">
            <div className="logo-header">
                <img src="pizza.svg" alt="logo" className="logo-header-img"/>
                Pizza Project
            </div>
            <div className="header-router">
                <CheckoutButton/>
            </div>        
        </div>
    )
}

export default Header;