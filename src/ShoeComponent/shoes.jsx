/* eslint-disable react/prop-types */

export default function Shoes({ product, onClickViewDetails }) {
  return (
    <div className="w-full max-w-sm mx-auto border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-contain rounded-lg"
          alt={product.name}
        />
      </div>

      <div className="mt-4 space-y-1 text-center">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate">
          {product.name}
        </h3>
        <h4 className="text-sm sm:text-md md:text-lg font-semibold text-green-600">
          ${product.price}
        </h4>
      </div>

      <div className="mt-4 text-center">
        <button
          className="w-full py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-200 transition-all"
          onClick={() => onClickViewDetails(product)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
