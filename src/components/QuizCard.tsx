import React from 'react'
import { QUESTION } from '../API';
import { ButtonWrapper, Wrapper } from './QuizCard.styles';

type Props = {
    question: QUESTION,
    onAnswerClick: (correctness: boolean, index: number) => void,
    answersIndex: number[],
    currentQuestionIndex: number,
    TOTAL_QUESTIONS: number
};

export const QuizCard: React.FC<Props> = ({question , onAnswerClick, answersIndex, currentQuestionIndex, TOTAL_QUESTIONS}) => {
    const handleAnswerClick = (correctnessProp: boolean, index: number) => {
        onAnswerClick(correctnessProp, index);
    }

    return (
    <Wrapper>
        <h5>Question {currentQuestionIndex + 1} / {TOTAL_QUESTIONS}</h5>
        <p className="question">
            {question.question}
        </p>
        <div className="answers">
            {
                question.answers.map((answer, indx) => 
                <ButtonWrapper
                key={indx}
                clicked={(typeof answersIndex[currentQuestionIndex] !== 'undefined') ? answersIndex[currentQuestionIndex]===indx : false}
                correct={answer.correctness}>
                    <button 
                    type="button"
                    onClick={() => handleAnswerClick(answer.correctness, indx)}
                    disabled={answersIndex.length===( currentQuestionIndex + 1 )}
                    >{answer.answer}
                    </button>
                </ButtonWrapper>
                )}       
        </div>
    </Wrapper>
    )
}
