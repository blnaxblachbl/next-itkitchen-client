import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans Display', sans-serif;
        background-color: #f2f2f2;
    }

    input {
        appearance: none;
        -webkit-appearance: none;
    }

    a {
        text-decoration: none;
    }
    .toast{
        margin: 15px;
        min-width: 200px;
        box-sizing: border-box;
    }
    .hide-scroll-indicator {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
        ::-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
        }
    }
    .number-of-lines-1 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
                line-clamp: 1; 
        -webkit-box-orient: vertical;
    }
    .number-of-lines-2 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
                line-clamp: 2; 
        -webkit-box-orient: vertical;
    }
    .disable-scroll {
        overflow: hidden;
    }
    .enable-scroll {
        overflow: auto;
    }
`
