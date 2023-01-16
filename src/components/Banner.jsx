import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

// import image
import Image from '../assets/img/house-banner.png';

// import components
import Search from './Search';

const Banner = () => {
  return (
    // default max-h-640 change this to my own best display setting
    <section className="h-full sm:max-h-[600px] md:max-h-[550px] mb-8 lg:mb-20 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Where</span> Your Dreams Come Home
            <div>
              <ReactTypingEffect
                text={['With our prestigious listing, find your ideal home.']}
                className="md:text-xl sm:text-4xl text-xl font-semibold"
                speed={100}
              />
            </div>
          </h1>
          <p className="max-w-[480px] mb-8">
            Discover your ultimate abode among our curated selection of top
            properties, and let our expert agents make the process effortless
            and delightful.
          </p>
        </div>
        {/* Image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="house banner" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
