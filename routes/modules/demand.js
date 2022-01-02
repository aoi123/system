// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Order = require('../../models/Order')
// 定義路由
//將 app 改成 router
//把路由的前綴詞 /demand 刪掉，這一段已經在總路由器檢查完畢
router.get('/', (req, res) => {
    res.render('demand')

})

router.get('/query', (req, res) => {
    const d1= req.query.date   // 從 req.body 拿出表單裡的 name 資料
    var date = new Date(d1); 
    console.log(date)
    //date= date.toDateString()//格式化字串，輸出形式:"Thu Mar 18 2021"
    year=date.getFullYear();
    month=date.getMonth();//會抓到輸入日期前一個月，超神奇XD
    console.log('p'+year+'-'+month)
    const product = req.query.product      // 從 req.body 拿出表單裡的 name 資料
    console.log('p'+product)
    //待做:能不能讓輸入訂單的部分也鎖住不讓他加心資料@2022之後?(##
    
    //問題:怎麼抓資料庫裡美筆資料的年+月日期然後match?
    //Order部分能改成月份單獨出來嗎(比較好算SUM+AVG)
    //或是能否抓出年月  
   
    Order.aggregate(
      [
        //{$match:{"orderDate":"2021-12-10","product":product}},//"/^2021-1/"
        {$match:{
           "orderDate": {'$gte': new Date(2021,10,1),'$lte':new Date(2022,1,1)} ,//成功回傳!!
           "product":product
           //日期嘗試紀錄
           //"/^2021-1/"mongodb模糊查詢X
           // "orderDate": {'$gte': Date('2021-10-01T00:00:00.000Z'),'$lte': Date('2022-01-01 T00:00:00.000Z')還是空陣列X
          }
        },
    
      
        {$group: {
          _id: 0,
          sum:{$sum: "$amount"}
         
        }},
       
     
  
      ]
    ).exec(function (err,result) {
      console.log(result)//回傳結果:  [ { _id: 0, average: 3 } ]
      const a=Object.values(result)[0]["sum"]//抓出average
      console.log(a) 
      var aa=Math.round(a/3)
      res.render('demandSubmit',{aa})//參數傳到後端
      return//加這行就不會跑hhtp error了欸
    });
    
  })
// 匯出路由模組
module.exports = router