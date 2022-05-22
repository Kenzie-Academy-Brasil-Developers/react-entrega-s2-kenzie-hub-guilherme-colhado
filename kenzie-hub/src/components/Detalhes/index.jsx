import { toast } from "react-toastify"
import { kenziehub } from '../../services/api'
import { FormCadastro, Modal, Title } from './style'
import { ButtonStyled } from '../Buttons'
import { useState } from 'react'

export const ModalDetalhes = ({modalDetails,setModalDetails,tech, funcao}) => {
    
    const [status, setStatus] = useState(tech.status); 

    const onSubmitFunction = () => {
        kenziehub.put(
            `/users/techs/${tech.id}`, 
            {status: `${status}`},
            {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('@KenzieHub: Token')}`
                }                               
            }
        )
        .then(_=>{
            toast.success('Tecnologia atualizada')
            funcao()
            setModalDetails(false)
        })
        .catch(_=>toast.error('Não possivel atualizar a tecnologia'))
    } 

    const excluir = () => {
        kenziehub.delete(
            `/users/techs/${tech.id}`,
            {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('@KenzieHub: Token')}`
                }                               
            }
        )
        .then(_=>{
            toast.success('Tecnologia deletada')
            funcao()
            setModalDetails(false)
        })
        .catch(_=>toast.error('Não possivel deletar a tecnologia'))
    }

    return modalDetails && <Modal>
        <Title>
            <p>Cadastro</p>
            <button onClick={()=>setModalDetails(false)}>X</button>
        </Title>
        <FormCadastro>
            <label htmlFor="title">Nome:</label>
            <input type="text" disabled value={tech.title} id="title" />
            <label htmlFor="status">Selecionar Status:</label>
            <select name="status" id="status" defaultValue={status} onChange={e=>setStatus(e.target.value)}>               
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediario">Intermediario</option>
                <option value="Avançado">Avançado</option>
            </select>
            <div>
                <ButtonStyled color="primary" type="button" onClick={onSubmitFunction} hover="primaryHover">Salvar alterações</ButtonStyled>
                <ButtonStyled color="gray1" type="button" onClick={excluir} hover="gray2">Excluir</ButtonStyled>
            </div>
        </FormCadastro>
    </Modal>
}