/**
 * AppContext.tsx
 * 
 * This file contains the AppContext and AppProvider components.
 * The AppContext is used to store and manage the state of the app.
 * The AppProvider component is used to provide the AppContext to the app.
 */


import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {

    count: number;
    setCount: (count: number) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export function useAppContext() {
    const context = React.useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}

export function AppProvider({ children }: AppProviderProps) {
    const [count, setCount] = useState(0);

    const value = {
        count,
        setCount,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}