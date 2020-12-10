import React, {Component} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import {Card, CardBody, Col, Row} from "reactstrap";
import ad4 from "../../../img/ad4.png";

class NewsBlog extends Component {
    render() {
        return (
            <>
                <Tabs defaultActiveKey="newsBlog" id="tabs">
                    <Tab eventKey="newsBlog" title="News blog" enabled tabClassName={"btn"}>
                        <Col className={"mt-5"}>
                            <Card className={"pl-0 pr-0 mb-5"} style={{border:"none"}}>
                                <CardBody className={"p-0 text-center"}>
                                    <div className={"p-0"}>
                                        <img className={"mt-5"} src={ad4} width={"160px"} alt=""/>
                                    </div><br/>
                                    <Row>
                                        <div className={"nav list-unstyled"}>
                                            <Col className={"p-0"}>
                                                <h3 className={"mainBlueIcon ml-3"}><i className="fa fa-heart" aria-hidden="true"></i></h3>
                                            </Col>
                                            <Col className={""}>
                                                <p className={"mt-2"}>
                                                    <i className="mainYellowIcon fa fa-star" aria-hidden="true"></i>
                                                    <i className="mainYellowIcon fa fa-star" aria-hidden="true"></i>
                                                    <i className="mainYellowIcon fa fa-star" aria-hidden="true"></i>
                                                    <i className="mainYellowIcon fa fa-star" aria-hidden="true"></i>
                                                    <i className="mainYellowIcon fa fa-star" aria-hidden="true"></i>
                                                </p>
                                            </Col>
                                            <Col className={"p-0"}>
                                                <h3 className={"mainBlueIcon"}><i className="fas fa-share-alt" aria-hidden="true"></i></h3>
                                            </Col>
                                        </div>
                                    </Row>
                                    <h4><b>name name</b></h4>
                                    <h2 className={"mb-5"}><b>325654 sum</b></h2>
                                </CardBody>
                            </Card>
                            {/*__________*/}
                            <Card className={"pl-0 pr-0 mb-5"} style={{border:"none"}}>
                                <CardBody className={"p-0 text-center"}>
                                    <div className={"p-0"}>
                                        <img className={"mt-5"} src={ad4} width={"160px"} alt=""/>
                                    </div><br/>
                                    <Row>
                                        <div className={"nav list-unstyled"}>
                                            <Col className={"p-0"}>
                                                <h3 className={"mainBlueIcon ml-3"}><i className="fa fa-heart" aria-hidden="true"></i></h3>
                                            </Col>
                                            <Col className={""}>
                                                <p className={"mt-2"}>
                                                    <i className="mainYellowIcon fa fa-star" aria-hidden="true"></i>
                                                    <i className="mainYellowIcon fa fa-star" aria-hidden="true"></i>
                                                    <i className="mainYellowIcon fa fa-star" aria-hidden="true"></i>
                                                    <i className="mainYellowIcon fa fa-star" aria-hidden="true"></i>
                                                    <i className="mainYellowIcon fa fa-star" aria-hidden="true"></i>
                                                </p>
                                            </Col>
                                            <Col className={"p-0"}>
                                                <h3 className={"mainBlueIcon"}><i className="fas fa-share-alt" aria-hidden="true"></i></h3>
                                            </Col>
                                        </div>
                                    </Row>
                                    <h4><b>name name</b></h4>
                                    <h2 className={"mb-5"}><b>325654 sum</b></h2>
                                </CardBody>
                            </Card>
                        </Col>
                    </Tab>
                </Tabs>
            </>
        );
    }
}

export default NewsBlog;