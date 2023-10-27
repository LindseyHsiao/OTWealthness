import odalyImage from '../assets/images/OdalyHeadShot.png'
import { format } from 'date-fns'

export default function Blogs({ posts }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 px-10 md:px-15 lg:px-32">
            {posts.map((item) => (
                <div className="m-4 cursor-pointer">
                    <a href={`/Blog/${item._id}`}>
                        <img src={item.img} className="w-full rounded-2xl object-cover h-[200px]" alt="blog" />
                    </a>
                    <h3 className="font-bold mt-3">{item.title}</h3>
                    <h3 className="line-clamp-3 text-gray-400 mt-3">{item.summary}</h3>
                    <div className='mt-5 flex items-center'>
                        <img src={odalyImage} alt='Odaly' className='bg-amber-200 w-[35px] h-[35px] rounded-full' />
                        <div className='ml-2'>
                            <h3 className='font-bold text-[12px]'>{item.author}</h3>
                            <time className='text-gray-500 text-[10px] font-sans'>{format(new Date(item.createdAt), 'MMM d, yyy')}</time>
                        </div>
                    </div>
                </div>

            ))}

        </div>
    )
}