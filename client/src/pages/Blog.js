import { useParams } from 'react-router-dom'
import { getOneBlog } from '../utils/API'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'


export default function Blog() {
    const [oneBlog, setOneBlog] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await getOneBlog(id);
                const blogData = await response.json();

                console.log(blogData);
                setOneBlog(blogData)
                setLoading(true)
                // setFormattedDate(new Date(blogData.createdAt))
            } catch (err) {
                console.log(err)
            }

        }
        getData()
    }, [id])

    // console.log(formattedDate)





    return (
        <>
            {!loading ? <h1>...Loading</h1> : (

                <div className="post-page bg-neutral-50 p-10 text-center my-0">
                    <div class="mb-6 lg:mb-0">
                        <h2 class="mb-6 text-center text-3xl font-bold">{oneBlog.title}</h2>
                        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                            <small>Published
                                 <u> {format(new Date(oneBlog.createdAt), 'MMM d, yyy')}</u> 

                                <p>by {oneBlog.author}</p>
                            </small>
                        </p>
                        <div class="flex max-h-64 relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 "
                            data-te-ripple-init data-te-ripple-color="light">
                            <img className="object-center object-cover" src={oneBlog.img} alt="blog post" />
                        </div>



                        <div dangerouslySetInnerHTML={{ __html: oneBlog.content }} className="post-content text-left text-neutral-500 dark:text-nuetral-300" />

                    </div>

                </div>
            )}
        </>





    )
}
