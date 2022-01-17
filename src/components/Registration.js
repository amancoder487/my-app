import React, { useState } from 'react';


const Registraction = () => {
    const [name, setName] = useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const NameChangeHander = (e) => {
        setName(e.target.value)
    }

    const EmailChangeHander = (e) => {
        setEmail(e.target.value)
    }

    const PasswordChangeHander = (e) => {
        setPassword(e.target.value)
    }

    const SubmitHander = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setPassword('')
    
    }
    return (
        <div>

            <form onSubmit={SubmitHander}>
                <h1>User Registration</h1>
                <label>Name :</label>
                <input type="text" value={name} onChange={NameChangeHander} placeholder="Name." /><br />
                <label>Email:</label>
                <input type="email" value={email} onChange={EmailChangeHander} placeholder="Email" /><br/>
                <label>Password:</label>
                <input type="password" value={password} onChange={PasswordChangeHander} placeholder="Password"/><br/>
                <label>Gender :</label>
                <select defaultValue="Select Gender">
                    <option defaultValue>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br />
                <input type="submit" value="Submit" />
            </form>

        </div>

    )
}
export default Registraction;