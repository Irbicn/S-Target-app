import React from "react";
import styled from "styled-components";

const Div = styled.ul`
    list-style-type: none;
    padding: 20px 0;
    width: fit-content;
    margin: 0 auto;
`
function STargetList(props){
    return (
        <Div>
            {props.children}
        </Div>
    )
}
export { STargetList }