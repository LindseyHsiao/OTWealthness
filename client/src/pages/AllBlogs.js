
import { useEffect, useState } from 'react';
import { getAllBlogs } from '../utils/API'
import { format } from 'date-fns'
import IntroPost from '../components/IntroPost'
import Blogs from '../components/Blogs'

export default function AllBlogs() {

    const [reversedData, setReversedData] = useState([])


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getAllBlogs();
                const blogData = await response.json();


                // display reverse order  
                const reversedDataSet = blogData.toReversed();

                setReversedData(reversedDataSet)
            } catch (err) {
                console.log(err)
            }

        }
        getData()
    }, [reversedData])

    return (

        <section>
            <h1 className='blog-title'>OT Wealthness Blog</h1>
            {reversedData.length > 0 ? <IntroPost post={reversedData[0]} /> : null}
            {reversedData.length > 0 ? <Blogs posts={reversedData} /> : null}
            {/* <div>
                {reversedData.map((item, i) => (
                    <div className="post" key={i}>
                        <div className="image">
                            <a href={`/Blog/${item._id}`}><img src={item.img} alt="article" /></a>
                        </div>
                        <div className="texts">
                            <a href={`/Blog/${item._id}`}><h2>{item.title}</h2></a>
                            <p className="info">
                                <h3 className='author'>{item.author}</h3>
                                <time>{format(new Date(item.createdAt), 'MMM d, yyy')}</time>
                            </p>
                            <p className="summary">{item.summary}</p>
                        </div>
                    </div>


                ))}
            </div> */}
        </section>



    )
}
