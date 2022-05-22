import { Modal, Title, FormCadastro } from "./style.js"
import { ButtonStyled } from '../Buttons/index'
import { kenziehub } from '../../services/api'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"

export const ModalCadastrar = ({modalCadastro,setModalCadastro, funcao}) => {
    
    const formSchema = yup.object().shape({
        title: yup.string().required('Este campo é obrigatório'),
        status: yup
        .string()
        .required("Este campo é obrigatorio")
    })

    const {
        register,
        handleSubmit,
    } = useForm({ resolver: yupResolver(formSchema) })

    const onSubmitFunction = (data) => {
        kenziehub.post('/users/techs', 
        data,
        {headers:{Authorization:`Bearer ${localStorage.getItem('@KenzieHub: Token')}`}})
        .then(_=>{
            toast.success('Tecnologia cadastrada')
            funcao()
            setModalCadastro(false)
        })
        .catch(_=>toast.error('Não possivel cadastrar a tecnologia'))
    } 

    return modalCadastro && <Modal>
        <Title>
            <p>Cadastro</p>
            <button onClick={()=>setModalCadastro(false)}>X</button>
        </Title>
        <FormCadastro onSubmit={handleSubmit(onSubmitFunction)}>
            <label htmlFor="title">Nome:</label>
            <input type="text" placeholder="Nova tecnologia" {...register("title")} id="title" />
            <label htmlFor="status">Selecionar Status:</label>
            <select name="status" id="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediario">Intermediario</option>
                <option value="Avançado">Avançado</option>
            </select>
            <ButtonStyled color="primary" type="submit" hover="primaryHover">Cadastrar Tecnologia</ButtonStyled>
        </FormCadastro>
    </Modal>
}