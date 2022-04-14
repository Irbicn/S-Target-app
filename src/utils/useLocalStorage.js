import React from "react";


function useLocalStorage(name, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [items, setItem] = React.useState(initialValue);
    React.useEffect(()=>{
    setTimeout(()=>{
        
        try{
            let localSotrageItem = localStorage.getItem(name);
            let newTargets;
            if(localSotrageItem){
                newTargets = JSON.parse(localSotrageItem);
            }else{
                localSotrageItem = JSON.stringify(items);
                localStorage.setItem(name, localSotrageItem);
                newTargets = items;
            }
            setItem(newTargets);
            setLoading(false);
        }catch(err){
            setError(err);
        }},1500);
    }, [])
    
    const saveItem = (newItem)=>{
        try{
            const parsedItem = JSON.stringify(newItem);
            localStorage.setItem(name, parsedItem);
            setItem(newItem);
        }catch(err){
            setError(err);
        }
    }
    return {items, saveItem, loading, error};
}
export {useLocalStorage};