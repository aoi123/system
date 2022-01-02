const mongoose = require('mongoose')
const Schema = mongoose.Schema
const inventorySchema = new Schema({
inventoryType:{
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
},
inventoryAmount:{
    type: Number, // 資料型別是數字
    required: true // 這是個必填欄位
},

Type:{
    type: String,
    required:true
}

})
module.exports = mongoose.model('Inventory', inventorySchema)