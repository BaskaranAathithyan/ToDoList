const express= require('express')
const router=require('./routes/routes')
const app=express()
require('./models/db')

app.use('/api/tasks', router)
app.listen('8000' , error => {
    if(error) console.log(error)
    console.log('Sever is Started at PORT Number:8000')
})