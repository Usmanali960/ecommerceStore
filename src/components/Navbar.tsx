import 'boxicons/css/boxicons.min.css';
import React from 'react';

interface routesDataTypes {
    href: string;
    routeName: string;
}

const routes: routesDataTypes[] = [
    {
        href: '/',
        routeName: 'Phones',
    },
];

interface NavbarProps {
    cartCount: number;
    toggleCart: () => void;
}

function Navbar({ cartCount, toggleCart }: NavbarProps) {
    return (
        <div className='flex items-center justify-between p-4 bg-gray-800 text-white text-2xl sticky top-0 left-0 z-50'>
            {routes.map((route) => (
                <div key={route.routeName}>
                    <a href={route.href}>{route.routeName}</a>
                </div>
            ))}
            <div className='relative cursor-pointer' onClick={toggleCart}>
                <i className='bx bxs-cart-alt'></i>
                {cartCount > 0 && (
                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                        {cartCount}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Navbar;
