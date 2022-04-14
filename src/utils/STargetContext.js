import React from "react";
import {useLocalStorage} from './useLocalStorage';

const STargetContext = React.createContext();

function STargetProvider(props){
  const {
      items,
      saveItem,
      loading,
      error,
    } = useLocalStorage("Targets_V1", []);
    const [openModal, setOpenModal] = React.useState(false);
    const [newItemInfo, setNewItemInfo] = React.useState(false);
    const addTarget = (title, text)=>{
      const newTargets = [...items];
      newTargets.push({
          title: title,
          text: text,
          completed: false,
          id: (newTargets[0] ? newTargets[newTargets.length - 1].id + 1 : 0)
        });
      saveItem(newTargets);
    }
    const getIdx = (id, array)  => {
      const idx = array.findIndex(item => item.id == id);
      return idx;
    }
    const deleteTarget = (id) =>{
      const idx = getIdx(id, items);
      const newTargets = [...items];
      newTargets.splice(idx, 1);
      saveItem(newTargets);
    }
    const editTarget = ({id, title, text})=>{
      const idx = getIdx(id, items);
      const newTargets = [...items];
      newTargets[idx].text = text;
      newTargets[idx].title = title;
      saveItem(newTargets);
    }
    const completeTarget = (id)=>{
      const idx = getIdx(id, items);
      const newTargets = [...items];
      newTargets[idx].completed = !newTargets[idx].completed;
      saveItem(newTargets);
    }
    const completedTargets = items.filter(target => !!target.completed).length;
    return (
        <STargetContext.Provider value={{
            completedTargets,
            totalTargets: items.length,
            loading,
            error,
            addTarget,
            items,
            completeTarget,
            deleteTarget,
            openModal,
            setOpenModal,
            editTarget,
            newItemInfo,
            setNewItemInfo,
        }}>
            {props.children}
        </STargetContext.Provider>
    )
}
export { STargetContext, STargetProvider};