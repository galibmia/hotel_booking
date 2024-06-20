import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate, useNavigation } from 'react-router-dom';

const ResetPassword = () => {

    const { setError, handleResetPassword } = useContext(AuthContext);

    const navigate = useNavigate();

    const resetPassword = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        handleResetPassword(email)
        .then(res => {
           
        })
        .catch(err => {
            setError(err.message)
        })

        toast.success("Link send Successful, Check your Email", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigate("/")
    }
    
    return (
        <div className="w-full md:w-4/5 mx-auto my-72 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" onSubmit={resetPassword}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Reset Your Password</h5>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;