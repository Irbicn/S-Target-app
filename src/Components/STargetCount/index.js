import React from "react";
import Styled from "styled-components";
import { STargetContext } from "../../utils/STargetContext";

const Text = Styled.p`
    color: white;
    font-weight: bolder;
    font-size: 2.5rem;
`;
const Div = Styled.div`
    max-width: 280px;
    margin: 0 auto;
    padding: 20px;
    text-align:center;
`;
const Count = Styled.span`
    color: rgb(255,20,20);
    font-weight: bolder;
    font-size: 2.5rem;
`;
const Span = Styled(Text)`
    display: inline;
    margin: 0 20px;
`
function STargetCount(){
    const {completedTargets, totalTargets, loading} = React.useContext(STargetContext);
    return (
        <React.Fragment>
            <Div hidden={totalTargets < 1}>
                <Text>Has completado</Text>
                <Count>
                    {loading && "..."}
                    {!loading && completedTargets}
                </Count><Span>de</Span>
                <Count>
                    {loading && "..."}
                    {!loading && totalTargets}
                </Count>
                <Text>Objetivos</Text>
            </Div>
            <Div hidden={totalTargets > 0}>
                <Text>Aun no agregas Objetivos!</Text>
            </Div>
        </React.Fragment>
    )
}

export {STargetCount};