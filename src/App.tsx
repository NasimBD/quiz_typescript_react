import React, { useState } from 'react';
import { fetchQuestions, QUESTION, DIFFICULTY } from './API';
import { GlobalStyle, Wrapper } from './App.styles';
import { QuizCard } from './components/QuizCard';
import LoadinImage from './images/loading-3.gif';

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QUESTION[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [answersIndex, setAnswersIndex] = useState<number[]>([]);

  if(answersIndex.length === TOTAL_QUESTIONS && !gameOver) {
    setGameOver(true);
  }

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setScore(0);
    setAnswersIndex([]);
    setCurrentQuestionIndex(0);
    const newQuestions = await fetchQuestions('https://opentdb.com/api.php', 10, DIFFICULTY.Medium);
    setQuestions(newQuestions);
    setLoading(false);
  }

  const onAnswerClick = (correctnessProp: boolean, index: number) => {
    setAnswersIndex(prevState => [...prevState, index]);   
    if (correctnessProp) {
      setScore(prevState => ++prevState);
    }
}

  const handleNextClick = () => {
          setCurrentQuestionIndex(prevState => ++prevState);  
  }

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <h1>
        Test your knowledge
      </h1>
          
      {gameOver && answersIndex.length === TOTAL_QUESTIONS && <h2 id="score">Score: {score}</h2>}
      
      {gameOver || answersIndex.length === TOTAL_QUESTIONS ?
      <button type="button" onClick={startQuiz} id="startBtn">start</button> :
      null}

      {loading && <img src={LoadinImage} id="loadingImg" alt="loading..."/>}

      {!loading && !gameOver && (
        <QuizCard
        question={questions[currentQuestionIndex]}
        onAnswerClick={onAnswerClick}
        answersIndex={answersIndex}
        currentQuestionIndex={currentQuestionIndex}
        TOTAL_QUESTIONS={TOTAL_QUESTIONS}
        />
      )}

      
      {!gameOver && answersIndex.length===( currentQuestionIndex + 1) && ( currentQuestionIndex + 1 ) < TOTAL_QUESTIONS && <button type="button" onClick={handleNextClick} id="nextBtn">Next question <span>&#8250;</span></button>}
    </Wrapper>
    </>
  );
}

export default App;
