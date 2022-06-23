import styled, {createGlobalStyle} from 'styled-components';
import quiz from './images/quiz.jpg';

export const GlobalStyle= createGlobalStyle`
    html{
        height:100%;

    }
    body {
        background-image: url(${quiz});
        background-size: cover;
        margin:0
        padding:0 20px;
        display:flex;
        justify-content: center;


    }
    *{
        box-sizing:border-box;
        font-family: 'Catamaran": sans-serif;

    }

`;

export const Wrapper = styled.div`

    display:flex;
    flex-direction:column;
    align-items: center;

    .p{
        color:#aaa;
    }
    .score {
        color:black;
        font-size: 2rem;
        margin:0;
    }
    h1{
        font-family: Fascinate Inline. 'sans-serif';
        font-size: 70px;
        margin 20px;
        text-align: center;

    }
    .start, .next {
        
       
        box-shadow: 0px 5-x 10px rgba(0,0,0,0.25);
        border-radius: 15px;
        border: 1px solid #aaa;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;

    }
    .start {
        max-width:200px;
    }

`;