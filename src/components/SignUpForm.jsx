import { Link } from 'react-router'
import InputButton from './InputButton'
import TextField from './TextField'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { useState } from 'react';

export default function SignUpForm() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }) 

    const handleChange = (event) => {
        const {name, value} = event.target
        setUserData({ ...userData, [name]: value})
        console.log(userData)
    }

    return (
        <>
            <div className='flex gap-2'>
                {/* first name */}
                <TextField
                    id='first-name'
                    name='firstName'
                    type='text'
                    required
                    autoComplete='first-name'
                    placeholder='John'
                    className=''
                    label='First Name'
                    error=''
                    value={userData.firstName}
                    onChange={handleChange()}
                />
                {/* last name */}
                <TextField
                    id='last-name'
                    name='lastName'
                    type='text'
                    required
                    autoComplete='last-name'
                    placeholder='Doe'
                    className=''
                    label='Last Name'
                    error=''
                />
            </div>
            {/* email */}
            <TextField
                id='email'
                name='email'
                type='email'
                required
                autocomplete='email'
                placeholder='johndoe@example.com'
                className=''
                label='Email Address'
                error=''
            // icon={<HiOutlineMail className="h-5 w-5 text-gray-400" />}
            />
            {/* password */}
            <TextField
                id='password'
                name='password'
                type='password'
                required
                autocomplete='current-password'
                placeholder='••••••••'
                className=''
                label='Password'
            />
            {/* confirm-password */}
            <TextField
                id='confirm-password'
                name='confirm-password'
                type='password'
                required
                autocomplete='current-password'
                placeholder='••••••••'
                className=''
                label='Confirm Password'
            />

            <div className="flex items-center justify-between">
                <div className="text-sm">
                    <Link to="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>
                </div>
            </div>

            <InputButton
                type='submit'
                className='w-full flex justify-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
                func='handleSubmit'
            />
        </>
    )
}