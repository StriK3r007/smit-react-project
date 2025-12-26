import { useState } from 'react'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

export default function UserAuth() {
    const [isNewUser, setIsNewUser] = useState(false)
    // const [mode, setMode] = useState('signin') // or 'signup'
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold">
                        {isNewUser ? 'Create Your Account' : 'Welcome Back!'}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {isNewUser
                            ? 'Join EMS to manage your expenses.'
                            : 'Sign in to manage your expenses.'}
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    {isNewUser ? <SignUpForm /> : <SignInForm />}
                </form>

                {/* Toggle */}
                <div className="text-center text-sm">
                    {isNewUser ? (
                        <>
                            Already have an account?
                            <button
                                className="font-medium text-pink-600 pl-1"
                                onClick={() => setIsNewUser(false)}
                            >
                                Sign in
                            </button>
                        </>
                    ) : (
                        <>
                            New to EMS?
                            <button
                                className="font-medium text-indigo-600 pl-1"
                                onClick={() => setIsNewUser(true)}
                            >
                                Create an account
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}