import { useState } from 'react'

export default function LogIn() {

    // use state to store an object, properties will default to empty strings for the given value
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    //on change 
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(e.target.value)
        setUser({ ...user, [name]: value })
    }
    console.log(user)

    //handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           console.log(user)
            //set user state back to empty 
            // setUser({
            //     firstName: '',
            //     lastName: '',
            //     email: ''
            // })
            window.location.replace("/Table");
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            {/* form for first last email password console log this info */}
            <form className="login" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input 
                onChange={handleChange} //or onChange= {ev => setUser(ev.target.value)}
                type="text" 
                placeholder="First Name" 
                name="firstName" 
                value={user.firstName} 
                />
                <input 
                onChange={handleChange} 
                type="text" 
                placeholder="Last Name" 
                id="lastName" 
                name="lastName" 
                value={user.lastName} />
                <input 
                onChange={handleChange} 
                type="text" 
                placeholder="Email" 
                id="email" 
                name="email" 
                value={user.email} />


                <button>Submit</button>

            </form>
        </>
    )
}