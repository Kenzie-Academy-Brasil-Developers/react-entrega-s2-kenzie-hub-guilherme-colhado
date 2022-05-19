import styled from "styled-components";
import { Var } from "../../Var";

export const LoginStyle = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 320px;
    margin: 0 auto;
    img{
        margin-bottom: 35px;
        filter: drop-shadow(4px 4px 2px ${Var.gray4});  
    }
`
export const FormularioContainer = styled.div`
    background-color: ${Var.gray3};
    padding: 42px 22px;
    border-radius: 5px;
    width: 100%;
    h2{
        font-size: 2.25rem;
        color: ${Var.gray0};
        margin-bottom: 25px;
        text-align: center;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        div{
            display: flex;
            background-color: ${Var.gray2};
            align-items: center;
            border: 1px solid ${Var.gray0};
            outline: ${Var.gray0};
            margin-bottom: 25px;
            span{
                font-size: 3rem;
                height: max-content;
                color: ${Var.gray0};
            }
            input{
                margin: 0;
                border: none;
                outline: none;
            }
        }
    }
    label{
        padding-bottom: 22px;
        font-size: 1.5rem;
        color: ${Var.gray0};
    }
    input{
        padding: 10px 16px;
        margin-bottom: 25px;
        border: 1px solid ${Var.gray0};
        outline: ${Var.gray0};
        width: 100%;
        color: ${Var.gray0};
    }
    input,
    input:hover, 
    input:focus, 
    input:active{
        box-shadow: 0 0 0 30px ${Var.gray2} inset;
    }
    p{
        font-size: 1.5rem;
        margin: 30px 0;
        color: ${Var.gray1};
        text-align: center;
    }
    button{
        width: 100%;
    }
`