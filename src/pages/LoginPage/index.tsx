import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTES from '../../navigation/routes';

type LocationState = {
    state: {
        path: string;
    };
};

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation() as LocationState;

    const login = () => {
        return new Promise((value) => {
            console.log(value);
        });
    };

    const handleLogin = () => {
        login().then(() => {
            navigate(location.state?.path || ROUTES.LOGIN);
        });
    };

    return <div>login page</div>;
};

export default LoginPage;
