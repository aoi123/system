const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    productType: {
      type: String,
      required: true
    },
    productLeadTime: {
      type: Number,
    },
    egg: {
      type: Number,
    },
    flour: {
      type: Number,
    },
    oil: {
      type: Number,
    },
    sugar: {
      type: Number,
    },
    milkPowder: {
      type: Number,
    },
    strawberryPowder: {
      type: Number,
    },
    cocoaLiquor: {
      type: Number,
    },
    packSbig: {
      type: Number,
    },
    packSsmall: {
      type: Number,
    },
    packMbig: {
      type: Number,
    },
    packMsmall: {
      type: Number,
    },
    packCbig: {
      type: Number,
    },
    packCsmall: {
      type: Number,
    }
  })
  module.exports = mongoose.model('Product', productSchema)