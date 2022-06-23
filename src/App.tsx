import React, {useState} from 'react';
import {GlobalStyle, Wrapper}  from "./App.styles"

import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions, Difficulty, QuestionState } from './API';

export type AnswerObject={
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
  const [userAnswers, setUsersAnswers]= useState<AnswerObject[]>([]);
  const [score, setScore]= useState(0);
  const [gameOver, setGameOver]=useState(true);
  console.log(userAnswers);

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
  const checkAnswer= (e: React.MouseEvent<HTMLButtonElement>)=>{
    if(!gameOver){
      const answer= e.currentTarget.value;
      const correct = questions[number].correct_answer==answer;
      if(correct) setScore(prev=>prev +1)
      const answerObject={
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUsersAnswers(prev=>[...prev,answerObject]);
    }
    
  }


  const nextQuestion= ()=>{
    if(number+1<TOTAL_QUESTIONS){
      setNumber(prev=>prev+1);
    }else{
      setGameOver(true);
    }
  }


  return (
    <>
    <GlobalStyle/>
          <Wrapper>
              <h1>Quiz</h1>
              {gameOver || userAnswers.length===TOTAL_QUESTIONS?
                  <button className='start' onClick={startTrivia}>
                    Start
                  </button>: null
                }
              
              {loading? <p>Loadding next question....</p>:null}
              {!loading && !gameOver &&questions.length>0 && userAnswers.length!==TOTAL_QUESTIONS ?
          
                <QuestionCard questionNr={number +1} 
                      totalQuestions={TOTAL_QUESTIONS} 
                      question={questions[number].question} 
                      answers={questions[number].answers} 
                      userAnswer={userAnswers ? userAnswers[number]: undefined}
                      callback={checkAnswer}/> 

               :null }
              {!loading && !gameOver &&questions.length>0 && userAnswers.length!== TOTAL_QUESTIONS?
          
                  <button className="next" onClick={nextQuestion}>
                    Next
                  </button>

              :null}
              {!loading && !gameOver &&questions.length>0 && userAnswers.length!== TOTAL_QUESTIONS+1?
                <p className="score">Score: {score}</p>
              :null}
           
             
            
          </Wrapper>
          
          </>)
          ;

}

export default App;
