import React from "react";
import styled from "styled-components";
import { STargetContext } from "../../utils/STargetContext";
const Incompeted = styled.div`
    text-align: center;
    background: rgb(236, 236, 236);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    padding: 10px;
    & > p{
        margin-bottom: 20px;
        color: black
    }
    & :nth-child(2){
        margin-right: 20px;
    }
`;
const InputBtn= styled.button`
    height: fit-content;
    width: 100px;
    position: relative;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
    user-select: none;
    touch-action: manipulation;
`;
function IncompleteTarget(props){
    return (
        <Incompeted>
            <p>Aun No Terminas Esta Tarea,<br /> Deseas Eliminarla?</p>
            <InputBtn 
                type="button" 
                onClick={()=>{ props.onDelete(props.target);props.onCancel();}} >
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front text"> Eliminar</span>
            </InputBtn>
            <InputBtn 
                type="button" 
                onClick={props.onCancel}
            >
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front text"> Cancelar
                </span>
            </InputBtn>
        </Incompeted>
    )
}
export {IncompleteTarget};