import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Var } from './Var'

export const GlobalStyle = createGlobalStyle`
    body, header, main, figure, div, form, button, ul, li, a, p, h1, h2, h3, h4, svg, img, input, select, hr{
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
    background: ${Var.primary};
    background: linear-gradient(45deg, ${Var.gray4} 0%, ${Var.gray4} 40%, ${Var.primaryHover} 70%, ${Var.primary} 100% );
`