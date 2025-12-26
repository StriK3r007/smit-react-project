import { Link } from 'react-router'
import InputButton from '../components/InputButton'
import TextField from '../components/TextField'

export default function SignInForm() {
    return (
        <>
            <TextField
                id='email'
                name='email'
                type='email'
                required
                autocomplete='email'
                placeholder='you@example.com'
                className=''
                label='Email Address'
                error=''
            // icon={<HiOutlineMail className="h-5 w-5 text-gray-400" />}
            />
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

            <div className="flex items-center justify-between">
                <div className="text-sm">
                    <Link to="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>
                </div>
            </div>

            <InputButton
                type='submit'
                className='w-full flex justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            />
        </>
    )
}