import React, {useState} from 'react';

import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions, Difficulty, QuestionState } from './API';

type AnserObject={
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
const TOTAL_QUESTIONS= 10;
const App=()=> {
  const [loading, setLoading]= useState(false);
  const [questions, setQuestions]= useState<QuestionState[]>([]);
  const [number, setNumber]= useState(0);
  const [userAnswers, setUsersAnswers]= useState<AnserObject[]>([]);
  const [score, setScore]= useState(0);
  const [gameOver, setGameOver]=useState(true);


  const startTrivia = async ()=>{
    setLoading(true);
    setGameOver(false);
    const newQuestions= await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM)
    setQuestions(newQuestions);
    setScore(0);
    setUsersAnswers([]);
    setNumber(0);
    setLoading(false)
  }
  const checkAnswer= (e: React.MouseEvent<HTMLButtonElement>)=>{}
  console.log(questions);
  const nextQuestion= ()=>{}


  return (
          <div className="App">
              <h1>Quiz</h1>
              {gameOver || userAnswers.length===TOTAL_QUESTIONS?
                  <button className='start' onClick={startTrivia}>
                    Start
                  </button>: null
                }
              {!gameOver? <p className="score">`Score: ${score}`</p>:null}
              {loading? <p>Loadding next question....</p>:null}
              {!loading && !gameOver &&questions.length>0 && userAnswers.length!==TOTAL_QUESTIONS ?
              <div>
                 <QuestionCard questionNr={number +1} 
                        totalQuestions={TOTAL_QUESTIONS} 
                        question={questions[number].question} 
                        answers={questions[number].answers} 
                        userAnswer={userAnswers ? userAnswers[number]: undefined}
                        callback={checkAnswer}/> 
                  <button className="next" onClick={nextQuestion}>
                    Next
                  </button>
              </div>
             :null }
             
            
          </div>)
          ;

}

export default App;
