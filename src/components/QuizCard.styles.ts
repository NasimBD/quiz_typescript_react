import styled from "styled-components";

type ButtonWrapperProps = {
    clicked: boolean,
    correct: boolean,
}

export const Wrapper = styled.div`
    width: 100%;
    max-width: 600px;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 1rem 0.5rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
    border: 2px solid white;

    .question, h5{
        margin-bottom: 1rem;
        font-weight: 400;
        color: rgba(0,0,0,0.8);
        text-align: center;
    }

    .question{
        font-size: 1.2rem;
        line-height: 1.3;
    }
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    margin-bottom: 0.5rem;

    :hover{
        opacity: 0.8;
    }
        
    button{
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        text-shadow: 0px 0px 6px rgba(0,0,0,0.9);
        border: 2px white solid;
        box-shadow: 1px 1px 2px 0 rgba(0,0,0,0.3);
        background: ${({clicked, correct}) => correct ? 'hsl(146, 89%, 37%)' : clicked ? 'red' : 'linear-gradient(90deg, hsl(183, 28%, 69%), hsl(183, 28%, 39%))'};
        color: white;
        user-select: none;
    }
`;
