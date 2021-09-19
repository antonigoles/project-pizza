import './MenuListElement.css'
import ChoiceList from '../../../Common/ChoiceList'
import React, { useEffect, useState } from 'react';
import Utils from '../../../Utils';

function MenuListElement({
        itemName /* string */, 
        price=25 /* Number */, 
        toppings=[] /* [string, Number] */, 
        sizes=[] /* [Number, Number] */, 
        id
    }) {

    

    const updatePrice = ( size ) => {
        let prc = price + sizes[choosenSize][1];
        selectedOptions.map( (e) => { prc += toppings[e].price } )
        setParsedPrice( Utils.parsePrice(prc) )
    }

    const handleBuyClick = () => {
        
    }

    const [parsedPrice, setParsedPrice] = useState(Utils.parsePrice(price))
    const [choosenSize, setChoosenSize] = useState(0)
    const [optionsVisible, setOptionsVisible] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState([])

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

    useEffect( updatePrice, [choosenSize, selectedOptions] )

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
                    <div onClick={handleBuyClick} className="menu-list-item-buybtn"> +{parsedPrice} zł</div>
                </div> 
                <div className="menu-list-item-custom-options">
                    <div onClick={() => {setOptionsVisible( !optionsVisible )}} className="menu-list-item-custom-options-showbtn"> 
                        { optionsVisible ? "Hide options" : "Show options" } 
                    </div>
                    <div className="menu-list-item-custom-options-helperbox" style={{
                        height: optionsVisible ? `100%` : `0`,
                        opacity: optionsVisible ? `1.0` : `0`,
                    }}>
                        <div className="menu-list-item-button-toppings">
                            <ChoiceList changeHandler={ (n) => { 
                                if ( selectedOptions.includes(n) ) Utils.removeItemOnce( selectedOptions, n )
                                else selectedOptions.push(n)
                                updatePrice()
                            } } title="Toppings: " choices={parsedToppings} />
                        </div>
                        <div className="menu-list-item-button-size">
                            Size:
                            <div className="size-list">
                            { 
                                sizes.map( (e,index) => {
                                    let selected = index === choosenSize
                                    return (
                                        <div onClick={ () => {   
                                            setChoosenSize(index)
                                        }} className={ 
                                            selected ? "size-button size-button-selected" : "size-button" 
                                        } key={index}>
                                            {e[0]} cm
                                        </div>
                                    )
                                })
                            }                           
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )   
}

export default MenuListElement;