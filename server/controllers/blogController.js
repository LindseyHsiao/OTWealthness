const { Blog } = require('../models')


module.exports = {
    async getBlogs(req, res) {
        try {
            const blogData = await Blog.find()
            res.json(blogData)
        } catch (err) {
            res.json(err)
        }
    },

    async addBlog(req, res) {
        try {
            console.log(req.body);
            const newBlog = await Blog.create(req.body)
            res.json(newBlog);
        } catch (err) {
            res.status(500).json(err)
        }

    },
    async getOneBlog(req, res) {
        try {
            const oneBlog = await Blog.findOne({ _id: req.params.id })
            res.json(oneBlog)

        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    async deleteOneBlog(req, res) {
        try {
            const oneBlog = await Blog.findOneAndDelete(
                { _id: req.params.id },
                {new: true}
            )
            res.json({ message: 'Blog Deleted' })
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    async updateOneBlog(req, res) {
        try {
            const oneBlog = await Blog.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { new: true }
            )
            res.json(oneBlog)
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    }
}

