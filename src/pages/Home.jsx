import React from 'react';
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
