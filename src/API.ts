import { convertToString, shuffleArray } from "./functions";

type ANSWER =  {answer: string, correctness: boolean};

export type QUESTION = {
    question: string;
    answers: ANSWER[]
}

export enum DIFFICULTY{
    Easy = "easy",
    Medium = "medium",
    Hard = "hard"
}


export const fetchQuestions = async (url: string, amount: number, difficulty: DIFFICULTY) => {
    const endpoint = `${url}?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const res = await fetch(endpoint);
    const data = await res.json();
    const QUESTIONS: QUESTION[] =  data.results.map((result: any) => {
    const INCORRECT_ARR: ANSWER[] = result.incorrect_answers.map((ans : any) => ({answer : convertToString(ans), correctness: false}));
    return {
    question : convertToString(result.question), 
    answers : shuffleArray([{
        answer: result.correct_answer,
        correctness: true
    }, ...INCORRECT_ARR])
    }
    });
    return QUESTIONS;
}