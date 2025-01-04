"use client"
import Image from 'next/image';
import React from 'react';

interface CartItem {
    _id: number;
    title: string;
    quantity: number;
    image: string;
    price: number;
}

interface CartProps {
    cart: CartItem[]; // This defines the array of cart items
    onRemove: (id: number) => void;
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ cart = [], onRemove, onClose }) => { // Set default value for cart

    if (!cart) {
        cart = []; // If undefined, fallback to an empty array
    }
    return (
        <div className="fixed top-16 right-0 overflow-y-auto w-full max-w-sm bg-white shadow-lg rounded-md p-4 z-50">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Cart</h2>
                <button onClick={onClose} className="text-xl font-bold">
                    &times;
                </button>
            </div>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {cart.map((item) => (
                        <li key={item._id} className="flex items-center justify-between">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={50}
                                height={50}
                                className="rounded-md"
                            />
                            <div className="flex-1 mx-4">
                                <h3 className="text-sm font-medium">{item.title}</h3>
                                <p className="text-sm">Quantity: {item.quantity}</p>
                                <p className="text-sm">Price: ${item.price * item.quantity}</p>
                            </div>
                            <button
                                onClick={() => onRemove(item._id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
