import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center mt-10 text-white py-6">
          &copy; {new Date().getFullYear()}  All Rights Reserved.
    </footer>
  );
};

export default Footer;
