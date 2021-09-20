import './MenuListElement.css'
import ChoiceList from '../../../Common/ChoiceList'
import React, { useEffect, useState } from 'react';
import Utils from '../../../Utils';
import CartManager from '../../../Common/CartManager';
import OrderItem from '../../../Models/OrderItem';
import MenuItem from '../../../Models/MenuItem';
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from "react-toastify/dist/inject-style";
injectStyle();

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
        let toppingsChoosen = selectedOptions.map( e => { return toppings[e] })
        let orderItem = new OrderItem(new MenuItem(itemName, sizes, price), toppingsChoosen, choosenSize )
        CartManager.addOrderItemToLocalStorage( orderItem )

        toast.success(`Added ${itemName} to the Cart`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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