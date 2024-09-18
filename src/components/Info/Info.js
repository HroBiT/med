import React from 'react';

const Info = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'rgb(255, 221, 208)' }}>
      <div className="max-w-4xl mx-auto p-8 flex items-center">
        <div className="w-1/2">
          <div className="mb-4">
            <div className="w-12 h-1 bg-red-500 mb-2"></div>
            <h1 className="text-4xl font-bold text-gray-800">Leading Medicine</h1>
          </div>
          <p className="text-gray-600 mb-4">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics:<br />
            Newtonian mechanics
          </p>
          <a href="#" className="text-blue-500 font-semibold flex items-center">
            Learn More {'>'} <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div className="w-1/2 flex">
          <div className="pl-16 relative">
            <img src="./lekarz.jpg" alt="lekarz" className=" shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;