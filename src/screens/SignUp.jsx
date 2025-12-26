import { Link } from 'react-router'
import InputButton from '../components/InputButton'
import TextField from '../components/TextField'

export default function SignUp() {
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

                <form className="space-y-5" id="form">
                    <div className='flex gap-2'>
                        {/* first name */}
                        <TextField
                            id='first-name'
                            name='first-name'
                            type='text'
                            required
                            autoComplete='first-name'
                            placeholder='John'
                            className=''
                            label='First Name'
                            error=''
                        />
                        {/* last name */}
                        <TextField
                            id='last-name'
                            name='last-name'
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