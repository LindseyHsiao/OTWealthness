import { useParams } from 'react-router-dom'
import { blogData } from '../assets/misc/blog.js'
import { useEffect, useState } from 'react';

export default function Blog() {

    const { id } = useParams()

    const filteredBlog = blogData.filter((blog) => blog.id === parseInt(id));
    console.log(filteredBlog)

    const [reversedData, setReversedData] = useState([])
    console.log(blogData)

    useEffect(() => {

        // display the most recent 3 blog posts. 
        const reversedDataSet = blogData.toReversed().slice(0, 3);
        setReversedData(reversedDataSet)
    }, [reversedData])

    return (
        <>


            <div class="flex flex-1">
                <div class="container my-24 mx-auto md:px-6">

                    <section class="mb-32 text-center">
                        <h2 class="mb-12 text-center text-3xl font-bold">Latest articles</h2>

                        <div class="grid gap-6 lg:grid-cols-1 xl:gap-x-12">
                            {reversedData.map((item, i) => (
                                <div class="mb-6 lg:mb-0">
                                    <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                        data-te-ripple-init data-te-ripple-color="light">
                                        <img src={item.img} class="w-full" alt="Louvre" />
                                        <a href={`/Blog/${item.id}`}>
                                            <div
                                                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                            </div>
                                        </a>
                                    </div>

                                    <h5 class="mb-3 text-lg font-bold">{item.title}</h5>
                                    
                                </div>
                            ))}
                        </div>


                    </section>
                </div>
                <div
                    class="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50">
                </div>
                <div className='flex flex-col'>
                <img className='h-auto w-full p-20' src={filteredBlog[0].img} alt="" />
                <h1>{filteredBlog[0].title}</h1>
                <p>{filteredBlog[0].content}</p>
                </div>
            </div>
        </>
    )
}
