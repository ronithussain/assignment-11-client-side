import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UseAuth from './UseAuth';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
})
const UseAxiosSecure = () => {
    const { signOutUser } = UseAuth();
    const navigate = useNavigate();

    // interceptor e 2 ta jinis thakbe 1.response 2.error and jodi user 401 and 403 ba onno kono error kheye ase tahole take ghar dhore signout or navigate kore signIn page e pathay deya hobe.

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.status === 401 || error.status === 403) {
                signOutUser()
                    .then(() => {
                        // redirect to the login page.
                        navigate('/login')
                    })
            }
            return Promise.reject(error)
        })
    }, [])

    return axiosInstance

};

export default UseAxiosSecure;