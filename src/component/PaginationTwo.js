// src/components/PaginationTwo.js
import React from "react";

const PaginationTwo = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5; // Limit visible page buttons
  const halfRange = Math.floor(maxPagesToShow / 2);

  // Calculate page range to display
  let startPage = Math.max(1, currentPage - halfRange);
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-1 mx-1 bg-gray-200 rounded"
          >
            1
          </button>
          {startPage > 2 && <span className="px-3 py-1 mx-1">...</span>}
        </>
      )}

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 mx-1 rounded ${
            page === currentPage ? "bg-[#BA0C2F] text-white" : "bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-3 py-1 mx-1">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-1 mx-1 bg-gray-200 rounded"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
};

export default PaginationTwo;