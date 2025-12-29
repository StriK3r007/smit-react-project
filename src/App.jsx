import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";

import Home from './screens/Home';
// import UserAuth from "./screens/UserAuth";
import Dashboard from "./screens/Dashboard";
import Overview from "./screens/Overview";
import Expenses from "./screens/Expenses";
import Settings from "./screens/Settings";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
// import ThemeController from "./components/ThemeController";

// firebase/firestore
import { auth, db } from "./config/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc} from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [user, setUser] = useState(null); // Store logged-in user

  // 1. Add a loading state, default to true
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedOut = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user)
        // User is logged in
        const userId = user.uid;

        try {
          const userDocRef = doc(db, 'users', userId);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            // for entire data
            // const data = docSnap.data();
            const userData = docSnap.data();

            // setUserFirstName(docSnap.data().firstName);
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          toast.error('Error fetching user data')
        }
      } else {
          setUser(null);  // User is logged out
      }
      setLoading(false);
    });

    return () => loggedOut();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false}/>
        {/* <Header/> */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home user={user} firstName={firstName} lastName={lastName} loading={loading}/>}/>
          <Route path='/sign-in' element={<SignIn />}/>
          <Route path='/sign-up' element={<SignUp />}/>

          {/* Protected Route */}
          {/* dashboard layout route */}
          {user ? (
          <Route path="/dashboard" element={<Dashboard firstName={firstName} lastName={lastName} loading={loading}/>}>
            {/* default dashboard page */}
            <Route index element={<Overview />} />

            {/* sidebar pages */}
            <Route path="expenses" element={<Expenses />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          ): (
            <Route path="*" element={<Home />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  )
};
