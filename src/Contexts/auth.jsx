import {React, createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvicer = ({children}) =>{
    const [user, setUser] = useState(null)

    const loggedUser = {
        id: '123',
        email, 
    }

    localStorage.setItem('user', JSON.stringify(loggedUser))

    const login = (email, password) => {
        console.log('login auth', { email, password})
        if(password == "123"){
            setUser(loggedUser)
            navigate("/Painel")
        }
        
    }
    

    const logout = () => {
        console.log('logout')
        setUser(null)
        navigate("/Login")
    }
    const navigate = useNavigate();
    return (
        <AuthContext.Provider 
        value ={{authenticated: !!user, user, login, logout
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};