import { useNavigate } from "react-router-dom"
import { FormularioContainer, RegistroStyle } from "./style"
import Logo from '../../Imgs/LogoPequeno.svg'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { kenziehub } from '../../services/api'
import { ButtonStyled } from "../../components/Buttons"
import { toast } from 'react-toastify'

export const Registro = () => {
    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        name: yup.string().required('Este campo é obrigatório'),
        email: yup.string().email('Email invalido').required('Este campo é obrigatório'),
        password: yup
        .string()
        .required("Este campo é obrigatorio")
        .matches("^(?=.*[A-Z])", "A sua senha deve conter 1 letra Maiuscula")
        .matches("^(?=.*[a-z])", "A sua senha deve conter 1 letra minuscula")
        .matches("^(?=.*[0-9])", "A sua senha deve conter 1 numero")
        .matches("^.{6,}$", "A sua senha deve conter seis caracteres"),
        repeatPassword: yup
        .string()
        .required("Este campo é obrigatorio")
        .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
        course_module: yup.string()
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(formSchema) })

    const onSubmitFuncion = ({email, password, name, course_module}) => {
        const dataPost = {email, password, name, course_module, bio: 'Pimba', contact: 'www.google.com'}
        kenziehub.post('/users',dataPost)
        .then((_)=>{
            toast.success('Você foi cadastrado com sucesso')
            navigate('/login')
        })
        .catch(err=>{
            toast.error('Houve um erro ao tentar cadastra-lo')
            console.log(err)
        })
    }

    console.log(errors)

    return <RegistroStyle>
        <div>
            <img src={Logo} alt="KenzieHub" />
            <ButtonStyled color='gray3' onClick={()=>navigate('/login')} hover='gray4'>Voltar</ButtonStyled>
        </div>
        <FormularioContainer>
            <h2>Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa</p>
            <form onSubmit={handleSubmit(onSubmitFuncion)}>
                <label htmlFor="nome">Nome <span>{errors.name && `- ${errors.name.message}`}</span></label>
                <input type="text" {...register('name')} id="nome" placeholder="Digite aqui seu nome"/>
                <label htmlFor="email">Email <span>{errors.email && `- ${errors.email.message}`}</span></label>
                <input type="text" {...register('email')} id="email" placeholder="Digite aqui seu email"/>
                <label htmlFor="senha">Senha <span>{errors.password && `- ${errors.password.message}`}</span></label>
                <input type="password" {...register('password')} id="senha" placeholder="Digite aqui sua senha"/>
                <label htmlFor="repetir">Confirmar Senha <span>{errors.repeatPassword && `- ${errors.repeatPassword.message}`}</span></label>
                <input type="password" {...register('repeatPassword')} id="repetir" placeholder="Digite novamente sua senha"/>
                <label htmlFor="selecionar">Selecionar Módulo</label>
                <select id="selecionar" {...register('course_module')}>
                    <option value="Primeiro Módulo (Front-End Basico)">Primeiro Módulo</option>
                    <option value="Segundo Módulo (Front-End Avançado)">Segundo Módulo</option>
                    <option value="Terceiro Módulo (Back-End Basico)">Terceiro Módulo</option>
                    <option value="Quarto Módulo (Back-End Avançado)">Quarto Módulo</option>
                </select>
                <ButtonStyled color="primary" type="submit" hover="primaryHover">Cadastrar</ButtonStyled>
            </form>
        </FormularioContainer>
    </RegistroStyle>
}