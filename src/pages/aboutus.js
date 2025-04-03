import React from "react";
import { Link } from "react-router-dom";

import BackgroundImage from "../assets/images/bg/01.jpg";

import Navbar from "../component/Navbar";
import About from "../component/About";
import Feature from "../component/Feature";
import ClientTwo from "../component/Client-two";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";
import GetInTuch from "../component/Get-in-tuch";
import HeroSmall from "../component/HeroSmall";
import CounterSection from "../component/CounterSection"; // New import

import { counterData, teamdata } from "../component/Properties/data";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Aboutus() {
  return (
    <>
      <Navbar navClass="navbar-white" />
      <HeroSmall
        heading="About Us"
        backgroundImage={BackgroundImage}
      />
      <section className="relative md:pb-24 pb-16">
        <About />
        <Feature />
      </section>
      {/* <!-- Start CTA --> */}
      <CounterSection
        backgroundImage={BackgroundImage}
        counters={counterData}
      />
      {/* <!-- End CTA --> */}
      <section className="relative md:pb-24 pb-16">
        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet The Agent Team</h3>
            <p className="text-slate-400 max-w-xl mx-auto">A great platform to buy, sell and rent your properties without any agent or commissions.</p>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            {teamdata.map((item, index) => (
              <div className="lg:col-span-3 md:col-span-6" key={index}>
                <div className="group text-center">
                  <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                    <img src={item.image} className="" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                      <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiFacebook className="size-4" /></Link></li>
                      <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiInstagram className="size-4" /></Link></li>
                      <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiLinkedin className="size-4" /></Link></li>
                    </ul>
                  </div>
                  <div className="content mt-3">
                    <Link to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                    <p className="text-slate-400">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ClientTwo />
        <GetInTuch />
      </section>
      <Footer />
      <Switcher />
    </>
  );
}