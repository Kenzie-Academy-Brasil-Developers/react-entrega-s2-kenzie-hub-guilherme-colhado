import { useState } from "react";
import { ModalDetalhes } from "../Detalhes";
import { CardStyle } from "./style"

export const CardTech = ({tech, funcao}) => {
    const [modalDetails, setModalDetails] = useState(false);
    const techAtual = tech
    return <>
        <CardStyle onClick={()=>setModalDetails(true)}>
            <p>{tech.title}</p>
            <p>{tech.status}</p>
        </CardStyle>
        <ModalDetalhes modalDetails={modalDetails} funcao={funcao} setModalDetails={setModalDetails} tech={techAtual}/>
    </>
}