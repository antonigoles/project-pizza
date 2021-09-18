import './MenuListElement.css'
import ChoiceList from '../../../Common/ChoiceList'
import React, { useState } from 'react';

function MenuListElement({itemName, price="25,00", toppings=[], sizes=[], id}) {

    const [parsedPrice, setParsedPrice] = useState(price)
    const [choosenSize, setChoosenSize] = useState(0)


    //TODO: Make price format verification
    // here

    // parse toppings
    let parsedToppings = [];
    if ( toppings.length > 0 ) {
        toppings.map( (e,i) => {
            parsedToppings.push([e.name + " " + e.price + " zł", 
            id+e.name.split(" ").join("")+"-"+i])
        })
    }

    const handleBuyClick = () => {
        
    }

    return (
        <div className="menu-list-item">
            <div className="menu-list-item-image" 
                style={{
                    backgroundImage: `url("pizza-thumbnail.png")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}/>
            <div className="menu-list-item-right-box">
                <div className="menu-item-info-box">
                    <div className="menu-list-item-name">{itemName}</div>
                    <div onClick={handleBuyClick} className="menu-list-item-buybtn"> {parsedPrice} zł</div>
                </div> 
                <div className="menu-list-item-custom-options">
                    <div className="menu-list-item-button-toppings">
                        <ChoiceList title="Toppings: " choices={parsedToppings} />
                    </div>
                    <div className="menu-list-item-button-size">
                        Size:
                        <div className="size-list">
                        { 
                            sizes.map( (e,index) => {
                                let sel = index === choosenSize
                                return (
                                    <div onClick={ () => { setChoosenSize(index) }} className={ 
                                        sel ? "size-button size-button-selected" : "size-button" 
                                    } key={index}>
                                        {e} cm
                                    </div>
                                )
                            })
                        }                           
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )   
}

export default MenuListElement;