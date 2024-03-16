import { createContext, useEffect, useState } from "react";

export const AuthContext= createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))|| null
    )
    const login=()=>{
        setCurrentUser({id:1,
            name:"Jonson",
            profilePic:"https://images.pexels.com/photos/16015834/pexels-photo-16015834/free-photo-of-bearded-man-in-a-white-t-shirt-and-cap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
    }


useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(currentUser));

},[currentUser])

return(
    <AuthContext.Provider value={{currentUser,login}}>
        {children}
    </AuthContext.Provider>
)
};