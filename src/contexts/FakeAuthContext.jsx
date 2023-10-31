import { createContext, useState } from "react";


const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
};

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [user,setUser] = useState(null);
    const [isAuth,setIsAuth] = useState(false);

    function login(email,password){
        if(email === FAKE_USER.email && password === FAKE_USER.password){
            setUser(FAKE_USER);
            setIsAuth(auth => !auth);
        }
    }

    function logout(){
        setUser(null);
        setIsAuth(auth => !auth);
    }

    return <AuthContext.Provider value={{user,isAuth,login,logout}} >
        {children}
    </AuthContext.Provider>
}
