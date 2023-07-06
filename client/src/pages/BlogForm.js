import React, {useState} from 'react'
// import  blogData  from '../assets/misc/blog.json'
import {v4 as uuid} from 'uuid'

export default function BlogForm() {


    const [blogPost, setBlogPost]= useState({
        id: uuid(),
        title: '',
        content: '',
        createdDate: '',
        img: '',
        author: ''
    })

    const handleChange = (e) => {
        const {name, value}= e.target
        setBlogPost({...blogPost, [name]: value})
    }

    const handleSubmit =  (e)=> {
        e.preventDefault()
     

        console.log(blogPost)
        setBlogPost({
            id: uuid(),
            title: '',
            content: '',
            createdDate: '',
            img: '',
            author: ''
        })

        
    }
    return (
        <div className="bg-neutral-50">
            <h1 className="text-xl pl-10" >Blog Entry Form</h1>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4 p-10'>
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' name= 'title' value={blogPost.title} onChange={handleChange}/>
                    <label htmlFor="content" id='content'>Content</label>
                    <textarea name="content" id="content" cols="50" rows="10"  value={blogPost.content} onChange={handleChange}></textarea>
                    <label htmlFor="createdDate" >Date Created</label>
                    <input type="date" id="createdDate" name="createdDate" value={blogPost.createdDate} onChange={handleChange}/>
                    <label htmlFor="img" >Image URL</label>
                    <input type="url" id='img' name='img'  value={blogPost.img} onChange={handleChange}/>
                    <label htmlFor="author">Author</label>
                    <input type="text" id='author' name="author" value={blogPost.author} onChange={handleChange}/>
                    <button type="submit" className='bg-white col-span-2 hover:bg-black hover:text-neutral-50'>Submit</button>
                </div>
            </form>

        </div>
    )
}