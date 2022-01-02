const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ingredientSchema = new Schema({
ingredientType:{
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
},
ingredientLeadTime:{
    type: Number, // 資料型別是日期
    required: true // 這是個必填欄位
}


})
module.exports = mongoose.model('Ingredient', ingredientSchema)