import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'server/axiosInstance';
import { LOGIN_ROUTE } from 'server/constants';
import { setStorageData } from 'utils/LocalStorage';
import { KnownError } from '@types';
import { LoginAsyncParams } from './types';

export const loginAsync = createAsyncThunk<string, LoginAsyncParams, { rejectValue: KnownError }>(
    'auth/login',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axiosInstance.post(LOGIN_ROUTE, {
                username,
                password
            });

            if (response.status !== 200) {
                return thunkAPI.rejectWithValue(response.data as KnownError);
            }

            setStorageData('token', response.data.token);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error as KnownError);
        }
    }
);
