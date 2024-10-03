"use client";

import React, { useEffect, useMemo, useState } from 'react';
import useStyles from './style';

const QuizForm = ({ lessonTitle, quiz, playFrom, handleNext, handleQuizResize }) => {

  const [state, setState] = useState({
    questionIdx: 0,
    score: 0,
    revealAnswer: false,
    selectedOptionIds: [],
  })
console.log('quiz')
  useEffect(() => {
    setState({
      questionIdx: 0,
      score: 0,
      revealAnswer: false,
      selectedOptionIds: [],
    })
  }, [quiz])

  const { questionIdx, score, revealAnswer, selectedOptionIds } = state;

  const { questions } = quiz;
  const question = questions[questionIdx];

  const classes = useStyles();

  let numOfQuestions = useMemo(() => {
    return questions.length;
  }, [questionIdx]);

  const handleNextQuestionClick = () => {
    const nextQuestionIdx = questionIdx + 1;
    if (nextQuestionIdx < numOfQuestions) {
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
      let accumulatedScore = 0;
      let tempSelectedOptionIds = [...state.selectedOptionIds, optionId];
      let division = 1 / correctOptionIds.length;
      tempSelectedOptionIds.forEach((selectedOptionId) => {
        if (correctOptionIds.includes(selectedOptionId)) {
          accumulatedScore += division;
        }
      });
      setState(prevState => ({
        ...prevState,
        revealAnswer: true,
        score: prevState.score + accumulatedScore,
        selectedOptionIds: [...state.selectedOptionIds, optionId]
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        selectedOptionIds: [...state.selectedOptionIds, optionId]
      }));
    }
  }

  return (
    <div className={classes.QuizForm}>
      <>
        <div>
          <button onClick={() => handleQuizResize(playFrom)}>{"><"}</button>
        </div>
        <div style={{ fontSize: "1.5rem" }}>
          <div>
            <p>Quiz <span>(Questions {questionIdx + 1}/{numOfQuestions})</span></p>
            <h3>{lessonTitle}</h3>
          </div>
          <div className="question-text">{question.questionText}</div>
        </div>
        <div>
          {question.answerOptions.map((answerOption, i) => {
            let key = quiz.id.toString() + questionIdx.toString() + answerOption.id.toString();
            let bgColor = revealAnswer
              ? (
                selectedOptionIds.includes(answerOption.id)
                  ? (correctOptionIds.includes(answerOption.id) ? "green" : "red")
                  : "none") : "none";
            let borderColor = revealAnswer
              ? (
                !selectedOptionIds.includes(answerOption.id)
                  ? (correctOptionIds.includes(answerOption.id) ? "5px solid green" : "2px solid grey")
                  : "2px solid grey") : selectedOptionIds.includes(answerOption.id) ? "5px solid blue" : "2px solid grey";
            return (
              <div key={key}>
                <button
                  style={{ backgroundColor: bgColor, border: borderColor }}
                  // key={key}
                  onClick={() => handleAnswerClick(answerOption.id)}
                >
                  {i + 1}. {answerOption.text}
                </button>
                {revealAnswer && answerOption.isCorrect && <p>{answerOption.desc}</p>}
              </div>
            )
          })}
        </div>
        <div style={{ marginTop: "1rem" }}>
          {questionIdx < numOfQuestions - 1 && <button onClick={() => handleNextQuestionClick()}>Next question</button>}
          {(questionIdx >= numOfQuestions - 1 && revealAnswer)
            ? <button onClick={() => { handleNext(playFrom, score) }}>Go to next lesson</button>
            : <a onClick={() => { handleNext(playFrom, score) }}>Skip to next lesson</a>
          }
        </div>
      </>
    </div>
  );
};

export default QuizForm;