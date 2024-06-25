"use client";

import React, { useState } from 'react';

const QuizForm = ({ quiz, playFrom, handleNext, handleQuizResize }) => {
  console.log("QuizForm");
  const [questionIdx, setQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const { questions } = quiz;
  const question = questions[questionIdx];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIdx = questionIdx + 1;
    if (nextQuestionIdx < questions.length) {
      setQuestionIdx(nextQuestionIdx);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container" style={{fontSize: "1.5rem"}}>
      {showScore ? (
        <div>
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
          <div >
            <button onClick={() => handleNext(playFrom, score)}>Next</button>
          </div>
        </div>
      ) : (
        <>
          <div className='resize-quiz'>
            <button onClick={() => handleQuizResize(playFrom)}>{"-><-"}</button>
          </div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {questionIdx + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{question.questionText}</div>
          </div>
          <div className="answer-section">
            {question.answerOptions.map(answerOption => (
              <button key={answerOption.id} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.text}
              </button>
            ))}
          </div>
          <div >
            <button onClick={() => {handleNext(playFrom, score)}}>Skip</button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizForm;