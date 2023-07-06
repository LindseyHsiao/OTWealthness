const router =  require('express').Router()
const {getBlogs} =  require('../controllers/blogController')

router.route('/blogs').get(getBlogs).post()

module.exports = router
