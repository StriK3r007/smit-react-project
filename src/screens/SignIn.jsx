import { Link, useNavigate } from 'react-router'
import InputButton from '../components/InputButton'
import TextField from '../components/TextField'

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { useState } from 'react';
import toast, { ToastBar } from 'react-hot-toast';

export default function SignIn() {
    const [error, setError] = useState('');
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        // setUserData({ ...userData, [name]: value})
        setUserData(prevState => ({ ...prevState, [name]: value }));
        console.log(userData)
    }

    const handleSubmit = (event) => {
            event.preventDefault();
    
            if (!userData.email.trim() || !userData.password.trim()) {
                setError("Please enter your email and password");
                toast.error("Please enter your email and password");
                return;
            }
            console.log(userData)
    
            signInWithEmailAndPassword(auth, userData.email, userData.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    toast.success("Signin Successfully!");
                    navigate('/');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error: ${errorMessage} (Code: ${errorCode})`);
                });
    
            setError('');
        };

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div
                className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6 transform transition duration-500 hover:shadow-3xl">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Welcome Back!
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Sign in to manage your expenses.
                    </p>
                </div>

                <form className="space-y-5" id="form" onSubmit={handleSubmit}>
                    <TextField
                        id='email'
                        name='email'
                        type='email'
                        required
                        autoComplete='email'
                        placeholder='johndoe@example.com'
                        className=''
                        label='Email Address'
                        error={error && !userData.email ? "Email is required" : ''}
                        value={userData.email}
                        onChange={handleChange}
                    // icon={<HiOutlineMail className="h-5 w-5 text-gray-400" />}
                    />
                    <TextField
                        id='password'
                        name='password'
                        type='password'
                        required
                        autoComplete='current-password'
                        placeholder='••••••••'
                        className=''
                        label='Password'
                        error={error && !userData.password ? "Password is required" : ''}
                        value={userData.password}
                        onChange={handleChange}
                    />

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <Link to="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>
                        </div>
                    </div>

                    <InputButton
                        type='submit'
                        className='w-full flex justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    />
                </form>

                <div className="text-center text-sm">
                    <p className="text-gray-600">
                        New to EMS?
                        <Link to="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500 pl-1">Create an account</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}