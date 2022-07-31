export interface AuthState {
    status: 'idle' | 'loading' | 'failed';
    isAuthorized: boolean;
    error: string;
}

export interface LoginAsyncParams {
    username: string;
    password: string;
}
