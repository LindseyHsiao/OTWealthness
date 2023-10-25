import odalyImage from '../assets/images/OdalyHeadShot.png'
import { format } from 'date-fns'
// import odalyLogo from '../assets/images/OdalyLogo.png'



export default function IntroPost({ post }) {

    return (
        <div className='grid grid-cols-1 mt-10 gap-8 md:grid-cols-2 px-10 md:px-15 lg:px-32'>
            <a href={`/Blog/${post._id}`}>
                <img src={post.img} className='rounded-2xl object-cover h-full w-full' alt="blog post" />
            </a>
            <div>
                <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
                <h4 className='line-clamp-6 text-gray-400 mt-5'>{post.summary}</h4>
            </div>
            <div className='mt-5 flex items-center'>
                <img src={odalyImage} alt='Odaly' className='bg-amber-200 w-[50px] h-[50px] rounded-full' />
                <div className='ml-2'>
                    <h3 className='font-bold'>{post.author}</h3>
                    <time className='text-gray-500 font-sans'>{format(new Date(post.createdAt), 'MMM d, yyy')}</time>
                </div>
            </div>
        </div>
    )
}