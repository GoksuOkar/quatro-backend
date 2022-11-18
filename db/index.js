require('dotenv').config();
import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.connect(`mongodb+srv://${MONGOUSER}:${MONGOPSSWD}@quatro.3qnhhgk.mongodb.net/?retryWrites=true&w=majority`);

const orderSchema = new Schema({
  intro: String,
  customerType: String,
  firstName: String,
  lastName: String,
  current Boolean,
  orderType: String,
  phone: String,
  email: String,
  address: String,
  weight: String,
  height: String,
  level: String,
  approvedBy: String,
  style: String,
  length: Number,
  width: Number,
  thickness: Number,
  volume: Number,
  tail: Number,
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
  handle Boolean,
  date: Date.now()
});

let Order = mongoose.model('Order', orderSchema);

