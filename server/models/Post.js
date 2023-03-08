const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: ""
  },
  user: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
  
}, {timestamps: true})


module.exports = mongoose.model('Post', PostSchema)