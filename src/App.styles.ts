import styled, {createGlobalStyle} from "styled-components";
import BGImage from './images/sean-oulashin.jpg';

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body, body * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight: 200;
}

body{
    background: url(${BGImage}) center/cover no-repeat;
}


/* ----------------------------- media */
/* ----------------------------- 1 */
@media screen and (max-width:576px){
    html{
      font-size: 13px;
    }
  }
  
  /* ----------------------------- 2 */
  @media screen and (min-width:576px) and (max-width:769px){
    html{
      font-size: 15px;
    }
  }
  /* ----------------------------- 3 */
  @media screen and (min-width:769px){
    html{
      font-size: 16px;
    }
  }
`;


export const Wrapper = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
padding: 0.5rem;

h1, h2{
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: 700;
    background: linear-gradient(to right, hsl(330, 100%, 51%) 45%, hsl(172, 95%, 33%) 55%);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    color: transparent;
    filter: drop-shadow(2px 2px white);
    padding: 1rem;
}

#score{
    animation: zoomIn 1s forwards ease-in-out;
}

@keyframes zoomIn {
    0%{
        transform: scale(1.5);
    }

    100%{
        transform: scale(1);
    }
}

button{
    padding: 0.5rem 0.6rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;
}

#startBtn, #nextBtn{
    font-weight: 700;
    background: linear-gradient(to right, hsl(330, 100%, 97%) 50%, hsl(183, 48%, 79%)) 0 0/200%;
    transition: 0.3s; 
    color: hsl(0, 10%, 30%);
    font-size: 1.4rem;
    letter-spacing: 2px;
    box-shadow: inset -1px -1px 4px 0 rgba(0, 0, 0, 0.6), 0px 0px 4px 1px rgba(0, 0, 0, 0.4);
    padding: 0.8rem 0.9rem;
}

#nextBtn span{
    margin-left: 0.1rem;
    font-weight: 700;
    transition: 0.3s;
}

#startBtn:hover, #nextBtn:hover{
    background-position: 70%
}

#loadingImg{
    width: 4rem;
}

`