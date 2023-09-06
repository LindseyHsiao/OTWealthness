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
        setUser({ ...user, [name]: value })
    }

    //handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await console.log(user)

            if (!response.ok) {
                throw new Error('couldnt create user')
            }

            setUser({
                firstName: '',
                lastName: '',
                email: ''
            })
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            {/* form for first last email password console log this info */}
            <form className="login" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="First Name" id="firstName" name="firstName" value={user.firstName} />
                <input onChange={handleChange} type="text" placeholder="Last Name" id="lastName" name="lastName" value={user.lastName} />
                <input onChange={handleChange} type="text" placeholder="Email" id="email" name="email" value={user.email} />


                <button>Submit</button>

            </form>
        </>
    )
}