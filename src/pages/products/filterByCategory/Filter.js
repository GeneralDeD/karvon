import React, {Component, useState} from 'react';
import st from "../products.module.scss";
import {ListGroup, ListGroupItem} from "reactstrap";

const kategoriyalar = [
    {
        id:1,
        title:"Computers",
        htmlFor:1
    },
    {
        id:2,
        title:"Phone",
        htmlFor:2
    },
    {
        id:3,
        title:"TV",
        htmlFor:3
    },
    {
        id:4,
        title:"Lights",
        htmlFor:4
    },
    {
        id:5,
        title:"Fridges",
        htmlFor:5
    },
    {
        id:6,
        title:"Artel",
        htmlFor:6
    },
];


const Filter =()=> {
    const[check,setCheck] = useState(false);
    const style={
        "border-bottom":" 1px solid lightgray"
    };
        return (
            <div>
                {/*<h2 className={" mb-3 " +st.section_title}>Filtr</h2>*/}
                <ul className="list-group mb-5">
                    {
                        kategoriyalar.map((item,index)=>{
                            return(
                                <li key={index} className="d-inline-block pt-0 pb-0 list-group-item">
                                    <input className={"mt-3"} type="checkbox" id={item.id}/>
                                    <label htmlFor={item.htmlFor}><p className={"ml-3 "+st.filtr}>{item.title}</p></label>
                                    <hr className={"p-0 m-0"}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
}

export default Filter;