import React, { useState } from "react";

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // Corrected template literal
const itemsPerPage = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-[url('https://wallpaperaccess.com/full/8410457.png')] bg-cover flex justify-center items-center min-h-screen">
      <div className="max-w-xl mx-auto p-4 bg-transparent">
        <h1 className="text-orange-300 text-center text-4xl font-semibold font-mono uppercase">Item List</h1>
        <ul className="border border-gray-200 rounded-lg p-4 shadow-md bg-gray-400">
          {currentItems.map((item, index) => (
            <li key={index} className="p-2 border-b last:border-none hover:scale-105 duration-300 hover:bg-black hover:text-white">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-4 space-x-2">
          <button
            className={`px-4 py-2 rounded-lg ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-2 rounded-lg ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
