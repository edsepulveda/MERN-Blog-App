const Post = require('../models/Post')
const multer = require('multer')
const router = require('express').Router()
const upload = multer({ dest: 'uploads/' })
const fs = require('fs')



//GET ALL posts is going to be in "All Posts Page"
router.get('/posts', async(req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).limit(6)
  res.status(200).json(posts)
})


router.post('/post', upload.single('file'), async (req, res) => {
  const { path, originalname } = req.file
  const takeOriginalName = originalname.split('.')
  const newPath = path+'.'+takeOriginalName[takeOriginalName.length - 1]
  fs.renameSync(path, newPath)

  try {
    const { title, description, category, user } = req.body
    const postDoc = await Post.create({
      title,
      description,
      category,
      user,
      photo: newPath
    })
    res.status(200).json({success: true, data: postDoc})
  } catch (error) {
    res.status(500).json({success: false, message: error})
  }


})

module.exports = router