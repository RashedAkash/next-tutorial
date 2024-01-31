import React from 'react';

const productPage = ({ searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>This is product page</h1>
      <h1>{searchParams.name}</h1>
      <h1>{searchParams.price}</h1>

    </div>
  );
};

export default productPage;