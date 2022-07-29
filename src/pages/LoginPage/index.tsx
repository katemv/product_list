import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import ROUTES from 'navigation/routes';
import { LocationState, IFormData } from './types';
import { Background, Form, LoginButton, Input, ErrorMessage } from './styles';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation() as LocationState;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>();

    const login = () => {
        return new Promise(() => {
            console.log('login resolved');
        });
    };

    const onSubmit = useCallback((data: IFormData): void => {
        console.log('data', data);
        login().then(() => {
            navigate(location.state?.path || ROUTES.PRODUCTS);
        });
    }, []);

    return (
        <Background>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <Input
                    {...register('username', { required: true })}
                    placeholder="Username"
                    error={!!errors.username}
                />
                {errors.username && <ErrorMessage>Username is required.</ErrorMessage>}
                <Input
                    {...register('password', { required: true })}
                    type="password"
                    placeholder="Password"
                    error={!!errors.password}
                />
                {errors.password && <ErrorMessage>Password is required.</ErrorMessage>}
                <LoginButton type='submit' value='Login' />
            </Form>
        </Background>
    );
};

export default LoginPage;
