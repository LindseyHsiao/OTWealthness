import odalyLogo from '../assets/images/OdalyLogo.png'

export default function Events() {
    return (
        <>
        <section>
            <div className="section-container my-20">
                <h3 className="">Services</h3>

            </div>
        </section>

        <section className='flex border-b mb-10 p-10'>
            <div className='border-r mr-10'>
                <img src={odalyLogo} alt="" />
            </div>
            <div>
                <h1 className='mb-2 font-bold'>INNER WEALTH STORYTELLING</h1>
                <p className='font-light'>A biweekly feminine evening of storytelling that advocates for uplifting and healing of feminine energy. Join in from your safe space to a sacred zoom call space. The storytelling will be led intuitively as we check-in with each other, share and or listen in to the stories that connects us women with laughter, cries, and wisdom, the medicine to our SOUL. </p>
            </div>
            <div className='flex justify-center ml-10 border-b'>
                <button>Book</button>
            </div>
        </section>
        </>
    )
}