import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeController from './ThemeController'
import UserNameInitials from "./UserNameInitials";

import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseconfig";

export default function Header({ user, firstName, lastName, loading }) {
    const navigate = useNavigate()

    // Get the current path to dynamically apply 'active' styles
    const location = useLocation();

    const navLinks = [
        { id: 1, name: 'Home', path: '/' },
    ];

    const logoutUser = () => {
        signOut(auth).then(() => {
            navigate('/sign-in');
        }).catch((error) => {
            alert(`Error: ${error.message} (Code: ${error.code})`);
        });
    }

    return (
        <header className="bg-base-100 shadow-sm px-4">
            <div className="navbar container mx-auto">
                {/* START: Logo & Mobile Menu */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks.map((link) => (
                                <li key={link.id}><Link to={link.path}>{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <Link to="/" className="text-xl">EMS</Link>
                </div>

                {/* CENTER: Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    to={link.path}
                                    className={`
                                        inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-150 ease-in-out
                                            ${location.pathname === link.path
                                            ? 'border-b-2 border-amber-400 text-amber-400' // Active style
                                            : 'text-gray-300 hover:text-white hover:border-gray-500 border-b-2 border-transparent' // Inactive style
                                        }
                                    `}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Notifications & Profile */}
                <div className="navbar-end gap-2">
                    <ThemeController />
                    {loading ? (
                        <div className="flex gap-2">
                            {/* Optional: Show a small skeleton or nothing during load */}
                            <span className="loading loading-spinner loading-sm"></span>
                        </div>
                    ) : user ? (
                        <>
                            {/* Notification Icon */}
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>

                            {/* User Profile Dropdown */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
                                        {/* Avatar Logic Simplified */}
                                        <UserNameInitials firstName={firstName} lastName={lastName} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><Link to="/dashboard/settings">Settings</Link></li>
                                    <div className="divider my-0"></div>
                                    <li><button onClick={logoutUser} className="text-error">Logout</button></li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <div className="flex gap-2">
                            <Link to="/sign-in" className="btn btn-ghost">Login</Link>
                            <Link to="/sign-up" className="btn btn-primary">Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}