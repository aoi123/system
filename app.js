// 引用路由器
const routes = require('./routes')


const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const mongoose = require('mongoose') // 載入 mongoose




mongoose.connect('mongodb://localhost/Project', { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
//db.on()：在這裡用 on 註冊一個事件監聽器，用來監聽 error 事件有沒有發生
//語法的意思是「只要有觸發 error 就印出 error 訊息」。
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
//db.once() - 針對「連線成功」的 open 情況，我們也註冊了一個事件監聽器
//相對於「錯誤」，連線成功只會發生一次，所以這裡特地使用 once，由 once 設定的監聽器是一次性的，一旦連線成功，在執行 callback 以後就會解除監聽器。
db.once('open', () => {
  console.log('mongodb connected!')
})

//const methodOverride = require('method-override')
//const bcrypt = require('bcryptjs')

const app = express()
const PORT = 3000
// 將 request 導入路由器
app.use(routes)

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(methodOverride('_method'))

// routes setting



/*Product.aggregate([ { $match: { _id:id }}, { $unwind: "$Comments" }, 
                     { $group: { _id: "$_id", average: { $avg: "$Comments.Rating" } }} ], function (err,result)                  {
                if (err) {
                        console.log(err);
                }       
                        console.log(result);
                        return result.average;
                    });*/
//找特定月份(如果能直接找前三個月更好)的 特定產品需求數量，然後sum，然後AVG，就是最後要的數字

/*Order.find({ 'product': product }, 'amount', function (err, amount) {
  if (err) return handleError(err);
  console.log('a'+amount)//此方法的回傳值:t{ _id: 61c58f2694502b286842db26, productLeadTime: 10 } ，要怎麼只拿10?

  //You can use mongoose Aggregation pipeline to calculate the sum of amount across multiple document. you need to use $match, to match the query condition, $group to calculate sum across multiple documents.
})*/
//採用ma預測的原因:泡芙需求穩定XD
//試試看模糊查詢可不可以?
//Order.find({"$or": [{"orderDate":"/^2021-12-/"},{"orderDate":"/^2021-11-/"},{"orderDate":"/^2021-10-/"}]})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
