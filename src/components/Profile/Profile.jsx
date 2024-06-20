import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='w-1/4 mx-auto mt-96 mb-96'>
            {
                user && <div className='text-center'>
                    <h1 className='text-2xl mb-5 font-bold'>Name: {user.displayName}</h1>
                    <p>Email: {user.email}</p>
                </div>
            }
        </div>
    );
};

export default Profile;