const mongoose = require('mongoose')
const Inventory = require('../Inventory') // 載入 todo model
mongoose.connect('mongodb://localhost/Project', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  
    Inventory.create({ 
        inventoryType:'雞蛋',
        inventoryAmount: 3
        , Type: '原料'
     })
     Inventory.create({ 
        inventoryType:'麵粉',
        inventoryAmount: 3
        , Type: '原料'
     })
     Inventory.create({ 
        inventoryType:'植物油',
        inventoryAmount: 3
        , Type: '原料'
     })
     Inventory.create({ 
        inventoryType:'蔗糖',
        inventoryAmount: 10
        , Type: '原料'
     })
     Inventory.create({ 
        inventoryType:'奶粉',
        inventoryAmount: 4
        , Type: '原料'
     })
     Inventory.create({ 
        inventoryType:'草莓粉',
        inventoryAmount: 8
        , Type: '原料'
     })
     Inventory.create({ 
        inventoryType:'可可膏',
        inventoryAmount: 4
        , Type: '原料'
     })
     Inventory.create({ 
        inventoryType:'草莓大包裝',
        inventoryAmount: 3
        , Type: '產品'
     })
     
     Inventory.create({ 
        inventoryType:'草莓小包裝',
        inventoryAmount: 2
        , Type: '產品'
     })
     
     Inventory.create({ 
        inventoryType:'牛奶大包裝',
        inventoryAmount: 9
        , Type: '產品'
     })
     
     Inventory.create({ 
        inventoryType:'牛奶小包裝',
        inventoryAmount: 7
        , Type: '產品'
     })
     Inventory.create({ 
        inventoryType:'巧克力大包裝',
        inventoryAmount: 5
        , Type: '產品'
     })
     Inventory.create({ 
        inventoryType:'巧克力小包裝',
        inventoryAmount: 2
        , Type: '產品'
     })
     
     Inventory.create({ 
        inventoryType:'草莓-大包裝',
        inventoryAmount: 3
        , Type: '原料'
     })
     
     Inventory.create({ 
        inventoryType:'草莓-小包裝',
        inventoryAmount: 2,
        Type: '原料'
     })
     
     Inventory.create({ 
        inventoryType:'牛奶-大包裝',
        inventoryAmount: 9,
        Type: '原料'
     })
     
     Inventory.create({ 
        inventoryType:'牛奶-小包裝',
        inventoryAmount: 7,
        Type: '原料'
     })
     Inventory.create({ 
        inventoryType:'巧克力-大包裝',
        inventoryAmount: 5,
        Type: '原料'
     })
     Inventory.create({ 
        inventoryType:'巧克力-小包裝',
        inventoryAmount: 2,
        Type: '原料'
     })
  
  
  
  
  
  
  
  
  
  
  
  
    
  console.log('done')
})