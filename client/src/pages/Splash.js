import splash from '../assets/images/Home.png'
import keyWing from '../assets/images/keywing2.png'

export default function Splash() {
    return (

        <section className='hero' style={{ backgroundImage: `url(${splash})` }}>
            <div className='content'>
                <h1>Odaly Tineo</h1>
                <p>wholistic coaching and spiritual healing</p>
                <img src={keyWing}></img>
                <a href="/home">Unlock your wealthness</a>
            </div>
        </section>

    )
}