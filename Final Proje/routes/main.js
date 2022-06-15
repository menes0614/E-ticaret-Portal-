const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('site/index')
})

 router.get('/index', (req,res)=>{
     res.render('site/index')
 })

router.get('/sepetim', (req,res)=>{
    res.render('site/sepetim')
})

router.get('/single', (req,res)=>{
    res.render('site/single')
})


module.exports = router