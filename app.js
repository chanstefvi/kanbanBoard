const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const cors = require('cors')


mongoose.connect('mongodb://localhost:27017/kanban')


const app = express()

app.use(cors())

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.post('/api/register', async (req,res)=>{
   try{
    const user = await User.create({
        name :  req.body.name,
        email : req.body.email,
        password : req.body.password
    })

    res.json({status:'ok'})

   }catch(err){
    res.json({status:'error'})
   }

    
  
    
})


app.post('/api/login', async (req,res)=>{
     
     const user = await User.findOne({ email: req.body.email, password : req.body.password })
     
     
     if(user){
         const token = jwt.sign(
             {
                 name: user.name,
                 email: user.email
             },
             'secret123'
         )
          return res.json({status:'ok',user: token})
     }else{
        return res.json({status:'error',user: false})
     }
        
   
     
 })

 app.get('/api/userdata', async (req,res)=>{
     
    const token = req.headers['x-access-token']
      try{
          const decoded = jwt.verify(token,'secret123')
          const email = decoded.email
          const user = await User.findOne({email:email})
          return res.json({status : 'ok', name : user.name})
      } catch(err){
          console.log(err)
          res.json({status:'error',error:'invalid token'})
      }
  
    
})



app.listen(1337,()=>{
    console.log("node server is runnig on port 1337")
})