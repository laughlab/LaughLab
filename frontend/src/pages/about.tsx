import React from 'react'; // Add the import statement for React

import 'tailwindcss/tailwind.css';

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About page!</p>
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/2 p-4 bg-gray-200 h-64">
            <img src={'./assets/person.jpg'} alt="Person" className="object-cover w-full h-full" />
          </div>
          <div className="w-1/2 p-4 bg-gray-300 h-64">
            <h2 className=''>Bella</h2>
            <h3 className=''>CEO</h3>
            <p className=''></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;