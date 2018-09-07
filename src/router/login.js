import React from 'react'
export default function (Loadable) {
    return [
        {
            name: 'login',
            path: '/login',
            exact: true,
            component: Loadable({
                loader: () => import('@/views/login/home.jsx'),
                loading: () => <div />
            })
        }
    ]
}