import React, { useState } from "react";
import styled from "styled-components";
import "./STargetAdd.css";
import { STargetContext } from "../../utils/STargetContext";
import { STargetIcon } from "../STargetIcon";
import { clear } from "@testing-library/user-event/dist/clear";
const Menu = styled.form`
    
    & > :first-child{
        
    }
    & > :nth-child(2){
        margin-right: 20px;
    }
`
const Button = styled.button`
`;
const InputBtn= styled.button`
`;
function STargetAdd(){
    const { addTarget } = React.useContext(STargetContext);
    const btn = document.getElementById("AddButton");
    const title = document.getElementById("STargetAdd--input");
    const text = document.getElementById("STargetAdd--textarea");

    const textChange = (e)=>{
            const target = e.target || e.srcElement;
            if(target.value.length > 0 && target.value.length < 2){
                openForm();
            }else if(target.value.length < 1){
                closeForm();
            }
        }
    const openForm = ()=>{
        if(hide){
            setHide(false);
            title.focus();
            btn.classList.add("AddButton-open");
            document.getElementById("asd").classList.add("onAddTask");
        }
    }
    const closeForm = ()=>{
        title.value="";
        text.value="";
        setHide(true);
        btn.classList.remove("AddButton-open");
        document.getElementById("asd").classList.remove("onAddTask");
    }
    const onSubmit = (e)=>{
            e.preventDefault();
            const input = document.getElementById("STargetAdd--input");
            const textarea = document.getElementById("STargetAdd--textarea");
            addTarget(input.value, textarea.value);
            closeForm();
        }
    const [hide, setHide] = useState(true);
    return (
        <React.Fragment>
            <Menu id="asd" className={"STargetAdd-form"} onSubmit={onSubmit}>
                <input
                className="STargetAdd--input"
                id="STargetAdd--input"
                placeholder="Titulo"
                onChange={textChange}
                required
                autoComplete="off"
                ></input>
                <textarea 
                    className="STargetAdd--textarea"
                    form="asd"
                    placeholder="Agrega un objetivo"
                    id="STargetAdd--textarea"
                    hidden={hide}
                    required
                ></textarea>
                <InputBtn
                    className="STargetAdd--button"
                    type="submit"
                    hidden={hide}
                >
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text"> 
                        Agregar
                    </span>
                </InputBtn>
                <InputBtn
                    className="STargetAdd--button"
                    type="button"
                    hidden={hide} 
                    onClick={closeForm}>
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front text"> 
                    cancelar
                </span>
                </InputBtn>
            </Menu>
            <STargetIcon color={"rgb(91, 91, 201)"} onClick={hide && openForm || closeForm}
                className="STargetAdd-AddButton"
                type="AddButton"
                id="AddButton"
            />
        </React.Fragment>
    )
}

export { STargetAdd }