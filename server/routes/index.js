const router =  require('express').Router()
const blogRoutes = require('./blogRoutes')
const path = require('path')

router.use('/api', blogRoutes)

router.use((req, res)=> [
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
])

module.exports = router
