"use client";

import React, { useMemo, useState } from 'react';

const QuizForm = ({ lessonTitle, quiz, playFrom, handleNext, handleQuizResize }) => {

  const [state, setState] = useState({
    questionIdx: 0,
    score: 0,
    revealAnswer: false,
    selectedOptionIds: [],
  })

  const { questionIdx, score, revealAnswer, selectedOptionIds } = state;

  const { questions } = quiz;
  const question = questions[questionIdx];

  const handleNextQuestionClick = () => {
    const nextQuestionIdx = questionIdx + 1;
    if (nextQuestionIdx < questions.length) {
      setState(prevState => ({
        ...prevState,
        questionIdx: nextQuestionIdx,
        revealAnswer: false,
        selectedOptionIds: [],
      }));
    }
  };

  const correctOptionIds = useMemo(() => {
    return question.answerOptions
      .filter((answerOption) => answerOption.isCorrect)
      .map((answerOption) => answerOption.id);
  }, [questionIdx]);

  const handleAnswerClick = (optionId) => {
    if (state.revealAnswer) return;
    if (selectedOptionIds.includes(optionId)) {
      setState(prevState => ({
        ...prevState,
        selectedOptionIds: prevState.selectedOptionIds.filter(id => id !== optionId)
      }))
    } else if (correctOptionIds.length === selectedOptionIds.length + 1) {
      let score = 0;
      let division = 1 / correctOptionIds.length;
      selectedOptionIds.forEach((selectedOptionId) => {
        if (correctOptionIds.includes(selectedOptionId)) {
          score += division;
        }
      });
      setState(prevState => ({
        ...prevState,
        revealAnswer: true,
        score: score,
        selectedOptionIds: [...state.selectedOptionIds, optionId]
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        selectedOptionIds: [...state.selectedOptionIds, optionId]
      }));
    }
  }

  console.log(state, correctOptionIds);

  return (
    <div >
      <>
        <div>
          <button onClick={() => handleQuizResize(playFrom)}>{"><"}</button>
        </div>
        <div style={{ fontSize: "1.5rem" }}>
          <div>
            <p>Quiz <span>(Questions {questionIdx + 1}/{questions.length})</span></p>
            <h3>{lessonTitle}</h3>
          </div>
          <div className="question-text">{question.questionText}</div>
        </div>
        <div>
          {question.answerOptions.map((answerOption, i) => (
            <button
              style={{
                backgroundColor: `${revealAnswer
                  ? (
                    selectedOptionIds.includes(answerOption.id)
                      ? (correctOptionIds.includes(answerOption.id) ? "green" : "red")
                      : "none") : "none"}`,
                border: `${revealAnswer
                  ? (
                    !selectedOptionIds.includes(answerOption.id)
                      ? (correctOptionIds.includes(answerOption.id) ? "5px solid green" : "2px solid grey")
                      : "2px solid grey") : selectedOptionIds.includes(answerOption.id) ? "5px solid blue" : "2px solid grey"}`,
              }}
              key={answerOption.id}
              onClick={() => handleAnswerClick(answerOption.id)}
            >
              {i + 1}. {answerOption.text}
            </button>
          ))}
        </div>
        <div style={{ marginTop: "1rem" }}>
          {questionIdx + 1 < quiz.questions.length && <button onClick={() => handleNextQuestionClick()}>Next question</button>}
          <a onClick={() => { handleNext(playFrom, score) }}>Skip to next lesson</a>
        </div>
      </>
    </div>
  );
};

export default QuizForm;