import { useParams } from "react-router-dom";
import products from "../products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center text-red-500 font-bold">
        Product not found!
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Product Image (Fixed Size) */}
        <div className="flex justify-center p-4 rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-auto object-contain"
          />
        </div>

        {/* Right Side - Product Details */}
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-600 text-lg">{product.company}</p>
          <p className="text-gray-500">{product.location}</p>
          <p className="text-2xl font-bold text-blue-600 mt-3">
            {product.price}
          </p>
          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Action Buttons - Responsive Fix */}
          <div className="flex flex-col sm:flex-row gap-2 mt-6">
            <button className="flex items-center justify-center font-medium bg-gray-200 px-4 py-2 rounded-md text-gray-700 w-full">
              📞 View Number
            </button>
            <button className="bg-blue-600 font-medium text-white px-4 py-2 rounded-md w-full">
              Get Best Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
