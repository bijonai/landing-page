'use client'

import { useState } from 'react';

// Sample product data - replace with your actual data
const productData = [
  {
    id: 1,
    name: "EchoAI",
    description: "Explore knowledges with your own studymate.",
    details: "EchoAI is a open-source AI-powered assistant applied on education with a whiteboard and step-by-step teaching mode, which could become your best learning partner or teacher. You can use it to learning mathematics, physics, computer science and whatever you could imagine."
  },
  {
    id: 2,
    name: "Sciux",
    description: "AI STEM toolkits",
    details: "Open-source AI STEM toolkits for education and research, including math, physics, chemistry, biology, and more, with a HTML-like syntax to generate interactive diagrams and animations."
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(productData[0]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-4xl font-bold">Products</h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Product list */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Products List</h2>
            <div className="space-y-4">
              {productData.map((product) => (
                <div 
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedProduct.id === product.id 
                      ? "bg-linear-123 from-[#FFE373] via-[#F4C09F] to-[#DC73FF] text-white" 
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <h3 className="text-xl font-medium">{product.name}</h3>
                  <p className={`mt-1 ${selectedProduct.id === product.id ? "text-white/80" : "text-gray-600"}`}>
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Product details */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
            <p className="text-xl text-gray-600 mb-3">{selectedProduct.description}</p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Details</h3>
              <p className="text-gray-700 leading-relaxed">{selectedProduct.details}</p>
            </div>
            <div className="mt-8">
              <a 
                href="#" 
                className="inline-block px-6 py-3 bg-linear-123 from-[#FFE373] via-[#F4C09F] to-[#DC73FF] text-white font-medium rounded-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
