require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;

// const connectionString = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPSSWD}@quatro.3qnhhgk.mongodb.net/?retryWrites=true&w=majority`

// mongoose.connect(connectionString);

//module.exports = mongoose.connection.db.collection('orders');

const orderSchema = new Schema({
  intro: String,
  customerType: String,
  current: Boolean,
  orderType: String,
  approvedBy: String,
  style: String,
  lengthFt: Number,
  lengthIn: Number,
  width: Number,
  thickness: Number,
  volume: Number,
  tail: String,
  blank: String,
  construction: String,
  boardColor: String,
  finSetup: String,
  boxType: String,
  boxColor: String,
  inserts: String,
  rearStrap: String,
  strapWidth: String,
  stance: String,
  leash: String,
  pads: String,
  waves: String,
  finFromTail: String,
  boxLocation: String,
  rearInsertsFromTail: String,
  handle: Boolean,
  date: {type: Date, default: Date.now},
  orderId: Number,
  customerId: String,
  customerName: String,
},);

const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  address: String,
  weight: Number,
  heightFt: Number,
  heightIn: Number,
  level: String,
})

const counterSchema = new Schema({
  seq_value: Number,
})

const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Counter = mongoose.model('Counter', counterSchema);



module.exports = {
  findCustomer: (input) => (Customer.findOne(input)),
  createCustomer: (inputObj) => (Customer.create(inputObj)),
  findOrders: (inputObj) => (Order.find(inputObj).sort({date: -1})),
  createOrder: (orderInfoObj) => (Order.create(orderInfoObj)),
  incrementSequence: () => (Counter.findOneAndUpdate({}, {$inc: {seq_value: 1}}, {returnDocument: 'after'})),
  decrementSequence: () => (Counter.findOneAndUpdate({}, {$inc: {seq_value: -1}}, {returnDocument: 'after'}))
}