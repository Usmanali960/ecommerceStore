import 'boxicons/css/boxicons.min.css';
import React from 'react';
import Link from 'next/link';

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
            {/* Navbar links */}
            <div className='flex space-x-6'>
                {routes.map((route) => (
                    <div key={route.routeName}>
                        <Link href={route.href}>
                            <p className='hover:text-blue-500'>{route.routeName}</p>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Cart Icon */}
            <div className='relative cursor-pointer' onClick={toggleCart} aria-label="Open Cart">
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
