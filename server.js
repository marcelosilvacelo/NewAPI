require('dotenv').config()

const express = require('express');
const app = express()
const mongoose = require('mongoose')
const routerLogin = require ('./routes/login')
const routerDatabase = require ('./models/database.js');


mongoose.connect(process.env.DATABASE_STRING,
    {useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection
    db.on('error',(err)=> console.log(err))
    db.on('open',()=> console.log('Database Conectados'))

app.get('/', (req, res)=>{
    res.send('ROTA GET')
})

app.use(express.json());
app.use('/login', routerLogin)
app.use('/database', routerDatabase)




app.listen(3000, (req, res)=>{
    console.log('SERVER CONECTADO')
})