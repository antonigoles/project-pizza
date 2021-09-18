import MenuListElement  from "./MenuListElement/MenuListElement";
import './MenuList.css'

function MenuList() {

    //TODO: Fetch toppings from database
    let toppings = [
        {name:"cheese", price: "2,00"}, 
        {name:"meat", price: "4,00"}, 
        {name:"milk", price: "6,00"},
        {name:"milk", price: "6,00"},
        {name:"milk", price: "6,00"},
        {name:"milk", price: "6,00"},
        {name:"milk", price: "6,00"},
        {name:"milk", price: "6,00"},

    ]

    let sizes = [10, 20, 30]

    return (
        <div className="MenuList">
            <MenuListElement sizes={sizes} id={1} itemName="Pizza Peperoni" price="25,00" toppings={toppings} />
            <MenuListElement sizes={sizes} id={2} itemName="Pizza 4 sery" price="26,00" toppings={toppings}/>
            <MenuListElement sizes={sizes} id={3}  itemName="Pizza Włoska" price="15,00" toppings={toppings}/>
            <MenuListElement sizes={sizes} id={4} itemName="Pizza Americana" price="27,00" toppings={toppings} />
        </div>
    )   
}
export default MenuList;