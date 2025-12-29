import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { sidebarMenu } from "../config/sidebarMenu";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import UserNameInitials from "./UserNameInitials";

export default function DrawerSidebar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [avatar, isAvatar] = useState(false)
    const navigate = useNavigate()

    const location = useLocation();

    const closeDrawer = () => {
        const drawer = document.getElementById("my-drawer-4");
        if (drawer) drawer.checked = false;
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("Navbar User is logged in:", user.uid);
                setIsLoggedIn(true)
            } else {
                console.log("No user is logged in.");
                navigate('/sign-in')
            }
        })
    }, [])

    const logoutUser = () => {
        signOut(auth).then(() => {
            navigate('/sign-in');
        }).catch((error) => {
            alert(`Error: ${error.message} (Code: ${error.code})`);
        });
    }

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <div className="px-4">Expense Management System</div>
                    </nav>
                    {/* Page content here */}
                    <div className="p-6">
                        <Outlet />
                    </div>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex justify-center items-center bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 pt-4">
                        {/* Profile Dropdown or Login Button */}
                        <div>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                    {
                                        avatar && avatar ? (
                                            <img alt="User profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        ) : (
                                            <UserNameInitials name='Zubair Ahmed' />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow">
                            {/* List item */}
                            {
                                sidebarMenu.map((item, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={item.path}
                                            onClick={closeDrawer}
                                            data-tip={item.label}
                                            className={`is-drawer-close:tooltip is-drawer-close:tooltip-right
                                                ${location.pathname === item.path
                                                    ? 'text-amber-400' // Active style
                                                    : 'text-gray-500 hover:text-gray-400' // Inactive style
                                                }
                                            `}
                                        >
                                            {item.icon}
                                            <span className="is-drawer-close:hidden">{item.label}</span>
                                        </NavLink>
                                    </li>
                                ))
                            }
                            <li
                                data-tip='Logout'
                                className={`is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                                onClick={logoutUser}
                            >
                                {<AiOutlineLogout />}
                                <span className="is-drawer-close:hidden" onClick={logoutUser}>Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}