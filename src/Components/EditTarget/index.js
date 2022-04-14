import React from "react";
import { STargetContext } from "../../utils/STargetContext";
import "./EditTarget.css"

function EditTarget(){
    const { setNewItemInfo, newItemInfo, editTarget }= React.useContext(STargetContext);
    console.log( newItemInfo)
    const [newText, setNewText] = React.useState(newItemInfo.text);
    const [newTitle, setNewTitle] = React.useState(newItemInfo.title);
    const onSubmit = (e)=>{
        console.log(e)
        e.preventDefault();
        editTarget({id:newItemInfo.id, text: newText, title:newTitle});
        setNewItemInfo(false);
    }
    const onCancel = () =>{
        setNewItemInfo(false)
    }
    const onChange = (e)=>{
        setNewText(e.target.value);
    }
    const titleChange = (e)=>{
        setNewTitle(e.target.value);
    }
    return (
        <form className="EditTarget-form" onSubmit={onSubmit}>
            <label className="EditTarget-label">Titulo</label>
            <input 
            name="title"
            className="EditTarget-input"
            id="EditTarget-input"
            value={newTitle}
            onChange={titleChange}></input>
            <label className="EditTarget-label">Objetivo</label>
            <textarea
            name="target"
            id="EditTarget-textarea"
            className="EditTarget-textarea"
            value={newText}
            onChange={onChange}
            placeholder="estas editando un Objetivo!"></textarea>
            <div>
                <button type="submit" className="EditTarget-button">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text"> 
                        Hecho
                    </span>
                </button>
                <button type="button" onClick={onCancel}
                className="EditTarget-button">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text"> 
                        Cancelar
                    </span>
                </button>
            </div>
        </form>
    )
}

export { EditTarget };