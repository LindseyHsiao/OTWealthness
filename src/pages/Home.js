import { useEffect, useState } from 'react';
import odalyLogo from '../assets/images/OdalyLogo.png'
import { blogData } from '../assets/misc/blog.js'


export default function Home() {
    const [reversedData, setReversedData] = useState([])
    console.log(blogData)

    useEffect(() => {

        // display the most recent 3 blog posts. 
        const reversedDataSet = blogData.toReversed().slice(0, 3);
        setReversedData(reversedDataSet)
    }, [reversedData])

    return (
        <>
            {/* <video src={video} autoPlay loop muted></video> */}

            <section className='flex flex-col justify-center items-center bg-amber-700 opacity-90 p-10 h-30'>
                <h1 className='uppercase text-4xl mb-10 text-neutral-50'>The journey to inner wealth</h1>
                <button className='border rounded pt-2 pb-2 pr-4 pl-4 text-neutral-50 hover:text-amber-700 hover:bg-neutral-50'>Start Now</button>
            </section>

            <section className='flex p-10 bg-neutral-50 colums-2'>
                <div className='flex flex-col w-full'>
                    <h1 className='mb-12 text-center text-3xl font-bold'>About OT</h1>
                    <p>Creator & founder of OT WEALTHNESS, wealth is the meaning of Odaly's name "riqueza". Odaly Tineo is a Latina yoga instructor and a self-transformational wellness mentor. She believes inner wealth is creating your own life’s path through authentic connection to, Self. A holistic and intuitive wellness coaching approach that centers around one's innermost explorations. The Inner-Wealth journey was inspired by Odaly's own path of self-discovery and spirituality. The philosophy of Yoga empowers Odaly's body acceptance and connection to her intuitive nature. She applies writing and journaling as a therapeutic mindful practice to regulate mindset and emotions. She is a spiritual light-worker of communities and feminine circles. Odaly holds a Yoga Alliance teacher certification and has been practicing yoga for over a decade. Teaching different types of yoga practices, including energy work, breath work, and meditation techniques in English, y Español. She is first-generation to earn a B.A. in Sociology and M.A.S..  Odaly is a leader of workshops and retreats, hosts supportive community groups for women and is the Co-creator of BRAVA, a community for feminine healing and connection.</p>
                </div>
                <div className='w-full'>
                    <img src={odalyLogo} alt="" />
                </div>
            </section>

            {/* <!-- Container for demo purpose --> */}
            <div class="container pt-10 mx-auto md:px-6 ">
                {/* <!-- Section: Design Block --> */}
                <section class="mb-32 text-center md:text-left ">

                    <div class="container my-24 mx-auto md:px-6">

                        <section class="mb-32 text-center">
                            <h2 class="mb-12 text-center text-3xl font-bold">Latest articles</h2>

                            <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
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
                                        <div class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" class="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                            </svg>
                                            Travels
                                        </div>
                                        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                                            <small>Published <u>{item.createdDate}</u> by
                                                <a href="#!">{item.author}</a></small>
                                        </p>
                                        <p class="text-neutral-500 dark:text-neutral-300">
                                            Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                                            placerat vulputate. Ut vulputate est non quam dignissim
                                            elementum. Donec a ullamcorper diam.
                                        </p>
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