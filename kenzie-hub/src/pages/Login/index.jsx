import { useNavigate } from "react-router-dom"
import { ButtonStyled } from "../../components/Buttons"
import { IconButton } from "@mui/material"
import Logo from '../../Imgs/Logo.svg'
import { FormularioContainer, LoginStyle } from "./style"
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { useState } from "react"

export const Login = () => {
    const navigate = useNavigate()
    const [visibility, setVisibility] = useState(false);
    return <LoginStyle>
        <img src={Logo} alt="Logo" />
        <FormularioContainer>
            <h2>Login</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="senha">Senha</label>
                <div>
                    <input type={visibility? 'text' : 'password'} id="senha" />
                    <IconButton onClick={()=>setVisibility(!visibility)} component='span'>{visibility ? <FaEyeSlash/> : <FaEye/>}</IconButton>
                </div>
                <ButtonStyled color="primary" hover="primaryHover">Entrar</ButtonStyled>
            </form>
            <p>Ainda não possui uma conta?</p>
            <ButtonStyled onClick={()=>navigate('/registro')} color="gray1" hover="gray2">Cadastre-se</ButtonStyled>
        </FormularioContainer>
    </LoginStyle>
}