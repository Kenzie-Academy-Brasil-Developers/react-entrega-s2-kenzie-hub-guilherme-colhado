import { useNavigate } from "react-router-dom"
import { ButtonStyled } from "../../components/Buttons"
import { IconButton } from "@mui/material"
import Logo from '../../Imgs/Logo.svg'
import { FormularioContainer, LoginStyle } from "./style"
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { useState } from "react"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { kenziehub } from "../../services/api"
import { toast } from "react-toastify"

export const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false);
    const [visibility, setVisibility] = useState(false);

    const formSchema = yup.object().shape({
        email: yup.string().email('Email invalido').required('Este campo é obrigatório'),
        password: yup
        .string()
        .required("Este campo é obrigatorio")
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(formSchema) })

    const onSubmitFuncion = ({email, password}) => {
        const dataPost = {email, password}
        kenziehub.post('/sessions',dataPost)
        .then((res)=>{
            toast.success('Você foi logado com sucesso')
            console.log(res)
            localStorage.setItem('@KenzieHub: Token', res.data.token)
            localStorage.setItem('@KenzieHub: Id', res.data.user.id)
            navigate('/')
        })
        .catch(err=>{
            setError(true)
        })
    }

    return <LoginStyle>
        <img src={Logo} alt="Logo" />
        <FormularioContainer>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmitFuncion)}>
                <label htmlFor="email">Email <span>{errors.email && `- ${errors.email.message}`}</span></label>
                <input type="email" {...register('email')} id="email" />
                <label htmlFor="senha">Senha <span>{errors.password && `- ${errors.password.message}`}</span></label>
                <div>
                    <input type={visibility? 'text' : 'password'} {...register('password')} id="senha" />
                    <IconButton onClick={()=>setVisibility(!visibility)} component='span'>{visibility ? <FaEyeSlash/> : <FaEye/>}</IconButton>
                </div>
                <span>{error && 'Email ou senha incorretas'}</span>
                <ButtonStyled color="primary" hover="primaryHover">Entrar</ButtonStyled>
            </form>
            <p>Ainda não possui uma conta?</p>
            <ButtonStyled onClick={()=>navigate('/registro')} color="gray1" hover="gray2">Cadastre-se</ButtonStyled>
        </FormularioContainer>
    </LoginStyle>
}