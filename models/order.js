const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MenuItemSchema = new Schema({
    name: {
        type: String,
    },
    possibleSizes: {
        type: Int16Array,
    },
    price: {
        type: Float32Array,
    },
});
const ToppingSchema= new Schema({
    name: {
        type: String,
    },
    price: {
        type: Float32Array,
    },
});
const OrderItemSchema = new Schema({
    menuItem: {
        type: MenuItemSchema,
    },
    topping: {
        type: ToppingSchema,
    },
});
const OrderSchema = new Schema({
    note: {
        type: String,
    },
    adressID: {
        type: Uint32Array,
    },
    userID: {
        type: Uint32Array,
    },
    orderItem: {
        type: OrderItemSchema,
    },
    price: {
        type: Float32Array,
    },
});

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);
const Topping = mongoose.model('Topping', ToppingSchema);
const OrderItem = mongoose.model('OrderItem', OrderItemSchema);
const Order = mongoose.model('Order', OrderSchema);
