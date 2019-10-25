import React from 'react';
import Home from './pages/Home'

export const routerPublic = [
    {
        path: "/",
        exact: true,
        page: () => (<Home />)
    }
]