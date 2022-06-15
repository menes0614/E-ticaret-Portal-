const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/kayitol', (req,res)=>{
    res.render('site/kayıt')
})

router.post('/kayitol', (req,res)=>{
    User.create(req.body, (error, user)=>{
      res.redirect('/')

    })
})

router.get('/girisyap', (req,res)=>{
    res.render('site/uye');
  })


  router.post('/girisyap', (req,res)=>{
    const{email, password} = req.body

    User.findOne({email}, (error, user)=>{
      if (user){
        if(user.password == password){
          //USER SESSION 
          res.redirect('/')
        }else{
          res.redirect('/girisyap')
        }
      }else{
        res.redirect('/kayitol')
      }
    })
  })



module.exports = router
