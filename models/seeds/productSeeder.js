const mongoose = require('mongoose')
const Product = require('../Product') // 載入 todo model
mongoose.connect('mongodb://localhost/Project', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  
    Product.create({ 
        productType: '牛奶大包裝',
          productLeadTime: 10,
          egg: 18,
          flour:15 ,
          oil: 9,
          sugar:12 ,
          milkPowder:12 ,
          strawberryPowder: 0,
          cocoaLiquor:0 ,
          packSbig:0,
          packSsmall: 0,
          packMbig: 1,
          packMsmall: 0,
          packCbig: 0,
          packCsmall:0
     })
   
  
  
     Product.create({ 
        productType: '牛奶小包裝',
          productLeadTime: 10,
          egg: 12,
          flour:10 ,
          oil: 6,
          sugar:8 ,
          milkPowder:8 ,
          strawberryPowder: 0,
          cocoaLiquor:0 ,
          packSbig:0,
          packSsmall: 0,
          packMbig: 0,
          packMsmall: 1,
          packCbig: 0,
          packCsmall:0
     })
     Product.create({ 
      productType: '草莓大包裝',
        productLeadTime: 10,
        egg: 18,
        flour:15 ,
        oil: 9,
        sugar:12 ,
        milkPowder:12 ,
        strawberryPowder: 0,
        cocoaLiquor:0 ,
        packSbig:1,
        packSsmall: 0,
        packMbig: 0,
        packMsmall: 0,
        packCbig: 0,
        packCsmall:0
   })
   Product.create({ 
    productType: '草莓小包裝',
      productLeadTime: 10,
      egg: 12,
      flour:10 ,
      oil: 6,
      sugar:8 ,
      milkPowder:8 ,
      strawberryPowder: 0,
      cocoaLiquor:0 ,
      packSbig:0,
      packSsmall: 1,
      packMbig: 0,
      packMsmall: 0,
      packCbig: 0,
      packCsmall:0
 })
   Product.create({ 
    productType: '巧克力大包裝',
      productLeadTime: 10,
      egg: 18,
      flour:15 ,
      oil: 9,
      sugar:12 ,
      milkPowder:12 ,
      strawberryPowder: 0,
      cocoaLiquor:0 ,
      packSbig:0,
      packSsmall: 0,
      packMbig: 0,
      packMsmall: 0,
      packCbig: 1,
      packCsmall:0
 })
 Product.create({ 
  productType: '巧克力小包裝',
    productLeadTime: 10,
    egg: 12,
    flour:10 ,
    oil: 6,
    sugar:8 ,
    milkPowder:8 ,
    strawberryPowder: 0,
    cocoaLiquor:0 ,
    packSbig:0,
    packSsmall: 0,
    packMbig: 0,
    packMsmall: 0,
    packCbig: 0,
    packCsmall:1
})
    
  console.log('done')
})