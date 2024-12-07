import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutEffect } from "../redux/auth/AuthEffect";
import { logout } from '../redux/auth/AuthAction';

const Logout = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        try {
            await LogoutEffect.post('/logout');
            console.log("Logout successful");
        } catch (error) {
            console.error("Error during logout:", error);
        }

        dispatch(logout());

        navigate('/');
    };

    return (
        <div className='logout'>
            <h1>
                Are you sure <span className='user_name'>{user?.name || ""}</span>
            </h1>
            <button className='logout_button' onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
