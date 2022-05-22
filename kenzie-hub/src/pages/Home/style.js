import styled from 'styled-components'
import { Var } from '../../Var'

export const HomeStyled = styled.div`
    width: 100%;
    margin: 0;
    border: none;
    display: flex;
    flex-direction: column;
    hr{
        width: 100%;
        margin: 0;
    }
`

export const HeaderHome = styled.header`
    padding: 25px 23%;
    display: flex;
    justify-content: space-between;
    button{
        padding-left:16px;
        padding-right: 16px;
        font-size: 1.5rem;
    }
    @media screen and (max-width: 720px) {
        padding: 25px 1%;
    }
`

export const SecaoSobre = styled.section`
    padding: 25px 23%;
    display: flex;
    justify-content: space-between;
    h2{
        font-size: 3rem;
        color: ${Var.gray0};
    }
    h3{
        font-size: 3rem;
        color: ${Var.gray1};
    }
    @media screen and (max-width: 720px) {
        padding: 25px 1%;
    }
`

export const SecaoTec = styled.section`
    display: flex;
    flex-direction: column;
`

export const SecaoAdd = styled.section`
    padding: 25px 23%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4{
        color: ${Var.gray0};
        font-size: 2.5rem;
    }
    button{
        padding: 5px 10px;
        font-size: 2rem;
    }
    @media screen and (max-width: 720px) {
        padding: 25px 1%;
    }
`


export const SecaoTecs = styled.section`
    padding: 25px 23%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        background-color: ${Var.gray3};
        border-radius: 4px;
        padding: 22px 18px;
        width: 100%;
        max-height: 322px;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: ${Var.gray3};
            border-radius: 4px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: ${Var.primary};
            border-radius: 4px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: ${Var.primaryHover};
        }
    }
    @media screen and (max-width: 720px) {
        padding: 25px 1%;
    }
`