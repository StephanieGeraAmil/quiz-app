import React, {useState} from 'react';

import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions, Difficulty, Question, QuestionState } from './API';


const TOTAL_QUESTIONS= 10;
const App=()=> {
  const [loading, setLoading]= useState(false);
  const [questions, setQuestions]= useState<QuestionState[]>([]);
  const [number, setNumber]= useState(0);
  const [userAnswers, setUsersAnswers]= useState([]);
  const [score, setScore]= useState(0);
  const [gameOver, setGameOver]=useState(false);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM));
  const startTrivia = async ()=>{}
  const checkAnswer= (e: React.MouseEvent<HTMLButtonElement>)=>{}
  const nextQuestion= ()=>{}


  return (
          <div className="App">
              <h1>Quiz</h1>
              <button className='start' onClick={startTrivia}>
                Start
              </button>
              <p className="score">Score:</p>
              <p>Loadding next question....</p>
              {/* <QuestionCard questionNr={number +1} 
                    totalQuestions={TOTAL_QUESTIONS} 
                    question={questions[number].question} 
                    answers={questions[number].answers} 
                    userAnswer={userAnswers ? userAnswers[number]: undefined}
                    callback={checkAnswer}/> */}
              <button className="next" onClick={nextQuestion}>
                Next
              </button>
          </div>)
          ;

}

export default App;
