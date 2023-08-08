const { Schema, model } =  require('mongoose')

const blogSchema = new Schema(
    {
       title: {
        type: String,
        required: true
       } ,
       content: {
        type: String,
        required: true
       },
       createdAt: {
        type: Date,
        default: Date.now
       },
       img: {
        type: String,
        default: "https://daily.jstor.org/wp-content/uploads/2020/06/why_you_should_learn_the_names_of_trees_1050x700.jpg"
       },
       author: {
        type: String,
        required: true
       }
    },
    {
       getters: true
    }
);


const Blog = model('Blog', blogSchema)

module.exports = Blog