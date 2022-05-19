import styled from 'styled-components'
import { Var } from '../../Var'

export const ButtonStyled = styled.button`
    background-color: ${(props=> Var[props.color])};
    color: ${Var.gray0};
    padding: 10px 0;
    border: 1px solid ${(props=> Var[props.color])};
    border-radius: 4px;
    cursor: pointer;
    transition: all .5s ease-in;
    :hover{
        background-color: ${(props=> Var[props.hover])};
    }
`