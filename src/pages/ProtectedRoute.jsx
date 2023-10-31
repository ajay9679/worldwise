import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/FakeAuthContext';
import { useNavigate } from 'react-router-dom';


export default function ProtectedRoute({children}){
    const navigate = useNavigate();
    const {isAuth} = useContext(AuthContext);
    useEffect(function(){
        if(!isAuth) navigate('/');
    },[isAuth,navigate]);
    return isAuth ? children : null;
}
