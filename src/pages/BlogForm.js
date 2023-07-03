import React from 'react'

export default function BlogForm() {
    return (
        <div className="bg-neutral-50">
            <h1 className="text-xl pl-10" >Blog Entry Form</h1>
            <form action="">
                <div className='grid grid-cols-2 gap-4 p-10'>
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
                    <button className='bg-white col-span-2 hover:bg-black hover:text-neutral-50' type='submit'>Submit</button>
                </div>
            </form>

        </div>
    )
}
