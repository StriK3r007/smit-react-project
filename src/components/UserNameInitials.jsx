// import { useState, useEffect } from "react";

// export default function UserNameInitials() {
//     const [userName, setUserName] = useState('Zubair Ahmed');
//     const [userNameInitials, setUserNameInitials] = useState('');

//     useEffect(() => {
//         const initials = userName
//             .split(" ")  // Split the name by spaces
//             .slice(0, 2)  // Get the first two words (for first and last name)
//             .map(word => word[0].toUpperCase())  // Get the first letter and capitalize it
//             .join('');  // Join them into a string
//         setUserNameInitials(initials);  // Update state with initials
//     }, [userName]);  // Recalculate whenever userName changes

//     return (
//         <div>
//             <p>User's initials: {userNameInitials}</p>
//         </div>
//     );
// }


export default function UserNameInitials({name}) {
    // const [userName, setUserName] = useState(name);
    const userName = name;
    
    // Calculate initials directly in the render logic
    const userNameInitials = userName
        .split(" ")  // Split the name by spaces
        .slice(0, 2)  // Get the first two words (for first and last name)
        .map(word => word[0].toUpperCase())  // Get the first letter and capitalize it
        .join('');  // Join them into a string

    return (
        <div>
            <p className="text-[1.2rem]">{userNameInitials}</p>
        </div>
    );
}


// Method-2:
// import { useEffect, useState } from "react";

// export default function UserNameInitials() {
//     const [userName, setUserName] = useState("");

//     useEffect(() => {
//         // Example: fetching from Firebase / Firestore
//         // getUserFromFirestore().then(user => {
//         //     setUserName(user.displayName);
//         // });

//         setUserName("Zubair Ahmed"); // demo
//     }, []);

//     const userNameInitials = userName
//         ? userName
//               .trim()
//               .split(/\s+/)
//               .slice(0, 2)
//               .map(word => word[0].toUpperCase())
//               .join("")
//         : "";

//     return (
//         <div className="avatar">
//             {userNameInitials}
//         </div>
//     );
// }
