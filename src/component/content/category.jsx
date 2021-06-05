import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Bintang from "../../images/populer/Vector.png"
import Popup from "reactjs-popup"
import Keranjang from "../../images/header/sidebar/keranjang.png"
import Plus from "../../images/header/sidebar/plus.png"
import Minus from "../../images/header/sidebar/minus.png"

export default function Food(props) {
    const [food, setFood] = React.useState([])
    const [angka, setAngka] = React.useState(0)
    const [jumlah, setJumlah] = React.useState([])
    const [total, setTotal] = React.useState([])
    const [name, setName] = React.useState([])
    const [image, setImage] = React.useState([])
    props.getAllData(image,jumlah, total, name)
    const getFood = async (id) => {
        try {
            const url = ` https://belajar-react.smkmadinatulquran.sch.id/api/populer/8?page=${id}`
            const response = await axios.get(url)
            console.log(response.data.data)
            setFood(response.data.data)
        }
        catch (error) {
            console.log(error)          
        }
    }

    let { id } = useParams();
    React.useEffect(() => { getFood(id) }, [id])
    return (
        <React.Fragment>
            <div className="mt-32 pr-5">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-2xl">Populer</h1>
                   
                </div>
                <div className="mt-5 ">
                    <ul className="flex-wrap flex items-center justify-between overflow-auto mt-3 mb-6">
                        {food.map((dt, index) => (
                            <li className="flex-none w-3/10 h-48 relative m-4" key={index}>
                                {/* <Popup trigger={
                                    <div>
                                            <img className="rounded-xl w-72 h-36" src={dt.image} alt={dt.image} />
                                        <p className="absolute p-4 bg-white rounded-2xl h-1/10 flex text-xs items-center top-24 bottom- left-3 font-bold ">{dt.waktu}</p>
                                        <h1 className="font-black">{dt.name}</h1>
                                        <div className="flex">
                                            <div className="flex"><img className="w-4 h-4 m-1" src={Bintang} alt={Bintang} /><p className="font-bold">{dt.rating}</p></div>
                                            <p className="font-bold px-20">Rp.{dt.harga}</p>
                                    </div>    
                                    </div>
                                }>

                                </Popup> */}
                                <Popup trigger={
                                    <div className="w-30 h-56">
                                        <img className="rounded-xl w-72 h-36" src={dt.image} alt={dt.image} />
                                        <p className="absolute p-4 bg-white rounded-2xl h-1/10 flex text-xs items-center top-24 bottom- left-3 font-bold ">{dt.waktu}</p>
                                        <h1 className="font-black">{dt.name}</h1>
                                        <div className="flex">
                                            <div className="flex"><img className="w-4 h-4 m-1" src={Bintang} alt={Bintang} /><p className="font-bold">{dt.rating}</p></div>
                                            <p className="font-bold px-20">Rp.{dt.harga}</p>
                                        </div>
                                    </div>
                                } modal>
                                    {close => (
                                        <div className="">
                                            <img className="rounded-xl w-full h-60 mt-3" src={dt.image} alt={dt.image} />
                                            <div className="flex justify-between mt-3 p-3">
                                                <p className="font-extrabold text-2xl font-poppins">{dt.name}</p>
                                                <p className="font-extrabold text-2xl font-poppins">Rp. {dt.harga}</p>
                                            </div>
                                            <div className="flex">
                                                <div className="rounded-full ml-3 border-black">
                                                    <p>{dt.waktu}</p>
                                                </div>
                                                <div className="rounded-full ml-5 flex border-black">
                                                    <img src={Bintang} alt={Bintang} className="h-5 font-bold mr-2" />
                                                    <p className="font-bold">{dt.rating}</p>
                                                </div>
                                            </div>
                                            <div className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas qui recusandae iure error. Iure, ab. Dolores voluptatum labore dolor, accusamus debitis vel voluptatem hic? Veritatis dignissimos voluptate quos itaque omnis.</div>
                                            <div style={{ background: "#F9F2E8" }} className="flex items-center justify-between  h-16 w-44 rounded-2xl mb-6 mt-6 ml-3">
                                                <div className="flex items-center justify-between">
                                                    <button disabled={angka == 0} onClick={() => {setAngka(dt.pesan--)
                                                        dt.jumlah++
                                                    }} 
                                                    class="bg-white text-white font-bold py-2 px-4 ml-2 rounded-2xl  w-12 h-12">
                                                    <img src={Minus} alt={Minus} />
                                                    </button>
                                                    <p className="text-2xl ml-5">{dt.pesan}</p>
                                                    <button disabled={dt.jumlah == 0} onClick={() => {setAngka(dt.pesan++)
                                                        dt.jumlah--
                                                    }} 
                                                    class="bg-white  text-white font-bold py-2 px-4 rounded-2xl w-12 h-12 ml-4">
                                                    <img src={Plus} alt={Plus} />
                                                    </button>
                                                </div>
                                                <div className="flex items-center justify-between ml-16">
                                                    <h1 className="font-poppins font-bold">stok</h1>
                                                    <h1>{dt.jumlah}</h1>
                                                </div>
                                                <div className="bg-blackflex items-center justify-between ml-4 h-16 w-1/2 rounded-2xl">
                                                <button onClick={()=>{
                                                       setImage(dt.image)
                                                       setJumlah(dt.harga)
                                                       setTotal(dt.pesan)
                                                       setName(dt.name)
                                                   }} 
                                                   style={{background : "#FCD561"}} class="text-white font-bold font-poppins py-2 px-4 ml-32 rounded-2xl h-16 w-56 flex items-center justify-between">
                                                       <img src={Keranjang} alt={Keranjang} />
                                                       Tambah Pesanan 
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Popup>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}