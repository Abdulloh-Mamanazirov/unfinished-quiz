import { createContext, useReducer } from "react";
import questions from "../data/questions";
import shuffleAnswers from '../Hooks/shuffleAnswers'

const question = questions[1];
console.log(question);
const initialState = {
  question,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount:0,
  answers: shuffleAnswers(question.questions[0]),
};

const reducer = (state, action) => {
  console.log(state.question, action);
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.question.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      return {
        ...state,
        currentQuestionIndex,
        showResults,
      };
    }
    case "RESTART":{
      return initialState
    }
    default : return state
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
