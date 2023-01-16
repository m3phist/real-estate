import React, { useState, useEffect, createContext } from 'react';
// import data
import { housesData } from '../data';

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  // return all property types
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    // remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

    // set properties state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // set loading
    setLoading(true);
    // create a function that check if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };
    // get first value of price which is the min range and parse it to number
    // console.log(price.split(' '));
    // console.log(parseInt(price.replace(/,/g, '').split(' ')[0]));
    const minPrice = parseInt(price.replace(/,/g, '').split(' ')[0]);
    // get second value of price which is the max range
    const maxPrice = parseInt(price.replace(/,/g, '').split(' ')[2]);
    // console.log(minPrice, maxPrice);
    // create a filter for the search
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // if all search criteria is not default value
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all search input have default value
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if country is not default while the rest is default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // if property is not default while the rest is default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      // if price is not default while the rest is default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      // if country & property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      // if country & price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // if property & price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    // console.log(newHouses);
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
