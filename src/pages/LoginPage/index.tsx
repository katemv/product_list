import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import ROUTES from 'navigation/routes';
import Input from 'components/common/Input';
import Layout from 'components/common/Layout';
import { useAppDispatch } from 'redux/hooks';
import { loginAsync } from 'redux/features/auth/async';

import { CredentialsHint, Form, LoginButton } from './styles';
import { FormData } from './types';

const LoginPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = useCallback(async (data: FormData) => {
        const resultAction = await dispatch(loginAsync(data));

        if (loginAsync.fulfilled.match(resultAction)) {
            navigate(ROUTES.CATEGORIES);
        }
    }, []);

    return (
        <Layout>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <Input
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
                    type="password"
                    errorMessage="Password is required."
                />
                <CredentialsHint>
                    <span>username: mor_2314</span>
                    <span>password: 83r5^_</span>
                </CredentialsHint>
                <LoginButton type='submit'>
                    Login
                </LoginButton>
            </Form>
        </Layout>
    );
};

export default LoginPage;
