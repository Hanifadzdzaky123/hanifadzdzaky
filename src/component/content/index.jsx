import React from "react";
import Banner from "../content/banner";
import Nav from "../content/nav";
import Category from "../content/category"
import Populer from "../content/populer"
import {Switch, Route} from "react-router-dom"

export default function Index (props) {
    const [jumlah, setJumlah] = React.useState([])
    const [total, setTotal] = React.useState([])
    const [name, setName] = React.useState([])
    const [image, setImage] = React.useState([])
    const getAllData = (image,jumlahs,totals,namas)=>{
        setImage(image)
        setTotal(totals)
        setName(namas)
        setJumlah(jumlahs)
    }
    props.getAllData(image,total,name,jumlah)
    return (
        <React.Fragment>
            <header className="h-2/10 w-full pr-5">
                <Banner />
            </header>
            <nav className="h-2/10 w-full">
                <Nav/>
            </nav>
            <section className="h-6/10 w-full">
                <Switch>
                    <Route path={`/category/:id`}>
                        <Category getAllData={getAllData}/>
                    </Route>
                    <Route path="/">
                        <Populer getAllData={getAllData}/>
                    </Route>
                </Switch>
            </section>
            
        </React.Fragment>
    )
}