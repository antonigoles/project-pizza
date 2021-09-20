import MenuItem from "./MenuItem";

class OrderItem {
    constructor(menuItem=(new MenuItem()), toppings=[], size=0, finalPrice=0) {
        Object.assign(this, {menuItem, toppings, size, finalPrice})
        this.finalPrice = this.calculateFinalPrice()
    }
    calculateFinalPrice() {
        return this.toppings.reduce( (a,b) => a + b.price, 0 ) 
            + this.menuItem.price 
            + this.menuItem.possibleSizes[this.size][1]
    }
}

export default OrderItem;