import React from 'react';

const Activity = () =>{
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center mb-12">
        <h2 className="text-blue-600 text-lg font-bold">Practice Advice</h2>
        <h1 className="text-4xl font-bold text-gray-900">Our Activity</h1>
        <p className="text-gray-600 mt-4">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex space-x-8">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <i className="fas fa-mobile-alt text-blue-500 text-6xl mb-4"></i>
          <h3 className="text-xl font-bold text-gray-900">Emergency Case</h3>
          <div className="w-12 h-1 bg-red-500 mx-auto my-4"></div>
          <p className="text-gray-600">The gradual accumulation of information about</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <i className="fas fa-heartbeat text-green-500 text-6xl mb-4"></i>
          <h3 className="text-xl font-bold text-gray-900">Health Queries</h3>
          <div className="w-12 h-1 bg-red-500 mx-auto my-4"></div>
          <p className="text-gray-600">The gradual accumulation of information about</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <i className="fas fa-laptop-medical text-red-500 text-6xl mb-4"></i>
          <h3 className="text-xl font-bold text-gray-900">Painless procedures</h3>
          <div className="w-12 h-1 bg-red-500 mx-auto my-4"></div>
          <p className="text-gray-600">The gradual accumulation of information about</p>
        </div>
      </div>
    </div>
  );
};

export default Activity;