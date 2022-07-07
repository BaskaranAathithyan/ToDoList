const mongoose =require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/todolist',{
    
}, error =>{
    if(error) console.log('Error in DB Connection')
    else
    console.log('Mongodb Connection Suceeded...')
})

