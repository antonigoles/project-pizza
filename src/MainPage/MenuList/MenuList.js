import MenuListElement  from "./MenuListElement/MenuListElement";
import './MenuList.css'

function MenuList() {

    //TODO: Fetch toppings from database
    let toppings = [
        {name:"cheese", price: 2}, 
        {name:"meat", price: 4}, 
        {name:"milk", price: 6},
        {name:"milk", price: 6},
        

    ]

    let sizes = [[10,0], [20,10], [30,20]]

    return (
        <div className="MenuList">
            <MenuListElement sizes={sizes} id={1} itemName="Pizza Peperoni" price={25} toppings={toppings} />
            <MenuListElement sizes={sizes} id={2} itemName="Pizza 4 sery" price={26} toppings={toppings}/>
            <MenuListElement sizes={sizes} id={3}  itemName="Pizza Włoska" price={15.99} toppings={toppings}/>
            <MenuListElement sizes={sizes} id={4} itemName="Pizza Americana" price={29.99} toppings={toppings} />
        </div>
    )   
}
export default MenuList;