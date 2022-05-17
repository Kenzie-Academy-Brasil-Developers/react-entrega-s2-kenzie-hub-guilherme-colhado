import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Var } from './Var'

export const GlobalStyle = createGlobalStyle`
    body, header, main, figure, div, button, ul, li, a, p, h1, h2, h3, h4, svg, img{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    :root{
        font-size: 8px;
    }
`
export const AppStyle = styled.div`
    min-height: 100vh;
    background: rgb(255,87,127);
    background: linear-gradient(135deg, rgba(255,87,127,1) 0%, rgba(18,18,20,1) 100%);
`