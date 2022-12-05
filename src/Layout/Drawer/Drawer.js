import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Page/Shared/NavBar/NavBar';

const Drawer = () => {
    return (
        <div>
            <NavBar />
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <div className="collapse border">
                            <div className="collapse-title text-xl font-medium">
                                <p>Basic Information</p>
                            </div>
                            <div className="collapse-content">
                            </div>
                        </div>
                        <div className="collapse border">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                    Car Cost</p>
                            </div>
                            <div className="collapse-content">
                                <div className='flex gap-2'>
                                    <div className='bg-white shadow-md rounded px-5'>
                                        <p>Price from:</p>
                                        <p>$21000</p>
                                    </div>
                                    <div className='bg-white shadow-md rounded px-5'>
                                        <p>Price up to:</p>
                                        <p>$34000</p>
                                    </div>
                                </div>
                                <div>
                                    <input type="range" min="0" max="100" value="40" className="range range-warning my-3" />
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="cursor-pointer label">
                                            <input type="checkbox" className="checkbox checkbox-warning" />
                                            <span className="label-text">Possible Bargaining</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="cursor-pointer label">
                                            <input type="checkbox" className="checkbox checkbox-warning" />
                                            <span className="label-text">Exchange for real estate</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="cursor-pointer label">
                                            <input type="checkbox" className="checkbox checkbox-warning" />
                                            <span className="label-text">Car exchange</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse border">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                <span className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    Search Region
                                </span>
                            </div>
                            <div className="collapse-content">
                                <p>No information available right now</p>
                            </div>
                        </div>
                        <div className="collapse border">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                <span className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                                    </svg>

                                    Vehicle Condition
                                </span>
                            </div>
                            <div className="collapse-content">
                                <p>No information available right now</p>
                            </div>
                        </div>
                        <div className="collapse border">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                <span className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Add Characterstics
                                </span>
                            </div>
                            <div className="collapse-content">
                                <p>No information available right now</p>
                            </div>
                        </div>
                        <div className="collapse border">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                <span className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                    </svg>
                                    Color
                                </span>
                            </div>
                            <div className="collapse-content">
                                <p>No information available right now</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='text-gray-600'>Found cars: <span className='font-bold'>12,324</span></p>
                            <div className='flex mt-5'>
                                <button className='btn w-[15rem] mr-2 bg-orange-600 bg-opacity-40 text-orange-600 border-0 hover:bg-orange-300'>Show</button>
                                <button className='btn bg-orange-600 bg-opacity-40 text-orange-600 border-0 hover:bg-orange-300'>X</button>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Drawer;