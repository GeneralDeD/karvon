import React , { useEffect , useState } from 'react';
import {connect} from 'react-redux';
import { productApi } from '../../service/productService';
import st from './products.module.scss';
// import cl from 'classnames';
import { Product , InnerLoader} from '../../components';
import Filter from "./filterByCategory/Filter";
import Selects from "./select/Selects";
import {Col, Container, Input, Row} from "reactstrap";

function Products(props){

    const [productList,setProductList] = useState(props.products.data)
    const [request,setRequest] = useState(false);

    useEffect(()=>{
        setProductList(props.products.data)
    },[props])
    return(
        <div className="">
            <div>
                {
                    request && <InnerLoader/>
                }
                <h1 className={st.section_title+" ml-5 mt-3"}>Barcha maxsulotlar</h1>
                <Row className={" row pr-0 pl-0 mr-0 ml-0"}>
                    <Col md={3} className={"mt-5"}>
                        <div className={st.products}>
                            <Filter/>
                        </div>
                    </Col>
                    <Col md={9} className={"mt-5"}>
                        <Row md={12}>
                            <Col md={6}>

                            </Col>
                            <Col md={3}>
                                <Selects/>
                            </Col>
                            <Col md={3}>
                                <Selects/>
                            </Col>
                        </Row>
                        <Row md={12} className={""}>
                            {
                                productList.map((item,index) => {
                                    return(
                                        <Col md={3} key={index} className={" "}>
                                            <Product data={item}/>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <div className="col-12 d-flex justify-content-end">
                            {
                                props.products.pagination.prev && <button className={"btn-pagination"} onClick={()=>setPage(props.products.pagination.prev.page)}> <i className="bx bx-left-arrow-alt"></i> Oldingi </button>
                            }
                            {
                                props.products.pagination.next && <button className={"btn-pagination"} onClick={()=>setPage(props.products.pagination.next.page)}> Keyingi <i className="bx bx-right-arrow-alt"></i></button>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )

    function setPage(page){
        setRequest(true)
        productApi.getroducts(page)
            .then(res => {
                props.setProducts(res.data)
                window.scrollTo(0,0)
                setRequest(false)
            })
    }
}

const mstp = state => (state);
const mdtp = dispatch => ({
    setProducts : (data) => {
        dispatch({type : "setProducts", payload : data})
    }
})

export default connect(mstp,mdtp)(Products)