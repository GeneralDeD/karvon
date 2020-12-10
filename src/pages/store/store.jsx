import React, {useEffect , useState} from 'react';
import { storeApi } from '../../service/storeService';
import { InnerLoader } from '../../components';
import './store.scss';
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";
import '../../img/ad2.jpg'
import ad4 from "../../img/ad4.png";

import {Tab, Tabs} from "react-bootstrap";
import OurCompany from "./components/OurCompany";
import Products from "./components/Products";
import NewsBlog from "./components/NewsBlog";

function Store(props){

    const [load , setLoad] = useState(true);
    const [store , setStore] = useState({});

    useEffect(()=>{
        storeApi.getStoreById(props.match.params.marketId)
            .then( res =>{
                setStore(res.data.data.company)
                console.log(res.data.data)
                setLoad(false)
            })
    },[]);
    if(load){
        return(
            <InnerLoader/>
        )
    }else{
        return(
            <div className="oneStore">
                {/*<p>{props.match.params.marketId}</p>*/}
                <Container className={"container2"}>
                    <Row md={12} sm={12} xs={12} className={"pb-5"}>
                        <Col md={12} sm={12} xs={12}>
                            <img src={`http://umdsoft.uz${store.image}`} style={{width:"1240px",height:"380px",objectFit:"cover"}} alt=""/>
                        </Col>
                    </Row>

                    <OurCompany company={store}/>

                    <Row md={12}>
                        <Col md={9}>
                            <Row>
                                <Tabs defaultActiveKey="new" id="tabs">
                                    <Tab eventKey="new" title="New" enabled tabClassName={"btn"}>
                                        <p className={"danger"}>est ex expedita id ipsum iste iure magni minima minus, possimus quas, quisquam reprehenderit saepe tenetur.</p>
                                        {/*<Products/>*/}
                                    </Tab>
                                    <Tab eventKey="cell" title="Cell" enabled tabClassName={"btn"}>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, fuga minus.</h3>
                                    </Tab>
                                    <Tab eventKey="hitCell" title="Hit Cell" enabled tabClassName={"btn"}>
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit.</h6>
                                    </Tab>
                                    <Tab eventKey="recommended" title="Recommended" enabled tabClassName={"btn"}>
                                        <p><mark>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</mark></p>
                                    </Tab>
                                </Tabs>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <Row className={"mt-5"}>
                                <NewsBlog/>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
// http://cdn.umdsoft.uz/api/company/:id

export default Store;