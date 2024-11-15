import React from 'react';

export default function Modal({ isVisible }) {

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
            <div className="bg-orange-200 p-8 rounded shadow-lg w-3/4 max-w-lg">
                <h2 className="text-2xl mb-4 font-bold">Your cart</h2>
                <ul className='font-semibold'>
                    <li className="flex">
                        <div>
                            Mac & Cheese - 1 x $7.99
                        </div>
                        <div className="flex items-center text-yellow-700 space-x-6 ml-auto">
                            <button className="w-6 h-6 bg-slate-950 rounded-full text-2xl flex items-center justify-center">-</button>
                            <p className="text-xl font-semibold">2</p>
                            <button className="w-6 h-6 bg-slate-950 rounded-full text-2xl flex items-center justify-center">+</button>
                        </div>
                    </li>
                    <li className="flex">
                        <div>
                            Mac & Cheese - 1 x $7.99
                        </div>
                        <div className="flex items-center text-yellow-700 space-x-6 ml-auto">
                            <button className="w-6 h-6 bg-slate-950 rounded-full text-2xl flex items-center justify-center">-</button>
                            <p className="text-xl font-semibold">2</p>
                            <button className="w-6 h-6 bg-slate-950 rounded-full text-2xl flex items-center justify-center">+</button>
                        </div>
                    </li>
                    <li className="flex">
                        <div>
                            Mac & Cheese - 1 x $7.99
                        </div>
                        <div className="flex items-center text-yellow-700 space-x-6 ml-auto">
                            <button className="w-6 h-6 bg-slate-950 rounded-full text-2xl flex items-center justify-center">-</button>
                            <p className="text-xl font-semibold">2</p>
                            <button className="w-6 h-6 bg-slate-950 rounded-full text-2xl flex items-center justify-center">+</button>
                        </div>
                    </li>
                </ul>
                <p className='text-right font-bold my-6'>$73.25</p>
                <div className='flex flex-row-reverse font-semibold'>
                    <button className='px-4 py-2 bg-yellow-600'>Go to Checkout</button>
                    <button className='px-4 py-2'>Close</button>
                </div>
            </div>
        </div>
    );
}