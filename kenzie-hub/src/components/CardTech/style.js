import styled from "styled-components";
import { Var } from "../../Var";

export const CardStyle = styled.li`
    background-color: ${Var.gray4};
    font-size: 2.3rem;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: all .25s ease-in;
    :not(:last-child){
        margin-bottom: 16px;
    }
    p:nth-child(1){
        color: ${Var.gray0};
    }
    p:nth-child(2){
        color: ${Var.gray1};
    }
    :hover{
        background-color: ${Var.gray2};
        transform: scale(1.02);
        p:nth-child(2){
            color: ${Var.gray0};
        }
    }

`