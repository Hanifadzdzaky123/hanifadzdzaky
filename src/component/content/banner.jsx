import React from "react";
import bannerImage from "../../images/header/banner.png"

export default function banner(params) {
    return (
        <React.Fragment>
            <div style={{ background: "#FFF7ED" }} className="flex items-center justify-center px-24 py-8 rounded-xl">
                <div className="h-full">
                    <img className="w-44 h-24" src={bannerImage} alt={bannerImage} />
                </div>
                <div style={{ color: '#FB6D3A' }} className="ml-8 h-full font-bold">
                    <h1 className="text-4xl font-extrablack">Promo Hari Ini</h1>
                    <h2 className="text-lg font-semibold">Perut kenyang, hati senang</h2>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex w-1/12 items-center justify-between mt-4">
                    <li>
                        <div className="w-3 h-3 rounded-full border bg-red-500"></div>
                    </li>
                    <li>
                        <div className="w-3 h-3 rounded-full border bg-red-500"></div>
                    </li>
                    <li>
                        <div className="w-3 h-3 rounded-full border bg-red-500"></div>
                    </li>
                    <li>
                        <div className="w-3 h-3 rounded-full border bg-red-500"></div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}