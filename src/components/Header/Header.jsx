import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/image/banner.jpg"

const Header = () => {
    return (
        <div className=''>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
                <div className="w-full mx-auto">
                    <ul className="flex gap-6 justify-center font-medium p-4 ">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                <img className='w-full' src={bannerImg} alt="" />
                <h1 className='text-6xl text-center font-bold text-gray-50 -mt-96'>Hotel Afra International</h1>
                <p className='mb-96'></p>
            </div>
        </div>
    );
};

export default Header;
