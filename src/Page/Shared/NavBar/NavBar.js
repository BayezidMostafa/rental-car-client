import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'

const NavBar = () => {


    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <Link to='/' className='hidden md:block'>
                    <p className='text-2xl font-bold text-orange-400 md:text-3xl uppercase'>Auto World</p>
                </Link>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <Bars3Icon className='w-10 h-10' />
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
                        <Link to='/' className='md:hidden'>
                            <p className='text-2xl font-bold text-orange-400 mb-2 text-center uppercase'>Auto World</p>
                        </Link>
                        <span className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <input type="text" placeholder="Type here" className="input input-bordered" />
                        </span>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <span className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mr-3 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        <input type="text" placeholder="Type here" className="input input-bordered" />
                    </span>
                </ul>
            </div>
            <div className='navbar-end'>
                <Link to='/sellerpage'><button className='btn bg-orange-800 bg-opacity-25 text-orange-600 hover:bg-orange-200 border-none mr-3'>Sell Your Car</button></Link>
                <label htmlFor="my-drawer"><Bars3Icon className='w-10 h-10 hover:text-orange-500 cursor-pointer duration-300 hover:rotate-180' /></label>
            </div>
        </div>
    );
};

export default NavBar;