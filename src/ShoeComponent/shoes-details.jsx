/* eslint-disable react/prop-types */

export default function ShoesDetails({ product }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-white-100 rounded-lg shadow-md">
      <div className="flex-1 space-y-6 text-center">
        <h4 className="text-3xl font-extrabold text-gray-800">
          {product.name}
        </h4>
        <img
          src={product.image}
          className="w-full max-w-sm mx-auto h-[300px] object-contain rounded-md border border-gray-200 shadow-sm"
          alt={product.name}
        />
      </div>

      <div className="flex-1 space-y-6">
        <h4 className="text-2xl font-bold text-gray-700 border-b-2 border-gray-300 pb-2">
          Details
        </h4>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-600">Alias</p>
            <p className="text-lg font-semibold text-gray-800">
              {product.alias}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-600">Price</p>
            <p className="text-lg font-semibold text-green-600">
              ${product.price}
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-gray-600">Description</p>
            <p className="text-sm text-gray-700 mt-2">{product.description}</p>
          </div>

          <div>
            <p className="text-lg font-medium text-gray-600">
              Short Description
            </p>
            <p className="text-sm text-gray-700 mt-2">
              {product.shortDescription}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-600">Quantity</p>
            <p className="text-lg font-semibold text-gray-800">
              {product.quantity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
