const mongoose = require('mongoose')
const Order = require('../Order') // 載入 todo model
mongoose.connect('mongodb://localhost/Project', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  
    Order.create({ 
        phone:'0973738191',
        orderDate: new Date("2021-12-10"),
        delDate:new Date("2021-12-15"),
        product: '草莓大包裝',
        amount:3
     })
     Order.create({ 
      phone:'0973038191',
      orderDate: new Date("2021-09-10"),
      delDate:new Date("2021-12-15"),
      product: '草莓大包裝',
      amount:10
   })

   Order.create({ 
    phone:'0973738191',
    orderDate: new Date("2021-11-10"),
    delDate:new Date("2021-12-15"),
    product: '草莓大包裝',
    amount:30
 })
  
     Order.create({ 
      phone:'0973738191',
      orderDate: new Date("2021-09-10"),
      delDate:new Date("2021-12-15"),
      product: '草莓小包裝',
      amount:3
   })

   Order.create({ 
    phone:'0973738191',
    orderDate: new Date("2021-09-10"),
    delDate:new Date("2021-12-15"),
    product: '牛奶大包裝',
    amount:3
 })
  
 Order.create({ 
  phone:'0973733091',
  orderDate: new Date("2021-10-10"),
  delDate:new Date("2021-12-15"),
  product: '牛奶小包裝',
  amount:3
})
  
  
    
  console.log('done')
})