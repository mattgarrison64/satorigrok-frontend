import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import config from "../config";
import Navbar from "../component/Navbar";
import Switcher from "../component/Switcher";
import Footer from "../component/Footer";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { AiOutlineCamera } from "react-icons/ai";
import { LiaBathSolid, LiaCompressArrowsAltSolid } from "react-icons/lia";
import { BiBed } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

console.log("API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
console.log("All env vars:", process.env);
console.log("Raw env check:", process.env);

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`${config.api.baseUrl}/property/${id}`);
        console.log("API Response:", response.data);
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Fetch Error:", error.response?.data || error.message);
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  const images = property?.media?.map((media) => media.media_url) || [];

  const handleCLick = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  const mapUrl = property?.Latitude && property?.Longitude
    ? `https://www.google.com/maps/embed/v1/place?q=${property.Latitude},${property.Longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'MISSING_KEY'}`
    : null;
  console.log("Map URL:", mapUrl);

  if (loading) return <div>Loading...</div>;
  if (!property) return <div>Property not found.</div>;

  return (
    <>
      <Navbar />
      <section className="relative md:pb-24 pb-16 mt-20">
        <div className="container-fluid">
          <div className="md:flex mt-4">
            <div className="lg:w-1/2 md:w-1/2 p-1">
              <div className="group relative overflow-hidden">
                <img src={images[0]} alt={property.unparsed_address} />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                  <Link to="#" onClick={() => handleCLick(0)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox">
                    <AiOutlineCamera className="text-lg" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2">
              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={images[1]} alt={property.unparsed_address} />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(1)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox">
                        <AiOutlineCamera className="text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={images[2]} alt={property.unparsed_address} />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(2)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox">
                        <AiOutlineCamera className="text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={images[3]} alt={property.unparsed_address} />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(3)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox">
                        <AiOutlineCamera className="text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-1">
                  <div className="group relative overflow-hidden">
                    <img src={images[4]} alt={property.unparsed_address} />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(4)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox">
                        <AiOutlineCamera className="text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container md:mt-24 mt-16">
          <div className="md:flex">
            <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
              <h4 className="text-2xl font-medium">{property.unparsed_address}</h4>

              <ul className="py-6 flex items-center list-none">
                <li className="flex items-center lg:me-6 me-4">
                  <LiaCompressArrowsAltSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property.living_area} sqf</span>
                </li>
                <li className="flex items-center lg:me-6 me-4">
                  <BiBed className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property.bedrooms_total} Beds</span>
                </li>
                <li className="flex items-center">
                  <LiaBathSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property.bathrooms_total_integer} Baths</span>
                </li>
              </ul>

              <p className="text-slate-400">{property.public_remarks}</p>

              <div className="w-full leading-[0] border-0 mt-6">
                {mapUrl ? (
                  <iframe
                    title="Property Map"
                    src={mapUrl}
                    style={{ border: "0" }}
                    className="w-full h-[500px]"
                    allowFullScreen
                  />
                ) : (
                  <p>Map unavailable—location data or API key missing.</p>
                )}
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
              <div className="sticky top-20">
                <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                  <div className="p-6">
                    <h5 className="text-2xl font-medium">Price:</h5>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-medium">$ {property.list_price}</span>
                      <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                        {property.property_type === "Residential Lease" ? "For Rent" : "For Sale"}
                      </span>
                    </div>
                    <ul className="list-none mt-4">
                      <li className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Days on Market</span>
                        <span className="font-medium text-sm">
                          {Math.floor((new Date() - new Date(property.status_change_timestamp)) / (1000 * 60 * 60 * 24))} Days
                        </span>
                      </li>
                      <li className="flex justify-between items-center mt-2">
                        <span className="text-slate-400 text-sm">Price per sq ft</span>
                        <span className="font-medium text-sm">
                          $ {(property.list_price / property.living_area).toFixed(2)}
                        </span>
                      </li>
                      <li className="flex justify-between items-center mt-2">
                        <span className="text-slate-400 text-sm">Monthly Payment (estimate)</span>
                        <span className="font-medium text-sm">
                          $ {((property.list_price * 0.05) / 12).toFixed(2)}/Monthly
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex">
                    <div className="p-1 w-1/2">
                      <Link to="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">
                        Book Now
                      </Link>
                    </div>
                    <div className="p-1 w-1/2">
                      <Link to="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">
                        Offer Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">
                    Have Question? Get in touch!
                  </h3>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"
                    >
                      <BsTelephone className="align-middle me-2" /> Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}

      <Footer />
      <Switcher />
    </>
  );
}

export default PropertyDetail;