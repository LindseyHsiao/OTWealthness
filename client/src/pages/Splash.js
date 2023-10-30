import splash from '../assets/images/welcomeImg.PNG'

export default function Splash() {
    return (

        <section className='hero' style={{ backgroundImage: `url(${splash})` }}>
            <div className='content'>
                <h1>Odaly Tineo</h1>
                <p>wholistic coaching and spiritual healing</p>
                <a href="/home">Unlock your wealthness</a>
            </div>
        </section>

    )
}