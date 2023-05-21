import React, { useState } from "react";

const ProductCard = () => {
  const [activeTab, setActiveTab] = useState("basic");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const productData = {
    basic: {
      title: "Basic Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum elit vel nunc lacinia, non lobortis dolor pharetra.",
      price: "$9.99",
      features: [
        { name: "Feature 1", active: true },
        { name: "Feature 2", active: false },
        { name: "Feature 3", active: true },
        // Add more features as needed
      ],
    },
    standard: {
      title: "Standard Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum elit vel nunc lacinia, non lobortis dolor pharetra.",
      price: "$19.99",
      features: [
        { name: "Feature 1", active: true },
        { name: "Feature 2", active: true },
        { name: "Feature 3", active: true },
        // Add more features as needed
      ],
    },
    premium: {
      title: "Premium Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum elit vel nunc lacinia, non lobortis dolor pharetra.",
      price: "$29.99",
      features: [
        { name: "Feature 1", active: true },
        { name: "Feature 2", active: true },
        { name: "Feature 3", active: true },
        // Add more features as needed
      ],
    },
  };

  const renderFeatureList = (features) => {
    return features.map((feature, index) => (
      <li
        key={index}
        className={`flex items-center mb-2 ${
          feature.active ? "text-green-500" : "text-red-500"
        }`}
      >
        {feature.active ? (
          <svg
            className="w-4 h-4 mr-2 fill-current text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 1a9 9 0 1 0 0 18A9 9 0 0 0 10 1zm5 7a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1z"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4 mr-2 fill-current text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 1a9 9 0 1 0 0 18A9 9 0 0 0 10 1zm0 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm-1-8a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1z"
            />
          </svg>
        )}
        {feature.name}
      </li>
    ));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <div className="flex justify-between mb-4">
        <button
          className={`px-4 py-2 rounded-md mr-2 ${
            activeTab === "basic" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabChange("basic")}
        >
          Basic
        </button>
        <button
          className={`px-4 py-2 rounded-md mr-2 ${
            activeTab === "standard" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabChange("standard")}
        >
          Standard
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "premium" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabChange("premium")}
        >
          Premium
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold">{productData[activeTab].title}</h2>
        <p className="text-gray-500">{productData[activeTab].description}</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-2xl">
          {productData[activeTab].price}
        </span>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
          Add to Cart
        </button>
      </div>

      <ul>{renderFeatureList(productData[activeTab].features)}</ul>
    </div>
  );
};

export default ProductCard;
