import { useEffect, useState } from 'react';
// import odalyLogo from '../assets/images/OdalyLogo.png'
import odalyHeadShot from '../assets/images/OdalyHeadShot.png'
// import blogData from '../assets/misc/blog.json'
// import YoutubeEmbed from './YoutubeEmbed'
import { getAllBlogs } from '../utils/API'
import { format } from 'date-fns'
import odalyImage from '../assets/images/OdalyHeadShot.png'




export default function Home() {
    const [reversedData, setReversedData] = useState([])


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getAllBlogs();
                const blogData = await response.json();


                // display the most recent 3 blog posts. 
                // const reversedDataSet = blogData.toReversed().slice(0, 3);
                const reversedDataSet = blogData.sort((a, b) => {
                    return new Date(b.createdAt) -  new Date(a.createdAt)
                }).slice(0, 3);

                setReversedData(reversedDataSet)
            } catch (err) {
                console.log(err)
            }

        }
        getData()
    }, [reversedData])

    return (
        <>
            {/* <video src={video} autoPlay loop muted></video> */}
            {/* <div className="App">

                <YoutubeEmbed embedId="bxfacPsXVtE" />
            </div>

            <div className='flex flex-col justify-center items-center bg-amber-700 opacity-90 p-10 h-30'>
                <h1 className='uppercase text-4xl mb-10 text-neutral-50'>The journey to inner wealth</h1>
                <button className='border rounded pt-2 pb-2 pr-4 pl-4 text-neutral-50 hover:text-amber-700 hover:bg-neutral-50'>Start Now</button>
            </div> */}

            <div className='flex flex-col lg:flex-row-reverse p-10  m-10'>
                <div className='flex flex-col w-full justify-center md:pr-4 lg:pl-10'>
                    <h1 className='mb-12 text-center text-3xl font-bold'>About  OT</h1>
                    <p className='about px-4 text-left'>Creator & founder of OT WEALTHNESS, wealth is the meaning of Odaly's name "riqueza". Odaly Tineo is a Latina yoga instructor and a self-transformational wellness mentor. She believes inner wealth is creating your own life’s path through authentic connection to, Self. A holistic and intuitive wellness coaching approach that centers around one's innermost explorations. The Inner-Wealth journey was inspired by Odaly's own path of self-discovery and spirituality. The philosophy of Yoga empowers Odaly's body acceptance and connection to her intuitive nature. She applies writing and journaling as a therapeutic mindful practice to regulate mindset and emotions. She is a spiritual light-worker of communities and feminine circles. Odaly holds a Yoga Alliance teacher certification and has been practicing yoga for over a decade. Teaching different types of yoga practices, including energy work, breath work, and meditation techniques in English, y Español. She is first-generation to earn a B.A. in Sociology and M.A.S..  Odaly is a leader of workshops and retreats, hosts supportive community groups for women and is the Co-creator of BRAVA, a community for feminine healing and connection.</p>
                </div>
                <div className='flex flex-col items-center md:justify-center lg:w-1/2 container w-full' >
                    <img src={odalyHeadShot} alt="" className='rounded-t-full ' />
                    
                </div>
            </div>

            



            {/* <!-- Container for demo purpose --> */}
            <div class="container pt-10 mx-auto md:px-6 ">
                {/* <!-- Section: Design Block --> */}
                <section class="mb-32 text-center md:text-left ">

                    <div class="container my-24 mx-auto">

                        <section class="mb-32 text-center">
                            <h2 class="mb-12 text-center text-3xl font-bold">Latest articles</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 ">
                                {reversedData.map((item, i) => (
                                    <div className="m-4 cursor-pointer">
                                        <a href={`/Blog/${item._id}`}>
                                            <img src={item.img} className="w-full rounded-2xl object-cover h-[200px]" alt="blog" />
                                        </a>
                                        <h3 className="font-bold mt-3">{item.title}</h3>
                                        <p className="line-clamp-3 text-gray-400 mt-3">{item.summary}</p>
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
                        </section>
                    </div>

                    <h2 class="mb-12 text-center text-3xl font-bold">Services</h2>

                    <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                        <div class="mb-6 md:order-2 md:mb-0">
                            <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                data-te-ripple-init data-te-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg" class="w-full" alt="Louvre" />
                                <a href="/Services">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="md:order-1">
                            <h3 class="mb-3 text-2xl font-bold">YOGA</h3>


                            <p class="text-neutral-500 dark:text-neutral-300">
                                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                                orci, nec ornare metus semper sed. Integer volutpat ornare erat
                                sit amet rutrum.
                            </p>
                        </div>
                    </div>

                    <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                        <div class="mb-6 md:mb-0">
                            <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                data-te-ripple-init data-te-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg" class="w-full" alt="Louvre" />
                                <a href="#!">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 class="mb-3 text-2xl font-bold">COACHING</h3>

                            <p class="text-neutral-500 dark:text-neutral-300">
                                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa
                                volutpat feugiat. Donec.
                            </p>
                        </div>
                    </div>

                    <a href='/Services'><h2 class="mb-12 text-center text-3xl font-bold">See Full List of Offerings</h2></a>
                </section>
                {/* <!-- Section: Design Block --> */}
            </div>
            {/* <!-- Container for demo purpose --> */}

            <div class="container my-6 mx-auto md:px-6 ">
                {/* <!-- Section: Design Block --> */}
                <section class="mb-12 text-center">
                    <div class="flex flex-wrap justify-center">
                        <div class="flex-basis w-full shrink-0 grow-0 md:w-10/12 md:px-3 lg:w-8/12 xl:w-6/12">
                            <div class="mb-6 inline-block rounded-full bg-amber-700 p-4 shadow-lg shadow-primary/30 dark:shadow-primary/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="h-6 w-6 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>

                            <h2 class="mb-6 text-3xl font-bold">Subscribe to the newsletter</h2>

                            <p class="mb-12 text-neutral-500 dark:text-neutral-200">
                                Weathness delivered to your inbox.
                            </p>

                            <div class="mb-6 flex-row md:mb-0 md:flex">
                                <div class="relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
                                    <input type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput2" placeholder="Enter your email" />
                                    <label for="exampleFormControlInput2"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-teal-800 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Enter
                                        your email
                                    </label>
                                </div>
                                <button type="submit"
                                    class="inline-block rounded bg-amber-700 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-amber-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init data-te-ripple-color="light">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Section: Design Block --> */}
            </div>
        </>
    )
}