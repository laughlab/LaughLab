import React from 'react'; // Add the import statement for React

import 'tailwindcss/tailwind.css';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex-col ">
      <img className='rounded-lg object-cover w-full py-5' src="" alt="" />

      <div className="w-full"></div>
      <h1 className="text-2xl">About Page</h1>
      <p className='pb-4'>Meet the Laugh Lab team!</p>
      {/* Entire flex box */}
      <div className="flex flex-col items-center justify-center">

        {/* Row */}
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row">
          {/* Left column */}
          <div className="flex w-full sm:w-1/2 p-4 justify-center">
            <img src='src/assets/bella.jpg' alt="Person" className="object-cover max-w-full px-8" />
          </div>
          {/* Right Column */}
          <div className="w-full sm:w-1/2 p-4">
            <h2 className='text-2xl'>Bella</h2>
            <h3 className='pb-5'>CEO</h3>
            <p className='text-left'>Bella Cherney is the CEO of silliness at Laugh Lab and she is a Design and Innovation Management major at Oregon State University. She leads her talented team in the operations and marketing of their silly hand sanitizer company motivated by the goal of making people smile. She is passionate about the mission of bringing joy to her community and is excited to see where Laugh Lab will go.</p>
          </div>
        </div>

        {/* Row */}
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row">
          {/* Left column */}
          <div className="flex w-full sm:w-1/2 p-4 justify-center">
            <img src='src/assets/pearl.png' alt="Person" className="object-cover max-w-full px-8" />
          </div>
          {/* Right Column */}
          <div className="w-full sm:w-1/2 p-4">
            <h2 className='text-2xl'>Pearl</h2>
            <h3 className='pb-5'>Marketing Director</h3>
            <p className='text-left'>Pearl is Laugh Lab's Marketing Director and is working to develop the branding and marketing strategy of the company. Through social media marketing and consistent design and branding, she hopes to take Laugh Lab to the next level and spread the company's mission. She loves the lighthearted nature of SillySan and can't wait to continue spreading the laughter through a squeeze of hand sanitizer.</p>
          </div>
        </div>

        {/* Row */}
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row">
          {/* Left column */}
          <div className="flex w-full sm:w-1/2 p-4 justify-center">
            <img src='src/assets/chris.png' alt="Person" className="object-cover max-w-full px-8" />
          </div>
          {/* Right Column */}
          <div className="w-full sm:w-1/2 p-4">
            <h2 className='text-2xl'>Chris</h2>
            <h3 className='pb-5'>Operations Director</h3>
            <p className='text-left'>Chris is the Operations Director of Laugh Lab. He is responsible for Laugh Lab's product development, delivery, and website. He is a first-year computer science major at Oregon State University and minoring in entrepreneurship. He hopes to use his creativity and problem-solving skills to get the magic of SillySan in everyone's hands.</p>
          </div>
        </div>

        {/* Row */}
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row">
          {/* Left column */}
          <div className="flex w-full sm:w-1/2 p-4 justify-center">
            <img src='src/assets/carson.png' alt="Person" className="object-cover max-w-full px-8" />
          </div>
          {/* Right Column */}
          <div className="w-full sm:w-1/2 p-4">
            <h2 className='text-2xl'>Carson</h2>
            <h3 className='pb-5'>Operations Associate</h3>
            <p className='text-left'>Carson is a freshman accounting student at Oregon State University.  He is a silly guy that loves a good laugh, thus he was driven to be a part of Laugh Labs, a company all about the giggle.  Carson would like to look over the company's finances and put his skills with numbers and math to work to keep Laugh Labs on track this term to make profit and stay organized.  He is also excited to help create new products for the company as he helped a lot to create each type of Silly San (hand sanitizer) winter term.</p>
          </div>
        </div>

        {/* Row */}
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row">
          {/* Left column */}
          <div className="flex w-full sm:w-1/2 p-4 justify-center">
            <img src='src/assets/kirra.png' alt="Person" className="object-cover max-w-full px-8" />
          </div>
          {/* Right Column */}
          <div className="w-full sm:w-1/2 p-4">
            <h2 className='text-2xl'>Kirra</h2>
            <h3 className='pb-5'>Marketing Associate</h3>
            <p className='text-left'>Kirra is a marketing associate for Laugh Lab and is currently double majoring in business administration and interior design. She is working to help the marketing team with branding and social media for the company. This position allows for Kirra to use her design and creativity and she hopes to provide ideas that further the company. She cannot wait to launch our company this term and see it grow!</p>
          </div>
        </div>

        {/* Row */}
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row">
          {/* Left column */}
          <div className="flex w-full sm:w-1/2 p-4 justify-center">
            <img src='src/assets/sennett.png' alt="Person" className="object-cover max-w-full px-8" />
          </div>
          {/* Right Column */}
          <div className="w-full sm:w-1/2 p-4">
            <h2 className='text-2xl'>Sennett</h2>
            <h3 className='pb-5'>Operations Associate</h3>
            <p className='text-left'>Sennett is Laugh Lab's Operations Associate and is working on helping the team stay organized as well as analyzing company data to ensure our team success. He enjoys the freedom and fun nature of Laugh Lab. He is looking forward to producing and selling our product and watching the impact that a laugh can make. </p>
          </div>
        </div>

        {/* Row */}
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row">
          {/* Left column */}
          <div className="flex w-full sm:w-1/2 p-4 justify-center">
            <img src='src/assets/ryan.png' alt="Person" className="object-cover max-w-full px-8" />
          </div>
          {/* Right Column */}
          <div className="w-full sm:w-1/2 p-4">
            <h2 className='text-2xl'>Ryan</h2>
            <h3 className='pb-5'>Marketing Associate</h3>
            <p className='text-left'>Ryan is an associate for the Laugh Lab Marketing team. He is currently majoring in Business Administration. Ryan helps with putting together advertisements, designing scents and quip ideas, and overall creative problem solving. He hopes to sell the product to as many lucky people as possible. </p>
          </div>
        </div>

        {/* Row */}
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row">
          {/* Left column */}
          <div className="flex w-full sm:w-1/2 p-4 justify-center">
            <img src='src/assets/milana.png' alt="Person" className="object-cover max-w-full px-8" />
          </div>
          {/* Right Column */}
          <div className="w-full sm:w-1/2 p-4">
            <h2 className='text-2xl'>Milana</h2>
            <h3 className='pb-5'>Marketing Associate</h3>
            <p className='text-left'>Milana is a marketing associate from Laugh Lab. She is a first year student at Oregon State University who is studying business management. She has a love for all types of creative outlets and hopes to one day create a business that is focused on supporting small creative businesses. The SillySan provides an amazing outlet to express this creativity while being able to incorporate humor that is relatable by working on the labels and marketing of the product. She is excited to launch our company this term and spread joy.</p>
          </div>
        </div>

        {/* Row */}
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row">
          {/* Left column */}
          <div className="flex w-full sm:w-1/2 p-4 justify-center">
            <img src='src/assets/brett.png' alt="Person" className="object-cover max-w-full px-8" />
          </div>
          {/* Right Column */}
          <div className="w-full sm:w-1/2 p-4">
            <h2 className='text-2xl'>Brett</h2>
            <h3 className='pb-5'>Operations Associate</h3>
            <p className='text-left'>Brett is an operations associate for Laugh Lab and is currently majoring in mechanical engineering. His love for creativity and product design make him a great fit for this role, as he works on making and designing the physical product. He loves a good laugh after a long day and can’t wait for all the laughs SillySan will provide during spring term and beyond. </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;