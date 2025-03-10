import React from 'react'
import Navbar from '../component/Navbar'

import map from '../assets/images/map.svg'
import { Link } from 'react-router-dom'

import property1 from '../assets/images/property/1.jpg'
import property2 from '../assets/images/property/2.jpg'
import property3 from '../assets/images/property/3.jpg'

import client1 from '../assets/images/client/01.jpg'
import client2 from '../assets/images/client/02.jpg'
import client3 from '../assets/images/client/03.jpg'
import client4 from '../assets/images/client/04.jpg'
import client5 from '../assets/images/client/05.jpg'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import Partner from '../component/partner'
import { aboutData, blogList, teamdata } from '../component/Properties/data'
import { FiArrowRight, FiFacebook, FiHexagon, FiInstagram, FiLinkedin } from 'react-icons/fi'
import About from '../component/About'
import Categories from '../component/categories'
import Property from '../component/Properties/property'
import ClientTwo from '../component/Client-two'
import GetInTuch from '../component/Get-in-tuch'
import Footer from '../component/Footer'
import Switcher from '../component/Switcher'

let images = [property1,property2,property3]

export default function IndexTen() {

    const settings = {
        container: '.tiny-single',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        nav: false,
        speed: 800,
        gutter: 0,
      };
  return (
    <>
     <Navbar/> 

    <section class="relative py-24">
        <div class="absolute inset-0 opacity-40 dark:opacity-[0.03] bg-no-repeat bg-bottom bg-cover" style={{backgroundImage:`url(${map})`}}></div>
        <div class="container relative mt-10">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div class="md:col-span-4">
                    <div class="md:text-start text-center">
                        <h1 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl">Let's Find a Home That's Perfect For You!</h1>

                        <div class="mt-4">
                            <Link to="#" class="btn bg-green-600 hover:bg-green-700 text-white rounded-md md:mt-20">Learn More <i class="mdi mdi-arrow-right ms-1 align-middle"></i></Link>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-5">
                    <div class="rounded-full shadow-lg dark:shadow-gray-800 relative overflow-hidden border-8 border-white dark:border-slate-900">
                        <div class="grid grid-cols-1 relative">
                            <div class="tiny-single">
                                <TinySlider settings={settings}>
                                    {images.map((item,index)=>{
                                        return(
                                            <div class="tiny-slide" key={index}>
                                                <img src={item} class="object-cover w-full lg:h-[600px] md:h-96 h-[500px]" alt=""/>
                                            </div>
                                        )
                                    })}
                                </TinySlider>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-3">
                    <div class="md:text-end text-center">
                        <p class="text-slate-400 text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                        <div class="mt-4">
                            <ul class="list-none relative md:mt-20">
                                <li class="inline-block relative"><Link to="#"><img src={client1} class="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li class="inline-block relative -ms-4"><Link to="#"><img src={client2} class="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li class="inline-block relative -ms-4"><Link to="#"><img src={client3} class="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li class="inline-block relative -ms-4"><Link to="#"><img src={client4} class="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                                <li class="inline-block relative -ms-4"><Link to="#"><img src={client5} class="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Partner/>
    </section>

        <section class="relative md:pb-24 pb-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What We Do?</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    
                    {aboutData.map((item,index)=>{
                    return(
                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center" key={index}>
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <FiHexagon className="size-32 fill-green-600/5 mx-auto"/>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <img src={item.image} className="size-12" alt=""/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link to="" className="text-xl font-medium hover:text-green-600">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>

                                <div className="mt-4">
                                    <Link to="" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">Read More <FiArrowRight className="ms-1"/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </div>

            <About/>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Listing Categories</h3>

                    <p class="text-slate-400 max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <Categories/>
            </div>

            <Property/>

            <ClientTwo/>

            <div class="container relative lg:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet The Agent Team</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    {teamdata.map((item, index) =>{
                        return(
                            <div className="lg:col-span-3 md:col-span-6" key={index}>
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                        <img src={item.image} className="" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                            <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiFacebook className="size-4" /></Link></li>
                                            <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiInstagram className="size-4" /></Link></li>
                                            <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiLinkedin  className="size-4" /></Link></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                        <p className="text-slate-400">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div class="container relative lg:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest Blogs & News</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {blogList.slice(0,3).map((item,index)=>{
                        return(
                            <div class="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 transition-all duration-500" key={index}>
                                <div class="relative overflow-hidden">
                                    <img src={item.image} class="" alt=""/>
                                    <div class="absolute end-4 top-4">
                                        <span class="bg-green-600 text-white text-[14px] px-2.5 py-1 font-medium rounded-full h-5">{item.type}</span>
                                    </div>
                                </div>

                                <div class="relative p-6">
                                    <div class="">
                                        <div class="flex justify-between mb-4">
                                            <span class="text-slate-400 text-sm"><i class="uil uil-calendar-alt text-slate-900 dark:text-white me-2"></i>{item.date}</span>
                                            <span class="text-slate-400 text-sm ms-3"><i class="uil uil-clock text-slate-900 dark:text-white me-2"></i>5 min read</span>
                                        </div>

                                        <Link to="/blog-detail" class="title text-xl font-medium hover:text-green-600 duration-500 ease-in-out">{item.title}</Link>
                                        
                                        <div class="mt-3">
                                            <Link to="/blog-detail" class="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>

            <GetInTuch/>
        </section>

        <Footer/>
        <Switcher/>

        
    </>
  )
}
