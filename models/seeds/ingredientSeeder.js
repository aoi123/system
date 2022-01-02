const mongoose = require('mongoose')
const Ingredient = require('../Ingredient') // 載入 todo model
mongoose.connect('mongodb://localhost/Project', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  
    Ingredient.create({ 
        ingredientType:'雞蛋',
        ingredientLeadTime: 3
     })
     Ingredient.create({ 
        ingredientType:'麵粉',
        ingredientLeadTime: 3
     })
     Ingredient.create({ 
        ingredientType:'植物油',
        ingredientLeadTime: 3
     })
     Ingredient.create({ 
        ingredientType:'蔗糖',
        ingredientLeadTime: 3
     })
     Ingredient.create({ 
        ingredientType:'奶粉',
        ingredientLeadTime: 3
     })
     Ingredient.create({ 
        ingredientType:'草莓粉',
        ingredientLeadTime: 3
     })
     Ingredient.create({ 
        ingredientType:'可可膏',
        ingredientLeadTime: 3
     })
     Ingredient.create({ 
        ingredientType:'草莓大包裝',
        ingredientLeadTime: 5
     })
     Ingredient.create({ 
        ingredientType:'草莓小包裝',
        ingredientLeadTime: 5
     })
     Ingredient.create({ 
        ingredientType:'牛奶大包裝',
        ingredientLeadTime: 5
     })
     Ingredient.create({ 
        ingredientType:'牛奶小包裝',
        ingredientLeadTime: 5
     })
     Ingredient.create({ 
        ingredientType:'巧克力大包裝',
        ingredientLeadTime: 5
     })
  
     Ingredient.create({ 
        ingredientType:'巧克力小包裝',
        ingredientLeadTime: 5
     })
  
  
  
  
  
  
  
  
  
  
  
  
    
  console.log('done')
})