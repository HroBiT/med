import React from 'react';

function Form() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h2 className="text-blue-500 text-lg">Newsletter</h2>
        <h1 className="text-5xl font-bold text-gray-800 mt-2">JOIN US</h1>
        <p className="text-gray-500 mt-4">
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="mt-8 flex justify-center">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="p-4 w-96 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button className="bg-blue-500 text-white p-4 rounded-r-lg">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Form;