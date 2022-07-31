export type LocalStorageProps = keyof LocalStorageType;

export interface LocalStorageType {
    token: string;
}

export const setStorageData = <F extends LocalStorageProps>(key: F, value: LocalStorageType[F]): void => {
    if (value === null) {
        localStorage.removeItem(key);
    } else if (typeof value === 'string') {
        localStorage.setItem(key, value);
    } else {
        console.error('value must be string');
    }
};


export const getStorageData = <F extends LocalStorageProps>(key:F): string | null => {
    const value = localStorage.getItem(key);
    return value != null ? value : null;
};
