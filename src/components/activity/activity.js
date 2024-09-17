import React from 'react';
import { CiMobile2 } from "react-icons/ci"; 
import { FaLaptopMedical } from "react-icons/fa"; 
import { AiOutlineHeart } from "react-icons/ai"; 

const Activity = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-blue-600 text-lg font-bold text-left">Practice Advice</h2>
        <h1 className="text-4xl font-bold text-gray-900 text-left">Our Activity</h1>
        <p className="text-gray-600 mt-4 text-left">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex space-x-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-72">
          <div className="flex justify-center items-center mb-4">
            <CiMobile2 className="text-blue-500 text-6xl" />
          </div>
          <h3 className="text-xl font-bold text-center text-gray-900">
            Emergency Case
          </h3>
          <div className="w-12 h-1 bg-red-500 mx-auto my-4"></div>
          <p className="text-gray-600">
            The gradual 
            accumulation of <br/>
            information about
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8  w-72 ">
          <div className="flex justify-center items-center mb-4">
            <AiOutlineHeart className="text-green-500 text-6xl" />
          </div>
          <h3 className="text-xl text-center font-bold text-gray-900">Health Queries</h3>
          <div className="w-12 h-1 bg-red-500 mx-auto my-4"></div>
          <p className="text-gray-600 text-left">
            The gradual accumulation of <br/>
            information about
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 w-72">
          <div className="flex justify-center items-center mb-4">
            <FaLaptopMedical className="text-red-500 text-6xl" />
          </div>
          <h3 className="text-xl font-bold text-center text-gray-900">Painless procedures</h3>
          <div className="w-12 h-1 bg-red-500 mx-auto my-4"></div>
          <p className="text-gray-600">
            The gradual accumulation of <br/>
            information about
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
