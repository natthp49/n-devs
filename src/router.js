import React from 'react';
import Home from './pages/Home';
import Resume from './pages/Resume'

export const routerPublic = [
    {
        path: "/",
        exact: true,
        page: () => (<Home />)
    },
    {
        path: "/resume",
        page: () => (<Resume />)
    }
]