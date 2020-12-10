import React, {Component} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import '../store.scss'

function OurCompany(props) {
    const { company } = props;
    console.log(company.location.lat,company.location.long);
    return (
        <Row md={12} style={{height:"100%"}} className={""}>
            <Col md={9}>
                <Card style={{height:"100%"}} >
                    <CardBody>

                        <Row md={12} sm={12}>
                            <Col md={5} sm={12} xs={12}>
                                <h2>{company.name}</h2><br/>
                                <p className={'textC'}>{company.description.ru}</p>
                            </Col>
                            <Col md={7} sm={12} xs={12}>
                                <div className={"p-0"}>
                                    <YMaps>
                                        <Map
                                            width={"100%"}
                                            height={"50vh"}
                                            defaultState={{
                                                center: [company.location.lat,company.location.long],
                                                zoom: 12,
                                                controls: ['zoomControl', 'fullscreenControl'],
                                            }}
                                            modules={['control.ZoomControl', 'control.FullscreenControl']}>
                                            <Placemark defaultGeometry={[company.location.lat,company.location.long]} />
                                        </Map>
                                    </YMaps>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            <Col md={3} sm={12}xs={12}>
                <Card style={{height:"85%"}}>
                    <CardBody className={"text-center"}>
                        <h1><i className={'mainBlueIcon far fa-user-circle'}></i></h1>
                        <div>
                            <h1>Quizes</h1>
                            <p className={"textC"}>Lorem ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, reiciendis!</p>
                            <Button className={"btn mainBlue btn-block"}>zadat voproos</Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default OurCompany;