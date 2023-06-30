import React from 'react'

export default function BlogForm() {
    return (
        <div className="bg-orange-50" flex flex-col items-center>
            <h1>Blog Entry Form</h1>
            <form action="">
                <div className='flex flex-col items-center'>
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' />
                    <label htmlFor="content" id='content'>Content</label>
                    <textarea name="content" id="content" cols="50" rows="10"></textarea>
                    <label htmlFor="dateCreated" id="dateCreated">Date Created</label>
                    <input type="date" id="dateCreated" name="dateCreated" />
                    <label htmlFor="image" id='image'>Image URL</label>
                    <input type="url" id='imageURL'/>
                    <label htmlFor="author">Author</label>
                    <input type="text" id='author' />
                    <button className='bg-white' type='submit'>Submit</button>
                </div>
            </form>

        </div>
    )
}
