import { useParams } from 'react-router-dom'
import blogData  from '../assets/misc/blog.json'

export default function Blog() {

    const { id } = useParams()

    const filteredBlog = blogData.filter((blog) => blog.id === parseInt(id));
    console.log(filteredBlog)



    return (
        <>
         <section class="bg-neutral-50 p-10 mb-32 text-center">
                <h2 class="mb-12 text-center text-3xl font-bold">{filteredBlog[0].title}</h2>

                <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
                    
                        <div class="mb-6 lg:mb-0">
                            <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                data-te-ripple-init data-te-ripple-color="light">
                                <img src={filteredBlog[0].img} class="w-full" alt="Louvre" />
                                
                            </div>

                            
                            
                            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                                <small>Published <u>{filteredBlog[0].createdDate}</u> by
                                    <a href="#!">{filteredBlog[0].author}</a></small>
                            </p>
                            <p class="text-neutral-500 dark:text-neutral-300 text-left">
                            {filteredBlog[0].content}
                            </p>
                        </div>
                    
                </div>


            </section>


            
        </>
    )
}
