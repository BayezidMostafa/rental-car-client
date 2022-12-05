import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div>
                    <p className='text-2xl font-bold text-orange-400 md:text-3xl uppercase'>Auto World</p>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <Bars3Icon className='w-10 h-10' />
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
                        <span className='flex items-center'>
                            <MagnifyingGlassCircleIcon className='w-10 h-10 block mr-2' />
                            <input type="text" placeholder="Type here" className="input input-bordered" />
                        </span>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <span className='flex items-center'>
                        <MagnifyingGlassCircleIcon className='w-10 h-10 block mr-2' />
                        <input type="text" placeholder="Type here" className="input input-bordered" />
                    </span> 
                </ul>
            </div>
            <div className='navbar-end'>
                <Link to='/sellerpage'><button className='btn bg-orange-200 hover:bg-orange-100 border-none text-black mr-3'>Sell Your Car</button></Link>
                <label htmlFor="my-drawer"><Bars3Icon className='w-10 h-10 hover:text-orange-500 cursor-pointer duration-300 hover:rotate-180' /></label>
            </div>
        </div>
    );
};

export default NavBar;