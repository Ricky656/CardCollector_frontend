import { useContext, useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_loginPage.scss";
import LoginForm from '../Components/Authentication/loginForm';
import useLogin from '../hooks/Api/useLogin';
import { useNavigate } from 'react-router';
import { useToast } from '../hooks/useToast';
import useHandleAPIError from '../hooks/useHandleAPIError';
import { AuthContext } from '../hooks/useAuthentication';

function HomePage() {
    const { data, mutateAsync: login, isPending, isError, error, isSuccess } = useLogin();
    const nav = useNavigate();
    const toast = useToast();
    const handleLogin = useContext(AuthContext).HandleLogin;

    useEffect(() => {
        if (isSuccess) {
            const currentUser = {id: data.id, username: data.username, email: data.email}
            handleLogin({token: data.token, currentUser: currentUser});
            toast.open("Successfully logged in!", "toast-success")
            nav("/");
        }
    }, [isSuccess]);

    const submitForm = async (credentials) => {
        try {
            await login(credentials)
        } catch {
            useHandleAPIError(error, toast);
        }
    }
    return (
        <MainLayout>
            <h1>Login</h1>
            <div className='login'>
                <LoginForm isPending={isPending} error={error} onSubmit={submitForm} />
            </div>
        </MainLayout>
    )
}

export default HomePage;