'use client';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Cart from '../app/cart/page';
import Link from 'next/link';

interface ProductProps {
    _id: number;
    title: string;
    price: number;
    previousPrice: number;
    description: string;
    category: string;
    image: string;
    isNew: boolean;
    brand: string;
    quantity: number;
}

interface Props {
    products: ProductProps[];
}

function Products({ products }: Props) {
    const [cart, setCart] = useState<ProductProps[]>([]);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (product: ProductProps) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item._id === product._id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    };

    return (
        <div>
            {/* Navbar */}
            <div className='fixed w-full top-0 left-0 '>
            <Navbar
                cartCount={cart.reduce((count, item) => count + item.quantity, 0)}
                toggleCart={() => setShowCart(!showCart)}
            />
            </div>

            {/* Cart */}
            {showCart && <Cart cart={cart} onRemove={removeFromCart} onClose={() => setShowCart(false)} />}

            {/* Product List */}
            <div className='flex items-center flex-wrap mt-5 justify-center gap-6'>
                {products.map((product) => (
                    <div
                        key={product._id}
                        className='border border-gray-300 hover:border-gray-600 duration-300 rounded-md'>

                        <div>
                            <Image src={product.image} alt="product image" width={250} height={250} />
                        </div>
                        <div className='px-4 pb-2'>
                            <div className='name'>
                                <h1 className='text-xs font-semibold'>{product.title}</h1>
                            </div>
                            <div className='price text-base flex items-center gap-2'>
                                <h1>{product.price}</h1>
                                <h1 className='text-gray-500 line-through'>{product.previousPrice}</h1>
                            </div>
                            <div className='brand'>
                                <h1 className='text-[14px] text-gray-500'>{product.brand}</h1>
                            </div>
                            <div className='button flex items-center justify-between mt-1'>
                                <button
                                    onClick={() => addToCart(product)}
                                    className='bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600'>
                                    Add to cart
                                </button>
                                <Link href={{ pathname: "/singleProduct", query: { _id: product._id } }}>
                                    <button className='uppercase hover:text-blue-600 duration-200'>
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
