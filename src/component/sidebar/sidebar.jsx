import React from "react"
import Mobil from "../../images/header/sidebar/mobil.png"
import Panah from "../../images/header/sidebar/panah.png"


export default function Sidebar(props) {

    let getData = [
        {   Image: props.img,
            Jumlah: props.jumlah,
            Total: props.total,
            Nama: props.nama,
        }
    ]
    console.log(getData)
    return (
        <React.Fragment>
            <nav className="fixed w-1/5 h-full">
                <div>
                    <h1 className="text-3xl font-black">Pesanan Saya</h1>
                </div>
                <div style={{ background: '#6455C2' }} className="rounded-xl text-white mt-10">
                    <p className="pt-4 text-xm pl-5">Hanif adz dzaky</p>
                    <p className="mt-8 pl-5 text-2xl font-black">Rp. 20000,-</p>
                    <p className="pl-5 mt-8 pb-2">72828*******30920923</p>
                </div>
                <div className="flex justify-between">
                {getData.map((dt,index) => (
                    dt.jumlah*dt.total === 0 ? "" : <div className="items-center flex justify-between">
                        <div key={index} style={{ background: '#FFF7ED' }} className="flex rounded-xl pl-3 pt-2 pb-2 pr-2 mt-10 justify-between">
                    <img src={dt.image} alt={dt.image} />
                </div>
                <div className="flex">
                           {dt.Total}
                        </div>
                <p className="mt-12 font-black ml-5">{props.name}</p>
                <p style={{ color: '#B2B2B2' }} className="mt-12 ml-16 font-black text-grey">{dt.Jumlah * dt.Total}</p>
                    </div>
                ))}
                </div>
                <div className="flex justify-between">
                    <div style={{ background: '#FFF7ED' }} className="flex rounded-xl pl-3 pt-2 pb-2 pr-2 mt-10 justify-between">
                        <img src={Mobil} alt={Mobil} />
                    </div>
                    <p className="mt-12 font-black ml-5">Jl.Bangke no 13</p>
                    <p style={{ color: '#B2B2B2' }} className="mt-12 ml-16 font-black text-grey">Gratis</p>
                </div>
                <div className="flex justify-between">
                    <p className="mt-5 font-black">Total :</p>
                    <p className="text-4xl mt-3 font-black">{props.jumlah * props.total}</p>
                </div>
                <div className="ml-4 mt-5">
                    <button style={{ background: '#FCD561' }} className="text-xl text-white rounded-2xl font-bold px-28 py-3 mr-3">Pesan</button>
                </div>
            </nav>
        </React.Fragment>
    )
}