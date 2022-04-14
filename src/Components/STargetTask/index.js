import React from "react";
import styled from "styled-components";
import { STargetContext } from "../../utils/STargetContext";
import { STargetIcon } from "../STargetIcon";
import "./STargetTask.css"

const Button = styled.button`
    position: absolute;
    right: 5px;
    top: 5px;
    background: none;
    border: none;
    cursor: pointer;
    border: 1px solid;
    color: white;
    display: none;
    &.completed{
        border-color: green;
    }
    &.completed:hover{
        color: green;
    }
    &.incompleted:hover{
        color: red;
    }
    &.incompleted{
        border-color: red;
    }
`;
function STargetTask(props){
    const {setOpenModal, setNewItemInfo} = React.useContext(STargetContext);
    const [openConf, setOpenConf] = React.useState(false);
    const { text, completed, id, title} = props.task;
    const onDelete = ()=>{
        if(completed){props.onDelete(id)}else{setOpenModal(id)};
    }
    const openConfig = () =>{
        setOpenConf(!openConf)
    }
    const onEdit=()=>{
        setNewItemInfo({id, title, text})
    }
    return (
        <li className="STargetTask">
            <h3 className="STargetTask--title">{title}</h3>
            <div className="STargetTask-text"><p className="STargetTask--text">{text}</p>
                <div className="STargetTask-options">
                    <STargetIcon
                    id="STargetIcon--config"
                    type="config"
                    color="#3d3636"
                    onClick={openConfig}
                    className={ openConf && "open"}
                    />
                    <div 
                    className={`STargetTask--options-container`}
                        >
                        <div id="STargetTask--options"
                            className={`STargetTask--options ${openConf && "open" || ""}`}
                        >
                            <STargetIcon
                            color="#000000"
                            type="edit"
                            onClick={onEdit}/>
                            <STargetIcon 
                            color="#000000"
                            type="delete"
                            onClick={onDelete}/>
                            <STargetIcon
                            type="check"
                            color={completed && "#039408" || "#c70404"} 
                            onClick={props.onComplete} />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export { STargetTask }