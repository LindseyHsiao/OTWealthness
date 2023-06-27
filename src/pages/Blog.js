import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogData } from '../assets/misc/blog.js'

export default function Blog() {

    const { id } = useParams()

    const filteredBlog = blogData.filter((blog) => blog.id === parseInt(id));
    console.log(filteredBlog)

    return (
        <div>
            <h1>{filteredBlog[0].title}</h1>
        </div>
    )
}
