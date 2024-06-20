import React from 'react';
import bannerImg from "../../assets/image/banner.jpg"
import { Link, useLoaderData } from 'react-router-dom';
import { MdOutlineFamilyRestroom, MdHotel   } from 'react-icons/md';
import { IoMdPricetags } from "react-icons/io";


const Home = () => {
    const loadedData = useLoaderData();


    return (
        <div>
            {/* Hero Section */}
            <div>
                <img className='w-full opacity-40' src={bannerImg} alt="" />
                <h1 className='text-6xl text-center opacity-100 font-bold text-gray-950 -mt-80'>Hotel Afra International</h1>
                <p className='mb-80'></p>
            </div>

            {/* Card section */}
            <div className='my-10 w-4/5 mx-auto grid grid-cols-3 gap-5 gap-y-11'>
                {
                    loadedData.map(data => <div key={data.roomNumber} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to="#">
                            <img className="rounded-t-lg" src={data.image} alt="" />
                        </Link>
                        <div className="p-5">
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {data.description}
                            </p>
                            <div className='flex items-center gap-5'>
                                <p className='text-gray-200 items-center flex gap-1'><MdOutlineFamilyRestroom /> : {data.persons}</p>
                                <p className='text-gray-200 items-center flex gap-1'><IoMdPricetags /> : {data.price}</p>
                                <p className='text-gray-200 items-center flex gap-1'><MdHotel /> : {data.type}</p>
                                <Link
                                    to="/booking"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Book now
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;