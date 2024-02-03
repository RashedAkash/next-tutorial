"use client"
async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const productPage = async ({ searchParams }) => {
  console.log(searchParams);
  const data = await getData()
  console.log(data.products);
  return (
    <div className=" container mx-auto">
      <h1>This is product page</h1>
      <h1>{searchParams.name}</h1>
      <h1>{searchParams.price}</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.products?.map((d) => (
          <div
            key={d.id}
            className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div className="px-4 py-2">
              <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                {d?.title}
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {d?.description}
              </p>
            </div>

            <img
              className="object-cover w-full h-48 mt-2"
              src={d?.thumbnail}
              alt="NIKE AIR"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 className="text-lg font-bold text-white">$129</h1>
              <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default productPage;
