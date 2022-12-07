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
  length: String,
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
  date: String,
  orderId: Number,
  customerId: String,
},);

const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  address: String,
  weight: Number,
  height: String,
  level: String,
})



module.exports = {
  Order: mongoose.model('Order', orderSchema),
  Customer: mongoose.model('Customer', customerSchema)
}