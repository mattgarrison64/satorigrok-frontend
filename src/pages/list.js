import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";
import PropertyList from "../component/PropertyList";
import SearchBar from "../component/SearchBar";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function List() {
  const [listings, setListings] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = ({ listings, totalPages, currentPage }) => {
    setListings(listings);
    setTotalPages(totalPages);
    setCurrentPage(currentPage);
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    const adjustedStartPage = Math.max(1, endPage - maxVisiblePages + 1);

    for (let i = adjustedStartPage; i <= endPage; i++) {
      pages.push(
        <li key={i}>
          <button
            onClick={() => setCurrentPage(i)} // Just set the page, SearchBar will fetch
            className={`size-10 inline-flex justify-center items-center mx-1 rounded-full ${
              i === currentPage
                ? "text-white bg-[#BA0C2F] shadow-sm dark:shadow-gray-700"
                : "text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-[#BA0C2F] dark:hover:border-[#BA0C2F] hover:bg-[#BA0C2F] dark:hover:bg-[#BA0C2F]"
            }`}
          >
            {i}
          </button>
        </li>
      );
    }

    return (
      <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
        <div className="md:col-span-12 text-center">
          <nav>
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-[#BA0C2F] dark:hover:border-[#BA0C2F] hover:bg-[#BA0C2F] dark:hover:bg-[#BA0C2F] disabled:opacity-50"
                >
                  <FiChevronLeft />
                </button>
              </li>
              {pages}
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-[#BA0C2F] dark:hover:border-[#BA0C2F] hover:bg-[#BA0C2F] dark:hover:bg-[#BA0C2F] disabled:opacity-50"
                >
                  <FiChevronRight />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar navClass="navbar-white" />
      <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">List View Layout</h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <div className="container relative -mt-16 z-1">
        <SearchBar
          activeTabIndex={0}
          onSearch={handleSearch}
          currentPage={currentPage} // Pass currentPage to SearchBar
        />
      </div>
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <PropertyList listings={listings} />
          {totalPages > 1 && renderPagination()}
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}