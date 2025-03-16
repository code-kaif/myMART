import { Link } from "react-router-dom";
import products from "../products.json";
import { FaPhoneAlt } from "react-icons/fa";

const ProductList = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Available Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="border cursor-pointer rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-transform transform">
              {/* Product Image - Same size for all pages */}
              <div className="w-full h-64 flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.company}</p>
                <p className="text-gray-500">{product.location}</p>
                <p className="text-lg font-bold mt-2">{product.price}</p>

                {/* Action Buttons - Responsive Fix */}
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <button className="flex items-center justify-center font-medium bg-gray-200 px-4 py-2 rounded-md text-gray-700 w-full">
                    <FaPhoneAlt className="mr-2" /> View Number
                  </button>
                  <button className="bg-blue-600 font-medium text-white px-4 py-2 rounded-md w-full">
                    Get Best Price
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
