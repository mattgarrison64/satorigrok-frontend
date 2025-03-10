import React, { useState } from "react";
import { Link } from "react-router-dom";

import BackgroundImage from "../assets/images/bg/05.jpg";

import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import Navbar from "../component/Navbar";
import Client from "../component/Client";
import Footer from "../component/Footer";
import About from "../component/About";
import Feature from "../component/Feature";
import PropertyTwo from "../component/Property-two";
import Switcher from "../component/Switcher";
import GetInTuch from "../component/Get-in-tuch";
import Categories from "../component/categories";
import { FiSearch } from "react-icons/fi";

export default function IndexFive() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Navbar />
            {/* Hero Start  */}
            <section className="relative md:pt-44 pt-36 bg-gradient-to-b from-slate-50 dark:from-slate-800 to-transparent">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Are you ready to find your dream home</h1>
                            <p className="text-slate-400 mx-auto text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                            <div className="subcribe-form relative z-1 mt-8">
                                <form className="relative max-w-2xl mx-auto">
                                    <FiSearch className="size-5 absolute top-[47%] -translate-y-1/2 start-4" />
                                    <input type="name" id="search_name" name="name" className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ps-12" placeholder="City, Address, Zip :" />
                                    <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-full">Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="relative -mt-[25px]">
                            <img src={BackgroundImage} className="rounded-xl shadow-md dark:shadow-gray-700" alt="" />
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link to="#" onClick={() => setOpen(true)} className="lightbox size-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Listing Categories</h3>

                        <p className="text-slate-400 max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>

                    <Categories/>
                </div>

                {/* Hero End */}
                <About />
                <Feature />
                <PropertyTwo />
                <Client />
                <GetInTuch/>
            </section>
            <Footer />
            <Switcher />
            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="yba7hPeTSjk"
                onClose={() => setOpen(false)}
            />
            {/* <!-- End --> */}
        </>
    );

}
