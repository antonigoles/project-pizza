import './Header.css'
import CheckoutButton from './CheckoutButton/CheckoutButton';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <div style={{userSelect: 'none'}} className="logo-header">
                <Link  to="/">
                    <img src="pizza.svg" alt="logo" className="logo-header-img"/>
                </Link>
                Pizza Project
            </div>
            <div className="header-router">
                <CheckoutButton/>
            </div>        
        </div>
    )
}

export default Header;