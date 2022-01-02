// 引用 Express 與 Express 路由器
const express = require('express')
const moment = require('moment')
const router = express.Router()
// 引用 model
const Product = require('../../models/Product')
const Order = require('../../models/Order')
const Inventory = require('../../models/Inventory')


// 定義路由
//將 app 改成 router
//把路由的前綴詞 /demand 刪掉，這一段已經在總路由器檢查完畢
router.get('/', (req, res) => {
    res.render('schedule')
  })


router.get('/query', (req, res) => {
 //寫成一個個function再傳進去的方法也還undefined...我要被非同步氣死了...
 //寫成單一function也不行:)
 //把變數改成Let宣告放在function裡外野都還是一樣undefined...
 //把find改成aggregate也試過了還是不行...
 //若一開始不宣告變數的話，在顯示undefined後重整葉面就會跑出來，超怪
 //可是隔天測試會直接變成localhost拒絕連線，只能再把宣告的註解拿掉，但竟然成功沒有undefined(一頭霧水)
 //乾脆問肥舅試試?
  const d1= req.query.date   // 從 req.body 拿出表單裡的 name 資料
  var date = new Date(d1); 
  
  const product = req.query.product      // 從 req.body 拿出表單裡的 name 資料
  var number = req.query.number 


  //console.log('p'+product)
all(date,number,product)
function all(date,number,product) {
  let whetherInventoryEnough="abc"
  var inventory
  var lead1=123
  Product.aggregate([
    {$match:{
      "productType": product
       }},
       {$project: {
        _id: 1,
        productLeadTime:1
       
      }},

      ] ).exec(function (err,time) {
        console.log(time) 
         if (err) return handleError(err);
        //console.log('t'+time)//此方法的回傳值:t{ _id: 61c58f2694502b286842db26, productLeadTime: 10 } 
        lead1=Object.values(time)[0]["productLeadTime"]//只抓出leadtime
        //console.log("leadtime"+lead1)
        console.log("lead1"+lead1)
        console.log('p'+number)
      
      });
    
 

 
   Inventory.find({ 'inventoryType': product }, 'inventoryAmount', function (err, i) {
      if (err) return handleError(err);
      inventory=Object.values(i)[0]["inventoryAmount"]//只抓出leadtime
      console.log("inventory"+inventory)
      
      if (inventory<number) {
        //if 庫存<number則執行相減
        stillneed=number-inventory;
    
        console.log("leadtime"+lead1)
        date.setDate(date.getDate()-lead1); //產品最晚須在何時進行生產
        dates=moment(date).format('YYYY-MM-DD')
        //dates= date.toDateString()//格式化字串，輸出形式:"Thu Mar 18 2021"
        whetherInventoryEnough="庫存不足，尚須"+stillneed+"個";
        console.log('p'+date)
       //if和else各放一個render
       Product.find({ 'productType': product }, 'egg flour oil sugar milkPowder strawberryPowder cocoaLiquor packSbig packSsmall packMbig packMsmall packCbig packCsmall', function (err, ingredient) 
       {
         if (err) return handleError(err);
         //console.log('i'+ingredient) 
         //產品需要生產的量*一個商品需要的原料數目=原料還需要訂購的數量
         //抓出一個商品所需要的各個原料數目 
         const egg=Object.values(ingredient)[0]["egg"]//抓出所需egg數量
         stillneedegg=stillneed*egg
         const flour=Object.values(ingredient)[0]["flour"]//抓出所需egg數量
         stillneedf=stillneed*flour
         const oil=Object.values(ingredient)[0]["oil"]//抓出所需egg數量
         stillneedoil=stillneed*oil
         const sugar=Object.values(ingredient)[0]["sugar"]//抓出所需egg數量
         stillneeds=stillneed*sugar
         const milkPowder=Object.values(ingredient)[0]["milkPowder"]//抓出所需egg數量
         stillneedmilkPowder=stillneed*milkPowder
         const strawberryPowder=Object.values(ingredient)[0]["strawberryPowder"]
         stillneedstrawberryPowder=stillneed*strawberryPowder
         const cocoaLiquor=Object.values(ingredient)[0]["cocoaLiquor"]
         stillneedcocoaLiquor=stillneed*cocoaLiquor
         const packSbig=Object.values(ingredient)[0]["packSbig"]
         stillneedpackSbig=stillneed*packSbig
         const packSsmall=Object.values(ingredient)[0]["packSsmall"]
         stillneedpackSsmall=stillneed*packSsmall
         const packMbig=Object.values(ingredient)[0]["packMbig"]
         stillneedpackMbig=stillneed*packMbig
         const packMsmall=Object.values(ingredient)[0]["packMsmall"]
         stillneedpackMsmall=stillneed*packMsmall
         const packCbig=Object.values(ingredient)[0]["packCbig"]
         stillneedpackCbig=stillneed*packCbig
         const packCsmall=Object.values(ingredient)[0]["packCsmall"]
         stillneedpackCsmall=stillneed*packCsmall
         
         console.log("still need egg"+stillneedegg)

         //!!!!待做
       
         //產品最晚日期(已扣掉產品Leadtime的日期)-原料的leadtime=最晚訂購時間
           //產品ddl扣掉原料的leadtime=原料ddl
        var eggdate=new Date(date)
        eggdate.setDate(date.getDate()-3);//ddl of egg & so on
        eggdate=moment(eggdate).format('YYYY-MM-DD')
        //eggdate=eggdate.toDateString()
        var packdate=new Date(date)
        packdate.setDate(date.getDate()-5);//ddl of pack
        packdate=moment(packdate).format('YYYY-MM-DD')
        //packdate=packdate.toDateString()
        console.log("egg"+eggdate)
        console.log("pack"+packdate)
        res.render('scheduleSubmit',{whetherInventoryEnough,dates,number,product,lead1,stillneedegg,stillneedf,stillneedoil,stillneeds,
          stillneedmilkPowder,stillneedstrawberryPowder,stillneedcocoaLiquor,stillneedpackSbig,stillneedpackSsmall,stillneedpackMbig,stillneedpackMsmall
          ,stillneedpackCbig,stillneedpackCsmall,eggdate,packdate})//參數傳到後端
       })
       
      } else {
       //if庫存>=number則回傳庫存足夠
    //庫存不足的話導到另一頁面?
       whetherInventoryEnough="庫存足夠"; 
       res.render('scheduleSubmit',{whetherInventoryEnough})//參數傳到後端
      }
      })
      console.log('00000000000'+whetherInventoryEnough)

console.log("loggg"+whetherInventoryEnough,date,number,product,lead1)


  

//如果真的不行:把render搬進function裡面試試看


}})

// 匯出路由模組
module.exports = router