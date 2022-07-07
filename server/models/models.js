const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    todo : String,
    isComplete:Boolen
})

const Task=mongoose.model('')