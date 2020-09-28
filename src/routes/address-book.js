const express = require('express');
const db = require(__dirname + '/../db_connect2');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('address-book');
});

/*
    列表  /list
        列表呈現 GET

    新增  /add
        表單呈現 GET, 接收資料 POST

    修改  /edit/:sid
        修改的表單呈現 GET, 接收資料 POST

    修改  /del/:sid
        POST
 */


/* RESTful API
    列表
    / GET

    新增
    / POST

    呈現單筆
    /:sid GET

    修改單筆
    /:sid PUT

    刪除單筆
    /:sid DELETE
 */




module.exports = router;
