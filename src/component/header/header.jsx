import React from "react";
import logo from "../../images/header/logo.png";
import Square from "../../images/header/square.png"
import Ellipse from "../../images/header/Ellipse.png"
import Love from "../../images/header/love.png"
import Avatar from "../../images/header/avatar.png"

export default function Header() {
    return (
        <React.Fragment>
            <section className="w-5/6 flex items-center">
                <div className="w-1/3">
                    <img src={logo} alt={logo} />
                </div>
                <div className="w-2/3 relative">
                    <svg className="w-6 h-6 absolute top-3 left-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input placeholder="Cari makan bang?" className="w-5/6 text-lg pl-20 py-3 rounded-3xl bg-gray-100" type="text" />
                </div>
            </section>
            <section style={{ background: 'rgba(252, 252, 252, 0.9)' }} className="w-1/4 h-full pr-3 flex items-center justify-between ">
                <div className="ml-6">
                    <img className="w-3/4" src={Square} alt={Square} />
                </div>
                <div className="ml-3 relative flex items-center justify-center font-bold">
                    <img className="w-3/4" src={Ellipse} alt={Ellipse} />
                    <p className="absolute">3</p>
                </div>
                <div className="ml-3">
                    <img className="w-3/4" src={Love} alt={Love} />
                </div>
                <div className="ml-3">
                    <img className="w-3/4" src={Avatar} alt={Avatar} />
                </div>
            </section>
        </React.Fragment>
    );
}