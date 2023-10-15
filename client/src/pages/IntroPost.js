import { useEffect } from 'react'

export default function IntroPost({post}) {

    return (
        <div className='grid grid-cols-1 mt-10 gap-8 md:grid-cols-2 px-10 md:px-15 lg:px-32'> 
        {/* px-10 md:px-15 lg:px-32 */}
            <img src={post.img} className='rounded-2xl object-cover h-full w-full' alt="blog post"/>
            <div>
                <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
                <h4 className='line-clamp-6 text-gray-400 mt-5'>{post.summary}</h4>
            </div>
        </div>
    )
}