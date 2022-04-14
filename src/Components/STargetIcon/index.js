import React from "react";
import {AiFillEdit} from "react-icons/ai";
import {IoTrashBin} from "react-icons/io5"
import {BsFillBookmarkCheckFill,BsNutFill, BsFillPatchPlusFill} from "react-icons/bs";
import "./STargetIcon.css";
function STargetIcon({type, color, onClick, className, id}){
    const iconTypes = {
        "check": (color, type)=>(
            <BsFillBookmarkCheckFill fill={color} className={`STargetIcon STargetIcon--${type}`}/>
        ),
        "edit": (color)=>(
            <AiFillEdit fill="color" className={`STargetIcon STargetIcon--${type}`}/>
        ),
        "config": (color)=>(
            <BsNutFill fill={color} className={`STargetIcon STargetIcon--${type}`}/>
        ),
        "delete": (color)=>(
            <IoTrashBin fill={color} className={`STargetIcon STargetIcon--${type}`}/>
        ),
        "AddButton":(color)=>(
            <BsFillPatchPlusFill fill={color} className={type} />
        )
    }
    return (
        <span 
        className={`STargetIcon-${type} ${className && className || ""}`}
        onClick={onClick}
        id={id}>
            {iconTypes[type](color, type)}
        </span>
    )
}
export {STargetIcon}