import styled from 'styled-components'
import { Var } from '../../Var'

export const Modal = styled.div`
    background-color: #000000bb;
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
`

export const Title = styled.div`
    padding: 12px 15px;
    border-radius: 10px 10px 0 0;
    display: flex;
    width: 320px;
    justify-content: space-between;
    align-items: center;
    background-color: ${Var.gray2};
    p{
        color: ${Var.gray0};
        font-size: 1.75rem;
    }
    button{
        background-color: transparent;
        color: ${Var.gray1};
        border: none;
        cursor: pointer;
    }
`

export const FormCadastro = styled.form`
    padding: 0 17px 30px;
    display: flex;
    flex-direction: column;
    background-color: ${Var.gray3};
    border-radius: 0 0 10px 10px;
    width: 320px;
    label{
        padding: 22px 0;
        font-size: 1.5rem;
        color: ${Var.gray0};
    }
    input{
        border: 1px solid ${Var.gray0};
        color: ${Var.gray0};
        background-color: ${Var.gray2} ;
        border-radius: 4px;
        padding: 10px 16px;
    }
    input::placeholder{
        color: ${Var.gray1};
    }
    select{
        border: 1px solid ${Var.gray0};
        color: ${Var.gray1};
        background-color: ${Var.gray2};   
        border-radius: 4px;
        margin-bottom: 20px;
        padding: 10px 16px;
    }
`