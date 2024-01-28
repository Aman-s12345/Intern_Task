// Navbar.js
import React, { useState, useEffect } from "react";
import { ImHome } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <div>
            <nav className="flex flex-col justify-between items-center h-auto  max-w-6xl mx-auto pb-3 pt-2 ">
                <div className="w-full flex items-center justify-between my-auto pt-3 px-auto">
                    <div className="ml-5">
                        <NavLink to="/">
                            <ImHome className="text-white text-3xl" />
                        </NavLink>

                    </div>
                    <div >
                        <div>
                            {(!isSmallScreen) && (
                                <div className="flex flex-row justify-between items-center gap-4 pr-7">
                                     <NavLink to="/Addnewtask">
                                        <button className="text-slate-900 text-center text-[13px] sm:text-[16px] bg-white px-2 py-1 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18) hover:shadow-none hover:scale-95 transition-all duration-200">Add New Task</button>
                                    </NavLink>

                                    <NavLink to="/complete" >
                                        <button className="text-slate-900 text-center text-[13px] sm:text-[16px] bg-white px-2 py-1 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18) hover:shadow-none hover:scale-95 transition-all duration-200">Complete Task</button>
                                    </NavLink>
                                    <NavLink to="/incomplete">
                                        <button className="text-slate-900 text-center text-[13px] sm:text-[16px] bg-white px-2 py-1 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18) hover:shadow-none hover:scale-95 transition-all duration-200">Incomplete Task</button>
                                    </NavLink>

                                </div>
                            )}

                        </div>

                        <div className="flex flex-row justify-between items-center mr-5">
                            {isSmallScreen && (
                                <button
                                    className="text-white focus:outline-none lg:hidden"
                                    onClick={toggleContent}
                                >
                                    <IoMenu className="text-white text-3xl"  />
                                </button>
                            )}

                        </div>


                    </div>



                </div>

                <div className="w-full flex items-center justify-between my-auto ml-6 px-2 pt-2">
                    {(isSmallScreen) && (
                        <div className={`${(isContentVisible) ? 'block' : 'hidden'}`}>
                            <div className="flex flex-col justify-start items-start gap-2 ">

                            <NavLink to="/Addnewtask">
                                        <button className="text-slate-900 text-center text-[13px] sm:text-[16px] bg-white px-2 py-1 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18) hover:shadow-none hover:scale-95 transition-all duration-200">Add New Task</button>
                                    </NavLink>
                                   <NavLink to="/complete" >
                                        <button className="text-slate-900 text-center text-[13px] sm:text-[16px] bg-white px-2 py-1 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18) hover:shadow-none hover:scale-95 transition-all duration-200 ">Complete Task</button>
                                    </NavLink>
                                    <NavLink to="/incomplete">
                                        <button className="text-slate-900 text-center text-[13px] sm:text-[16px] bg-white px-2 py-1 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18) hover:shadow-none hover:scale-95 transition-all duration-200">Incomplete Task</button>

                                    </NavLink>
                            </div>
                        </div>
                    )}

                </div>

            </nav>

        </div>

    );
};

export default Navbar;

