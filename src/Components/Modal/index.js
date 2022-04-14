import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { STargetContext } from "../../utils/STargetContext";

const WarningBg = styled.div`
    position: fixed;
    left: -10px;
    top:-10px;
    right: -10px;
    bottom: -10px;
    background: rgb(0,0,0,.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`


function Modal({children, onCancel}){
    return ReactDOM.createPortal(
        <WarningBg id="modal" onClick={(e) => {if(e.target.id=="modal"){
            onCancel(false)
        }}}>
            {children}
        </WarningBg>,
        document.getElementById("root")
    ) 
}
export {Modal};