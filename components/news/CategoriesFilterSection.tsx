"use client";

import { useState } from "react";

const categories = [
  { id: "all", name: "All Stories", count: 24 },
  { id: "company", name: "Company Updates", count: 8 },
  { id: "product", name: "Product Updates", count: 6 },
  { id: "insights", name: "Industry Insights", count: 5 },
  { id: "success", name: "Success Stories", count: 3 },
  { id: "sustainability", name: "Sustainability", count: 2 }
];

export default function CategoriesFilterSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">Filter Content</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Browse by Category
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the content that interests you most by filtering through our different categories
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <span className={`ml-2 text-sm ${
                activeCategory === category.id ? "text-gray-300" : "text-gray-500"
              }`}>
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-black mb-4">
              Showing: {categories.find(c => c.id === activeCategory)?.name}
            </h3>
            <p className="text-gray-600 mb-6">
              {activeCategory === "all" 
                ? "Displaying all 24 stories across all categories"
                : `Displaying ${categories.find(c => c.id === activeCategory)?.count} stories in this category`
              }
            </p>
            <div className="flex justify-center">
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Load More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
