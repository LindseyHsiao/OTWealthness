const fs = require('fs')

module.exports = {
    async getBlogs(req, res) {
        try {
            const blogData = await fs.readFileSync('db/blog.json')
            const parsedData = JSON.parse(blogData)
            return res.json(parsedData)
        } catch (err) {
            res.json(err)
        }
    },
    async addBlog(req, res) {

    }, 
    async getOneBlog(req, res){
        
    }
}

