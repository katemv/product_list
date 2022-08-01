import { ReactElement, FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'redux/hooks';
import { selectIsAuthorized } from 'redux/features/auth/selectors';
import { getStorageData }  from 'utils/LocalStorage';

import ROUTES from './routes';

interface Props {
    children: ReactElement;
}

const AuthProvider: FC<Props> = ({ children }) => {
    const navigate = useNavigate();
    const isAuthorized = useAppSelector(selectIsAuthorized);

    useEffect(() => {
        const token = getStorageData('token');

        if (!isAuthorized && token === null) {
            navigate(ROUTES.LOGIN, { replace: true });
        }

    }, [isAuthorized]);


    return children;
};

export default AuthProvider;
