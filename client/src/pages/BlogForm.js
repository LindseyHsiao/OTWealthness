import React, { useState } from 'react'
import { createBlog } from '../utils/API'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];


export default function BlogForm() {

    // use state to store an object, properties will default to empty strings for the given value
    const [blogPost, setBlogPost] = useState({
        title: '',
        content: '',
        createdDate: '',
        img: '',
        author: '',
        summary: ''
    })
   
    //on change 
    const handleChange = (e) => {
        const { name, value } = e.target
        setBlogPost({ ...blogPost, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            
            // const response = await createBlog(blogPost)

            // if (!response.ok) {
            //     throw new Error('couldnt create blog')
            // }
            console.log(blogPost)
          

        
            setBlogPost({
                title: '',
                content: '',
                createdDate: '',
                img: '',
                author: '',
                summary: ''
            })
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className="px-10 bg-neutral-50 ">
            <h1 className="text-xl pb-5" >Blog Entry Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder={'Title'}
                    id='title' name='title'
                    value={blogPost.title}
                    onChange={handleChange} />
                <input type="text"
                    placeholder={'Summary'}
                    id='summary'
                    name='summary'
                    value={blogPost.summary}
                    onChange={handleChange} />
                <input type="url"
                    placeholder={'Image URL'}
                    id='img'
                    name='img'
                    value={blogPost.img}
                    onChange={handleChange} />


                <input className='mt-5px'
                    type="date"
                    id="createdDate"
                    name="createdDate"
                    value={blogPost.createdDate}
                    onChange={handleChange} />
                <input type="text"
                    placeholder={'Author'}
                    id='author'
                    name="author"
                    value={blogPost.author}
                    onChange={handleChange} />
                <ReactQuill 
                value={blogPost.content}

                    onChange={newValue => {
                        setBlogPost({...blogPost, ["content"]: newValue})
                    }}
                    modules={modules}
                    formats={formats} />
                <button type="submit"
                    className='mt-5 bg-white text-black col-span-2 hover:bg-black hover:text-neutral-50'>Submit</button>

            </form>

        </div>
    )
}
