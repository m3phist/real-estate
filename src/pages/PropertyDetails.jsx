import React from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { formatPriceUsd } from '../utils/formatCurrency';

const PropertyDetails = () => {
  // get the house id
  const { id } = useParams();

  // get the house based on the clicked and given id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  const formattedPrice = formatPriceUsd(house.price);

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-[#009679] text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-600 lg:pt-2 ">
            {formattedPrice}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 xl:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8 mt-4">
              <img src={house.imageLg} alt="" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 flex-col bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 mt-4 lg:w-[736px]">
            <div className="flex items-center gap-x-4">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div className="font-semibold text-lg">{house.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  View Listings
                </Link>
              </div>
            </div>
            {/* form */}
            <form className="mt-4 flex flex-col gap-y-2">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none 
                rounded px-4 h-12 text-sm w-full"
                type="text"
                placeholder="Name*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none 
              rounded  px-4 h-12 text-sm w-full"
                type="text"
                placeholder="Email*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none 
              rounded px-4 h-12 text-sm w-full"
                type="text"
                placeholder="Phone*"
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none 
              resize-none rounded p-4 h-36 text-sm text-gray-400 w-full"
                placeholder="Message*"
                defaultValue={`I am interested in the ${house.name} property, which features ${house.bedrooms} bedroom, ${house.bathrooms} bathroom, and a unit size of ${house.surface}.`}
              />
              <div className="flex gap-x-1 gap-y-2 flex-col sm:flex-row xl:flex-col mt-2">
                <button
                  className="bg-violet-700 hover:bg-violet-800 
                text-white rounded p-4 text-sm transition w-full"
                >
                  Send Message
                </button>
                <button
                  className="border border-violet-700 
                text-violet-700 hover:border-violet-500  
                hover:text-violet-500
                hover:bg-violet-100  rounded p-4 
                text-sm transition w-full"
                >
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
