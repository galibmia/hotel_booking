import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import "./Header.css"

const Header = () => {
    const { user, logOut, setError } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then(() => {
            setUser(null)
        })
        .catch(err => {
            setError(err.message);
        })
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
            <div className="w-full mx-auto">
                <ul className="flex gap-6 justify-center font-medium p-4 ">
                    <li>
                        <ActiveLink
                            to="/"
                            className="block py-2 px-3 md:p-0 cus-text-white"
                            aria-current="page"
                        >
                            Home
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink
                            to="/booking"
                            className="block py-2 px-3 md:p-0 text-white"
                            aria-current="page"
                        >
                            Booking
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink
                            to="/register"
                            className="block py-2 px-3 md:p-0  text-white"
                        >
                            Register
                        </ActiveLink>
                    </li>
                    {
                        user ?
                            <li className='flex items-center gap-5'>
                                <ActiveLink
                                    to="/profile"
                                    className="block py-2 px-3 md:p-0  text-white"
                                >
                                    Profile
                                </ActiveLink> <button className='text-white' onClick={handleSignOut}>Log Out</button>
                            </li> :
                            <li>
                                <ActiveLink
                                    to="/login"
                                    className="block py-2 px-3 md:p-0 text-white"
                                >
                                    Login
                                </ActiveLink>
                            </li>
                        }

                </ul>
            </div>
        </nav>
    );
};

export default Header;
