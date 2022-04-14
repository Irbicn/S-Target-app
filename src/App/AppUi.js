import React from "react";
import Styled from "styled-components";

import { EditTarget } from "../Components/EditTarget";
import { IncompleteTarget } from "../Components/incompleteTarget";
import { Modal } from "../Components/Modal";
import { STargetAdd } from '../Components/STargetAdd';
import { STargetCount } from "../Components/STargetCount";
import { STargetList } from '../Components/STargetList';
import { STargetTask } from '../Components/STargetTask';
import { STargetContext } from "../utils/STargetContext";
const Loading = Styled.p`
    color: white;
`;
const Error = Styled.p`
    color: white;
`

function AppUi(){
    const {error, loading, items, deleteTarget, completeTarget, openModal, setOpenModal, setDeleteTask, newItemInfo} = React.useContext(STargetContext);
    return (
        <React.Fragment>
            <STargetCount />
            <STargetAdd></STargetAdd>
            <STargetList>
                {loading && <Loading>Cargando...</Loading>}
                {(error && !loading) && <Error>Un error ha ocurrido, porfavor, reinicia la pagina</Error>}
                {items.map( target =>{
                    return (
                    <STargetTask 
                        key={target.id}
                        task={target}
                        completed={target.completed}
                        onComplete = {()=>{completeTarget(target.id)}}
                        onDelete = {deleteTarget}
                        />)
                })}
            </STargetList>
            {(typeof openModal === "number")&& (
                <Modal onCancel={setOpenModal} ><IncompleteTarget target={openModal} onDelete={deleteTarget} onCancel = {()=>{setOpenModal(false)}}/></Modal>
            )}
            {(typeof newItemInfo !== "boolean") && (
                <Modal onCancel={setDeleteTask} >
                    <EditTarget />
                </Modal>
            )}
        </React.Fragment>
    );
}

export {AppUi};