const router =  require('express').Router()
const { getBlogs, addBlog, getOneBlog, deleteOneBlog, updateOneBlog } =  require('../controllers/blogController')

router.route('/blogs').get(getBlogs).post(addBlog)
router.route('/blogs/:id').get(getOneBlog).delete(deleteOneBlog).put(updateOneBlog)

module.exports = router
