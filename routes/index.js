// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 準備引入路由模組

// 引入 todos 模組程式碼
const demand = require('./modules/demand')
const schedule = require('./modules/schedule')
// 將網址結構符合 /todos 字串開頭的 request 導向 todos 模組 
router.use('/demand', demand)
router.use('/schedule', schedule)


// 匯出路由器
module.exports = router
