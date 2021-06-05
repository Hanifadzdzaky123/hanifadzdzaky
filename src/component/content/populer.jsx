import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import Bintang from "../../images/populer/Vector.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default function Populer(props) {
    const [populer, setPopuler] = React.useState([])

    const getPopuler = async () => {
        try {
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/24?page=1`
            const response = await axios.get(url)
            console.log(response.data.data)
            setPopuler(response.data.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    
    let data = [
        {   Image: props.img,
            Jumlah: props.jumlah,
            Total: props.total,
            Nama: props.nama,
        }
    ] 
    
    React.useEffect(() => { getPopuler() }, [])

    return (
        <React.Fragment>
            <div className="mt-32 pr-5">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-2xl">Populer</h1>
                    <button style={{ background: "#FB6D3A" }} className="text-xs rounded-2xl text-white font-bold px-4 py-2 ">Lebih Lengkap</button>
                </div>
                <div className="mt-5 ">
                    <ul className="flex-wrap flex items-center justify-between overflow-auto mt-3 mb-6">
                        {populer.map((dt, index) => (
                            <li className="flex-none w-3/10 h-48 relative m-4" key={index}>
                                <img className="rounded-xl w-72 h-36" src={dt.image} alt={dt.image} />
                                    <p className="absolute p-4 bg-white rounded-2xl h-1/10 flex text-xs items-center top-24 bottom- left-3 font-bold ">{dt.waktu}</p>
                                    <h1 className="font-black">{dt.name}</h1>
                                    <div className="flex">
                                        <div className="flex"><img className="w-4 h-4 m-1" src={Bintang} alt={Bintang} /><p className="font-bold">{dt.rating}</p></div>
                                        <p className="font-bold px-20">Rp.{dt.harga}</p>
                                    </div>
                            </li>
                            
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}