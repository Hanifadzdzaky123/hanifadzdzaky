import React from "react";
import Header from "../header/header";
import Content from "../content";
import Sidebar from "../sidebar/sidebar"

function Layout() {
    const [jumlah, setJumlah] = React.useState([])
    const [total, setTotal] = React.useState([])
    const [name, setName] = React.useState([])
    const [image, setImage] = React.useState([])
    const getAllData = (image,jumlahs,totals,names)=>{
        setImage(image)
        setTotal(totals)
        setName(names)
        setJumlah(jumlahs)
    }
    return (
        <React.Fragment>
            <div className="h-screen w-screen pl-8 font-poppins">
                {/* ini bagian header */}
                <header className="flex items-center h-1/10 w-full">
                    <Header/>
                </header>
                <main className="h-9/10 w-full flex pt-10">
                    {/* ini bagian utama */}
                    <section className="w-5/6 h-full">
                        <Content getAllData={getAllData}/>
                    </section>
                    {/* ini bagian pesanan */}
                    <section className="w-1/4 h-full bg-gray-50">
                        <Sidebar image={image} jumlah={jumlah} total={total} nama={name}/>
                    </section>
                </main>
            </div>
        </React.Fragment>
    );
}

export default Layout