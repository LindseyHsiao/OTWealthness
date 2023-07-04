import { useParams } from 'react-router-dom'
import blogData  from '../assets/misc/blog.json'

export default function Blog() {

    const { id } = useParams()

    const filteredBlog = blogData.filter((blog) => blog.id === parseInt(id));
    console.log(filteredBlog)



    return (
        <>


            <div className="flex flex-1">
                {/* <div className="container my-24 mx-auto md:px-6">

                    <section className="mb-32 text-center">
                        <h2 className="mb-12 text-center text-3xl font-bold">Latest articles</h2>

                        <div className="grid gap-6 lg:grid-cols-1 xl:gap-x-12">
                            {reversedData.map((item, i) => (
                                <div className="mb-6 lg:mb-0" key={i}>
                                    <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                        data-te-ripple-init data-te-ripple-color="light">
                                        <img src={item.img} className="w-full" alt="Louvre" />
                                        <a href={`/Blog/${item.id}`}>
                                            <div
                                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                            </div>
                                        </a>
                                    </div>

                                    <h5 className="mb-3 text-lg font-bold">{item.title}</h5>

                                </div>
                            ))}
                        </div>


                    </section>
                </div> */}
                <div
                    className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50">
                </div>
                <div className='flex flex-col'>
                    
                    <h1>{filteredBlog[0].title}</h1>
                    <img className='h-auto w-full p-20' src={filteredBlog[0].img} alt="" />
                    <p>{filteredBlog[0].content}</p>
                </div>
            </div>
        </>
    )
}
