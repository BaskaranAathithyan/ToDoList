const mongoose =require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/todolist',{
    useUnifiedTopology :true,
    useNewUrlParser : true,
    useFindAndModify : false,
}, error =>{
    if(error) console.log('Error in DB Connection ${error}')
    console.log('Mongodb Connection Suceeded...')
})

