import DrawerSidebar from "../components/DrawerSidebar";
import { auth, db } from "../config/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export default function Dashboard() {

    return (
        <section className="w-full">
            <DrawerSidebar />
        </section>
    )
}