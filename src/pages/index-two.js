import React from "react";
import Navbar from "../component/Navbar";
import HeroSectionWithSearch from "../component/HeroSectionWithSearch";
import SearchBar from "../component/SearchBar";
import Property from "../component/Properties/Property"; // Updated path
import ClientTwo from "../component/Client-two";
import Footer from "../component/Footer";
import About from "../component/About";
import Feature from "../component/Feature";
import Switcher from "../component/Switcher";
import GetInTuch from "../component/Get-in-tuch";
import Cta from "../component/cta";
import Partner from "../component/partner";
import BackgroundImage from "../assets/images/bg/01.jpg"; // Updated path to image

export default function IndexTwo() {
  return (
    <>
      <Navbar navClass="navbar-white" />
      <HeroSectionWithSearch
        heading="Easy way to find your dream property"
        description="A great platform to buy and rent your properties without any agent or commissions."
        backgroundImage={BackgroundImage}
      />
      <section className="relative md:pb-24 pb-16">
        <About />
        <Feature />
        <div className="relative md:pb-24 pb-16">
          <Property />
        </div>
        <Cta />
        <Partner />
        <ClientTwo />
        <GetInTuch />
      </section>
      <Footer />
      <Switcher />
    </>
  );
}