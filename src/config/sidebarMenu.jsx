import { AiOutlineLogout, AiFillCreditCard } from "react-icons/ai";
import { FiHome, FiSettings } from "react-icons/fi";

export const sidebarMenu = [
    {
        label: "Homepage",
        path: "/dashboard",
        icon: <FiHome />,
    },
    {
        label: "Expenses",
        path: "/dashboard/expenses",
        icon: <AiFillCreditCard />,
    },
    {
        label: "Settings",
        path: "/dashboard/settings",
        icon: <FiSettings />,
    },
    {
        label: "Logout",
        path: "/user-auth",
        icon: <AiOutlineLogout />,
    },
];
