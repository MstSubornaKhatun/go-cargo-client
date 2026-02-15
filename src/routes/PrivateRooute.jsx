import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../components/Loading/Loading';
import { Navigate } from 'react-router';

const PrivateRooute = () => {
    const {user, loading} = useAuth();


    if(loading){
        return <Loading/>
    }

    if(!user){
        <Navigate to="/login"></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRooute;