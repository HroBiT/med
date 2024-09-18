import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-lg text-gray-800">Company Info</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600">stopka 1</a></li>
              <li><a href="#" className="text-gray-600">stopka 2</a></li>
              <li><a href="#" className="text-gray-600">stopka 3</a></li>
              <li><a href="#" className="text-gray-600">stopka 4</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600">stopka 1</a></li>
              <li><a href="#" className="text-gray-600">stopka 2</a></li>
              <li><a href="#" className="text-gray-600">stopka 3</a></li>
              <li><a href="#" className="text-gray-600">stopka 4</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600">stopka 1</a></li>
              <li><a href="#" className="text-gray-600">stopka 2</a></li>
              <li><a href="#" className="text-gray-600">stopka 3</a></li>
              <li><a href="#" className="text-gray-600">stopka 4</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600">stopka 1</a></li>
              <li><a href="#" className="text-gray-600">stopka 2</a></li>
              <li><a href="#" className="text-gray-600">stopka 3</a></li>
              <li><a href="#" className="text-gray-600">stopka 4</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">Get In Touch</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600"><i className="fas fa-phone-alt text-blue-500"></i> numer</li>
              <li className="text-gray-600"><i className="fas fa-map-marker-alt text-blue-500"></i> email</li>
              <li className="text-gray-600"><i className="fas fa-envelope text-blue-500"></i> telefon </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 flex justify-between items-center">
          <p className="text-gray-600">stopka</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;