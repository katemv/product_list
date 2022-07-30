import React, { FC, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import ROUTES from 'navigation/routes';
import Input from 'components/common/Input';
import Layout from 'components/common/Layout';
import { LocationState, FormData } from './types';
import { Form, LoginButton } from './styles';

const LoginPage: FC = () => {
    const navigate = useNavigate();
    const location = useLocation() as LocationState;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const login = () => {
        return new Promise(() => {
            console.log('login resolved');
        });
    };

    const onSubmit = useCallback((data: FormData): void => {
        login().then(() => {
            navigate(location.state?.path || ROUTES.CATEGORIES);
        });
    }, []);

    return (
        <Layout>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <Input<FormData>
                    register={register}
                    errors={errors}
                    placeholder="Username"
                    name="username"
                    errorMessage="Username is required."
                />
                <Input
                    register={register}
                    errors={errors}
                    placeholder="Password"
                    name="password"
                    errorMessage="Password is required."
                />
                <LoginButton type='submit'>
                    Login
                </LoginButton>
            </Form>
        </Layout>
    );
};

export default LoginPage;
