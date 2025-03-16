const Category = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Hospital and Medical Equipment
      </h2>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Large Image */}
        <div className="w-full lg:w-1/4">
          <img
            src="/medicaleq.jpg"
            alt="Hospital Equipment"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Description */}
        <div className="flex-1">
          <p className="text-gray-600">
            Explore a wide range of{" "}
            <strong>medical and hospital equipment</strong>, including
            ventilators, oxygen cylinders, patient monitoring systems, and
            surgical instruments. Our high-quality products ensure{" "}
            <strong>better healthcare solutions</strong>.
          </p>
        </div>
      </div>

      {/* Small Images Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
        {/* Single Item */}
        {[
          { title: "Medical Ventilators", image: "/ventilator.jpg" },
          { title: "Oxygen Cylinder", image: "/o2cylinder.jpg" },
          { title: "Patient Handling Equipment", image: "/sm.jpg" },
          { title: "Biochemistry Analyzer", image: "/ba.jpg" },
          { title: "Patient Monitoring Systems", image: "/pms.jpg" },
          { title: "X Ray Machine", image: "/xray.jpg" },
        ].map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
