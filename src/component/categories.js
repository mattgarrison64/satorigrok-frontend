import React from "react";
import { Link } from "react-router-dom";
import { categoriesData } from "./Properties/data";

export default function Categories(){
    return(
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-8 md:gap-[30px] gap-3">
            {categoriesData.map((item,index) =>{
                return(
                    <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500" key={index}>
                        <img src={item.image} alt="" />
                        <div className="p-4">
                            <Link to="#" className="text-xl font-medium hover:text-green-600">{item.name}</Link>
                            <p className="text-slate-400 text-sm mt-1">{item.title}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}