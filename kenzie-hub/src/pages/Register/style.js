import styled from "styled-components";
import { Var } from "../../Var";

export const RegistroStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: centere;
    justify-content: center;
    margin: 0 auto;
    width: 320px;
    min-height: 100vh;
    >div:nth-child(1){
        display: flex;
        justify-content: space-between;
        margin-bottom: 38px;
        button{
            padding-left: 10px;
            padding-right: 10px;
        }
    }
    img{
        filter: drop-shadow(4px 4px 2px ${Var.gray4});  
    }
`

export const FormularioContainer = styled.div`
    background-color: ${Var.gray3};
    padding: 42px 22px;
    border-radius: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    h2{
        font-size: 2.25rem;
        color: ${Var.gray0};
        margin-bottom: 25px;
        text-align: center;
    }

    p{
        margin-bottom: 25px;
        font-size: 1.5rem;
        text-align: center;
        color: ${Var.gray1};
    }
    
    label{
        font-size: 1.5rem;
        color: ${Var.gray0};
    }
    input{
        margin-top: 5px;
        padding: 10px 16px;
        margin-bottom: 15px;
        border: none;
        border-radius: 4px;
        outline: none;
        width: 100%;
        color: ${Var.gray0};
    }
    input,
    input:hover, 
    input:focus, 
    input:active{
        background-color: ${Var.gray2};

    }
    input::placeholder{
        color: ${Var.gray5};
    }
    select{
        background-color: ${Var.gray2};
        width: 100%;
        border: none;
        color: ${Var.gray5};
        margin-top: 5px;
        padding: 10px 16px;
        border-radius: 10px;
    }
    button{
        margin-top: 20px;
        width: 100%;
    }
`