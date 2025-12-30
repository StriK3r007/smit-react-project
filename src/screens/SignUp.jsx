import { useState } from 'react';
import { Link, useNavigate } from 'react-router'
import InputButton from '../components/InputButton'
import TextField from '../components/TextField'

// firbase / firestore
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebaseconfig";
import toast from 'react-hot-toast';

export default function SignUp() {
    const [error, setError] = useState('');
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target
        // setUserData({ ...userData, [name]: value})
        setUserData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!userData.firstName.trim() || !userData.lastName.trim() || !userData.email.trim() || !userData.password.trim() || !userData.confirmPassword.trim()) {
            toast.error("All fields are required!")
            return
        }

        if (userData.password !== userData.confirmPassword) {
            toast.error("Passwords don't match!");
            return;
        }

        createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user);

                try {
                    const userDbData = {
                        uid: user.uid,
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        email: userData.email,
                        profile: '',
                        role: "user",
                        createdAt: Timestamp.fromDate(new Date()),
                        updatedAt: Timestamp.fromDate(new Date())
                    }

                    // ! this code generates a random id and uses it for document
                    // const docRef = await addDoc(collection(db, "users"), userDbData);

                    // ! while this code uses user id for document
                    // FIX: Use setDoc with doc() to specify the ID manually
                    // Syntax: setDoc(doc(database, collection, documentID), data)
                    await setDoc(doc(db, "users", user.uid), userDbData);

                    console.log("Document written with ID matching UID: ", user.uid);
                    toast.success("Account Created Successfully!");
                    navigate('/sign-in');
                } catch (error) {
                    toast.error('Error adding document');
                    console.error("Error adding document: ", error);
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // alert(`Error: ${errorMessage} (Code: ${errorCode})`);
                toast.error(`Error: ${errorMessage} (Code: ${errorCode})`);
                console.error(`Error: ${errorMessage} (Code: ${errorCode})`);
            });

        setError('');
    };

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div
                className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6 transform transition duration-500 hover:shadow-3xl">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join EMS to manage your expenses.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
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
                            error={error && !userData.firstName ? "First name is required" : ''}
                            value={userData.firstName}
                            onChange={handleChange}
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
                            error={error && !userData.lastName ? "Last name is required" : ''}
                            value={userData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    {/* email */}
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
                    {/* password */}
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
                    {/* confirm-password */}
                    <TextField
                        id='confirm-password'
                        name='confirmPassword'
                        type='password'
                        required
                        autoComplete='current-password'
                        placeholder='••••••••'
                        className=''
                        label='Confirm Password'
                        error={error}
                        value={userData.confirmPassword}
                        onChange={handleChange}
                    />

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <Link to="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>
                        </div>
                    </div>

                    <InputButton
                        type='submit'
                        value='Sign up'
                        className='w-full flex justify-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
                    />
                </form>

                <div className="text-center text-sm">
                    <p className="text-gray-600">
                        Already have an account?
                        <Link to="/sign-in" className="font-medium text-pink-600 hover:text-pink-500 pl-1">Sign In here </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}