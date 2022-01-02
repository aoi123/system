const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema({
      phone: {
        type: String,
        required: true,
      },
      orderDate: {
        type: Date,
        required: true,
      },
      delDate: {
        type: Date,
        required: true,
      },
      product: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
})
module.exports = mongoose.model('Order', orderSchema)
