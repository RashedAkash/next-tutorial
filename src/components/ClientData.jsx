"use client"
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const ClientData = () => {
  const [country, setCountry] = useState();
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountry(data))
   
  }, [])
  console.log(country);
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {country?.map((d) => (
          <div
            key={d.id}
            className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div className="px-4 py-2">
              <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                {d?.name['common']}
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {d?.description}
              </p>
            </div>

            <img
              className="object-cover w-full h-48 mt-2"
              src={d?.flags['svg']}
              alt="NIKE AIR"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientData;