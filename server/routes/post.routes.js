require('dotenv').config()
const Post = require('../models/Post')
const multer = require('multer')
const router = require('express').Router()
const upload = multer({ storage: multer.diskStorage({}) })
const fs = require('fs')
const cloudinary = require('cloudinary')


cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
})


//GET THE LATEST 6 POSTS CREATED
router.get('/posts', async(req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).limit(6)
  res.status(200).json(posts)
})

//GET ALL posts SORTING BY CREATEDAT
router.get('/all-posts', async(req, res ) => {
  const getAllPosts = await Post.find().sort({ createdAt: 1 })
  res.status(200).json(getAllPosts)
})

//GET A SINGLE POST BY THEIR ID
router.get('/post/:id', async (req, res) => {
  try {
    const singlePost = await Post.findById(req.params.id)
    res.status(200).json({ success: true, data: singlePost })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

//EDIT A POST (UPDATE)
//Only a user that created a post, can edit his posts. so he need to validated through the 'req.body.username'
router.put('/:id', async(req, res) => {

  try {
    const getUsername = await Post.findById(req.params.id)
    if(getUsername.username === req.body.username){
      try {
        const updatePost = await Post.findByIdAndUpdate(req.params.id, {
          $set: req.body
        }, {new: true})
        res.status(200).json({ success: true, post: updatePost })
      } catch (error) {
        res.status(500).json({ success: false, message: error.message})
      }
    }else{
      res.status(401).json({ message: 'Authorization Failed: Only a valid user can edit this post' })
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

router.post('/post', upload.single('file'), async (req, res) => {
  const { path } = req.file

  const uploadImage = await cloudinary.v2.uploader.upload(path)

  try {
    const { title, description, category, user } = req.body
    const postDoc = await Post.create({
      title,
      description,
      category,
      user,
      photo: uploadImage.secure_url
    })
    res.status(200).json({success: true, data: postDoc})
  } catch (error) {
    res.status(500).json({success: false, message: error})
  }


})

module.exports = router