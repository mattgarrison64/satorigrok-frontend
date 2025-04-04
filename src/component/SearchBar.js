import React, { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { RxHome } from "react-icons/rx";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Select from "react-select";
import axios from "axios";
import config from "../config";

const SearchBar = ({ activeTabIndex, onSearch, currentPage, endpoint = "basic" }) => {
  const BuyHouses = [
    { value: "Single Family Residence", label: "Single Family Residence" },
    { value: "Condominium", label: "Condominium" },
    { value: "Townhouse", label: "Townhome" },
    { value: "Multi Family", label: "Multi-Family (10+ Units)" },
    { value: "Other", label: "Other Residential" },
    { value: "Commercial", label: "Commercial" },
    { value: "Agricultural", label: "Agricultural" },
    { value: "55+ Community", label: "55+ Community" },
  ];

  const RentHouses = [
    { value: "Single Family Residence", label: "Single Family Home" },
    { value: "Condominium", label: "Condo" },
    { value: "Apartment", label: "Apartment" },
    { value: "Townhouse", label: "Townhome" },
    { value: "Multi Family", label: "Multiplex" },
    { value: "Vacation Home", label: "Vacation Home" },
    { value: "Beach Rental", label: "Beach Rental" },
    { value: "Seasonal Rental", label: "Seasonal Rental" },
    { value: "Resort Rental", label: "Resort Rental" },
    { value: "Commercial", label: "Commercial" },
  ];

  const BuyMinPrice = [
    { value: "100000", label: "100,000" },
    { value: "150000", label: "150,000" },
    { value: "200000", label: "200,000" },
    { value: "250000", label: "250,000" },
    { value: "300000", label: "300,000" },
    { value: "350000", label: "350,000" },
    { value: "400000", label: "400,000" },
    { value: "450000", label: "450,000" },
    { value: "500000", label: "500,000" },
    { value: "550000", label: "550,000" },
    { value: "600000", label: "600,000" },
    { value: "650000", label: "650,000" },
    { value: "700000", label: "700,000" },
    { value: "750000", label: "750,000" },
    { value: "800000", label: "800,000" },
    { value: "850000", label: "850,000" },
    { value: "900000", label: "900,000" },
    { value: "950000", label: "950,000" },
    { value: "1000000", label: "1,000,000" },
  ];

  const BuyMaxPrice = [
    { value: "150000", label: "150,000" },
    { value: "200000", label: "200,000" },
    { value: "250000", label: "250,000" },
    { value: "300000", label: "300,000" },
    { value: "350000", label: "350,000" },
    { value: "400000", label: "400,000" },
    { value: "450000", label: "450,000" },
    { value: "500000", label: "500,000" },
    { value: "550000", label: "550,000" },
    { value: "600000", label: "600,000" },
    { value: "650000", label: "650,000" },
    { value: "700000", label: "700,000" },
    { value: "750000", label: "750,000" },
    { value: "800000", label: "800,000" },
    { value: "850000", label: "850,000" },
    { value: "900000", label: "900,000" },
    { value: "950000", label: "950,000" },
    { value: "1000000", label: "1,000,000" },
    { value: "1050000", label: "1,050,000" },
    { value: "1100000", label: "1,100,000" },
    { value: "1150000", label: "1,150,000" },
    { value: "1200000", label: "1,200,000" },
    { value: "1250000", label: "1,250,000" },
    { value: "1300000", label: "1,300,000" },
    { value: "1350000", label: "1,350,000" },
    { value: "1400000", label: "1,400,000" },
    { value: "1450000", label: "1,450,000" },
    { value: "1500000", label: "1,500,000" },
    { value: "1550000", label: "1,550,000" },
    { value: "1600000", label: "1,600,000" },
    { value: "1650000", label: "1,650,000" },
    { value: "1700000", label: "1,700,000" },
    { value: "1750000", label: "1,750,000" },
    { value: "1800000", label: "1,800,000" },
    { value: "1850000", label: "1,850,000" },
    { value: "1900000", label: "1,900,000" },
    { value: "1950000", label: "1,950,000" },
    { value: "2000000", label: "2,000,000+" },
  ];

  const RentMinPrice = [
    { value: "500", label: "500" },
    { value: "1000", label: "1,000" },
    { value: "1500", label: "1,500" },
    { value: "2000", label: "2,000" },
    { value: "2500", label: "2,500" },
    { value: "3000", label: "3,000" },
    { value: "3500", label: "3,500" },
    { value: "4000", label: "4,000" },
    { value: "4500", label: "4,500" },
    { value: "5000", label: "5,000" },
  ];

  const RentMaxPrice = [
    { value: "1000", label: "1,000" },
    { value: "1500", label: "1,500" },
    { value: "2000", label: "2,000" },
    { value: "2500", label: "2,500" },
    { value: "3000", label: "3,000" },
    { value: "3500", label: "3,500" },
    { value: "4000", label: "4,000" },
    { value: "4500", label: "4,500" },
    { value: "5000", label: "5,000+" },
  ];

  const [formData, setFormData] = useState({
    keywords: "",
    property_subtype: null,
    minPrice: null,
    maxPrice: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, keywords: e.target.value });
  };

  const handleSelectChange = (field) => (selectedOption) => {
    setFormData({ ...formData, [field]: selectedOption });
  };

  const fetchListings = async (page) => {
    const tab = activeTabIndex === 0 ? "Buy" : "Rent";
    const apiUrl = `${config.api.baseUrl}${config.api.endpoints.listings[endpoint]}`;

    setIsLoading(true);
    try {
      const response = await axios.get(apiUrl, {
        params: {
          keywords: formData.keywords,
          property_subtype: formData.property_subtype?.value || "",
          price_min: formData.minPrice?.value || "",
          price_max: formData.maxPrice?.value || "",
          tab: tab,
          page: page,
          standard_status: "Active",
        },
      });
      const { data, last_page, current_page } = response.data;
      onSearch({ listings: data, totalPages: last_page, currentPage: current_page });
    } catch (error) {
      console.error(`Axios fetch failed at ${apiUrl}:`, error);
      onSearch({ listings: [], totalPages: 0, currentPage: 1 });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchListings(1);
  };

  useEffect(() => {
    if (currentPage) {
      fetchListings(currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchListings(1);
  }, [endpoint]);

  return (
    <>
      <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 md:rounded-xl rounded-none shadow-md dark:shadow-gray-700">
        {activeTabIndex === 0 && (
          <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
            <form onSubmit={handleSubmit}>
              <div className="registration-form text-dark text-start">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                  <div>
                    <label className="form-label text-slate-900 dark:text-white font-medium">
                      Search: <span className="text-red-600">*</span>
                    </label>
                    <div className="filter-search-form relative filter-border mt-2">
                      <LuSearch className="icons" />
                      <input
                        name="keywords"
                        type="text"
                        id="job-keyword"
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        placeholder="Search your Keywords"
                        value={formData.keywords}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">
                      Select Categories:
                    </label>
                    <div className="filter-search-form relative filter-border mt-2">
                      <RxHome className="icons" />
                      <Select
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        options={BuyHouses}
                        value={formData.property_subtype}
                        onChange={handleSelectChange("property_subtype")}
                        maxMenuHeight={200}
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          menu: (base) => ({ ...base, maxHeight: "200px", overflowY: "auto" }),
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">
                      Min Price:
                    </label>
                    <div className="filter-search-form relative filter-border mt-2">
                      <AiOutlineDollarCircle className="icons" />
                      <Select
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        options={BuyMinPrice}
                        value={formData.minPrice}
                        onChange={handleSelectChange("minPrice")}
                        maxMenuHeight={200}
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          menu: (base) => ({ ...base, maxHeight: "200px", overflowY: "auto" }),
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">
                      Max Price:
                    </label>
                    <div className="filter-search-form relative mt-2">
                      <AiOutlineDollarCircle className="icons" />
                      <Select
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        options={BuyMaxPrice}
                        value={formData.maxPrice}
                        onChange={handleSelectChange("maxPrice")}
                        maxMenuHeight={200}
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          menu: (base) => ({ ...base, maxHeight: "200px", overflowY: "auto" }),
                        }}
                      />
                    </div>
                  </div>

                  <div className="lg:mt-6">
                    <input
                      type="submit"
                      id="search-buy"
                      name="search"
                      className="btn bg-[#BA0C2F] hover:bg-black border-[#BA0C2F] hover:border-black text-white searchbtn submit-btn w-full !h-12 rounded"
                      value="Search"
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
        {activeTabIndex === 1 && (
          <div id="rent-home" role="tabpanel" aria-labelledby="rent-home-tab">
            <form onSubmit={handleSubmit}>
              <div className="registration-form text-dark text-start">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                  <div>
                    <label className="form-label text-slate-900 dark:text-white font-medium">
                      Search: <span className="text-red-600">*</span>
                    </label>
                    <div className="filter-search-form relative filter-border mt-2">
                      <LuSearch className="icons" />
                      <input
                        name="keywords"
                        type="text"
                        id="job-keyword"
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        placeholder="Search your Keywords"
                        value={formData.keywords}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rent-properties" className="form-label text-slate-900 dark:text-white font-medium">
                      Select Categories:
                    </label>
                    <div className="filter-search-form relative filter-border mt-2">
                      <RxHome className="icons" />
                      <Select
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        options={RentHouses}
                        value={formData.property_subtype}
                        onChange={handleSelectChange("property_subtype")}
                        maxMenuHeight={200}
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          menu: (base) => ({ ...base, maxHeight: "200px", overflowY: "auto" }),
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rent-min-price" className="form-label text-slate-900 dark:text-white font-medium">
                      Min Price:
                    </label>
                    <div className="filter-search-form relative filter-border mt-2">
                      <AiOutlineDollarCircle className="icons" />
                      <Select
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        options={RentMinPrice}
                        value={formData.minPrice}
                        onChange={handleSelectChange("minPrice")}
                        maxMenuHeight={200}
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          menu: (base) => ({ ...base, maxHeight: "200px", overflowY: "auto" }),
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rent-max-price" className="form-label text-slate-900 dark:text-white font-medium">
                      Max Price:
                    </label>
                    <div className="filter-search-form relative mt-2">
                      <AiOutlineDollarCircle className="icons" />
                      <Select
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        options={RentMaxPrice}
                        value={formData.maxPrice}
                        onChange={handleSelectChange("maxPrice")}
                        maxMenuHeight={200}
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          menu: (base) => ({ ...base, maxHeight: "200px", overflowY: "auto" }),
                        }}
                      />
                    </div>
                  </div>

                  <div className="lg:mt-6">
                    <input
                      type="submit"
                      id="search-rent"
                      name="search"
                      className="btn bg-[#BA0C2F] hover:bg-black border-[#BA0C2F] hover:border-black text-white searchbtn submit-btn w-full !h-12 rounded"
                      value="Search"
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#BA0C2F]"></div>
          <p className="mt-4 text-white text-xl font-semibold">
            "Roping the best listings for ya—hold tight!"
          </p>
        </div>
      )}
    </>
  );
};

export default SearchBar;