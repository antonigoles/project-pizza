const CartManager = {
    addOrderItemToLocalStorage: ( OrderItem ) => {
        if ( localStorage.getItem("Cart") === null || localStorage.getItem("Cart") === 'undefined') {
            let tempArray = [];
            localStorage.setItem("Cart", JSON.stringify(tempArray) )  
        }

        let currentCart = JSON.parse(localStorage.getItem("Cart"))
        currentCart.push(OrderItem)
        localStorage.setItem("Cart", JSON.stringify(currentCart) )

    },  
    
    getOrderItemsFromLocalStorage: () => {
        if ( localStorage.getItem("Cart") === null || localStorage.getItem("Cart") === 'undefined' ) return []
        return JSON.parse(localStorage.getItem("Cart"))
    },

    removeOrderItemFromLocalStorage: ( index ) => {
        if ( localStorage.getItem("Cart") === null || localStorage.getItem("Cart") === 'undefined' ) return;
        let temp = CartManager.getOrderItemsFromLocalStorage()
        temp.splice(index, 1)
        localStorage.setItem("Cart", JSON.stringify(temp) )
    }
}

export default CartManager;