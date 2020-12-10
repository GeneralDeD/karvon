import React from 'react'
import {Col, Input} from "reactstrap";
import st from "../products.module.scss";
const Selects = () => {
    return(
        <div>
            <select className={"ml-3 btn "+st.goStyle} name="select" id="select">
                <option className={st.section_title+" bg-primary"} value={0}>tanlang</option>
                <option className={st.section_title+" bg-primary"} value={1}>hello1</option>
                <option className={st.section_title+" bg-primary"} value={2}>hello2</option>
                <option className={st.section_title+" bg-primary"} value={3}>hello3</option>
                <option className={st.section_title+" bg-primary"} value={4}>hello4</option>
            </select>
        </div>
    )
}
export default Selects;