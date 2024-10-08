"use client";

import QuizForm from "@/components/atoms/QuizForm/QuizForm";
import VideoPlayer from "@/components/atoms/VideoPlayer/VideoPlayer";
import Assessment from "@/components/organisms/Assessment/Assessment";
import { produce } from "immer";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";

const Course = (props) => {

  const [course, setCourse] = useState(props.course);

  const [state, setState] = useState({
    displayTest: false,
    displayVideo: true,
    displayQuiz: false,
    lastSrcList: course.lessons[0].contents[0].srcList,
    playFrom: 0,
    lessonIdx: 0,
    contentIdx: 0
  });

  const videoRef = useRef(null);

  const { displayTest, displayVideo, displayQuiz, playFrom, lessonIdx, contentIdx } = state;
  const { lessons } = course;
  const { contents } = lessons[lessonIdx];
  const lesson = lessons[lessonIdx];
  const content = contents[contentIdx];

  let courseCompletion = useMemo(() => {
    let totalContent = 0;
    let completedContent = 0;
    lessons.forEach(lesson => lesson.contents.forEach(content => {
      totalContent++;
      if (content.isFinished) completedContent++;
    }));
    return (completedContent / totalContent * 100).toFixed(1);
  }, [course])

  const handleNext = (playFrom = 0, score = 0) => {
    // Note: Using immer
    setCourse(produce(prevState => {
      prevState.lessons[lessonIdx].contents[contentIdx].isFinished = true;
      if (contents[contentIdx].type === 'quiz') {
        prevState.lessons[lessonIdx].contents[contentIdx].score = score;
      }
    }))

    // If there is remaining content
    if (contentIdx < contents.length - 1) {

      // If next content is video
      if (contents[contentIdx + 1].type === 'video') {
        setState(prevState => ({
          ...prevState,
          displayVideo: true,
          displayQuiz: false,
          lastSrcList: course.lessons[lessonIdx].contents[contentIdx].srcList,
          contentIdx: contentIdx + 1,
          playFrom: 0
        }))
      } else if (contents[contentIdx + 1].type === 'quiz') {
        setState(prevState => ({
          ...prevState,
          displayVideo: false,
          displayQuiz: true,
          lastSrcList: course.lessons[lessonIdx].contents[contentIdx].srcList,
          contentIdx: contentIdx + 1,
          playFrom: playFrom
        }))
      }

      // If there is remaining lesson
    } else if (lessonIdx < lessons.length - 1) {
      setState(prevState => ({
        ...prevState,
        displayVideo: true,
        displayQuiz: false,
        lastSrcList: {},
        lessonIdx: lessonIdx + 1,
        contentIdx: 0,
        playFrom: 0
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        displayTest: true,
        displayVideo: false,
        displayQuiz: false,
        lastSrcList: {},
        lessonIdx: 0,
        contentIdx: 0,
        playFrom: 0
      }))
    }
  }

  const handleQuizResize = useCallback(() => {
    if (displayVideo) {
      videoRef.current.pause();
    }
    setState(prevState => ({
      ...prevState,
      displayVideo: !prevState.displayVideo,
      playFrom: playFrom
    }))
  }, []);

  const handleNavClick = (lessonIdx, contentIdx, test = false) => {
    if (test) {
     setState(prevState => ({
       ...prevState,
       displayTest: true,
       displayVideo: false,
       displayQuiz: false,
       lastSrcList: course.lessons[lessonIdx].contents[0].srcList,
       playFrom: 0,
       lessonIdx: lessonIdx,
       contentIdx: contentIdx,
     })) 
    } else {
      setState(prevState => ({
        ...prevState,
        displayTest: false,
        displayVideo: lessons[lessonIdx].contents[contentIdx].type === 'video',
        displayQuiz: lessons[lessonIdx].contents[contentIdx].type === 'quiz',
        lastSrcList: lessons[lessonIdx].contents[0].srcList,
        playFrom: 0,
        lessonIdx: lessonIdx,
        contentIdx: contentIdx,
      }))
    }
  }

  const handleBeginTest = () => {
    setCourse(produce(prevState => {
      prevState.test.isAttempted = true;
    }))
  }

  const handleFinishTest = () => {
    setCourse(produce(prevState => {
      prevState.test.isFinished = true;
    }))
    setState(prevState => ({
      ...prevState,
      displayTest: false,
      displayVideo: true,
      displayQuiz: false,
      lastSrcList: course.lessons[0].contents[0].srcList,
      playFrom: 0,
      lessonIdx: 0,
      contentIdx: 0
    }))
  }

  let videoPlayer = useMemo(() => {
    return <VideoPlayer
      key={lessonIdx + "" + contentIdx}
      videoRef={videoRef}
      displayQuiz={displayQuiz} playFrom={playFrom}
      srcList={displayQuiz ? state.lastSrcList : content.srcList}
      handleNext={handleNext}
    />
  }, [state.lastSrcList, lessonIdx]);


  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
      <aside>
        <div>
          <Link href={'/'} style={{ color: '#009BD8' }}>{"< Back to All Courses"}</Link>
        </div>
        <div>
          <h1>Course: {course.title}</h1>
          <h4>{course.subTitle}</h4>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div>
            <div>
              <div style={{ display: displayVideo ? 'block' : 'none' }}>
                {videoPlayer}
              </div>
              {displayQuiz && (
                // <QuizForm quiz={content} lessonTitle={lesson.title} playFrom={playFrom} handleNext={handleNext} handleQuizResize={handleQuizResize} />
                <Assessment
                  assessment={content}
                  lessonTitle={lesson.title}
                  playFrom={playFrom}
                  handleNext={handleNext}
                  handleQuizResize={handleQuizResize}
                />
              )}
              {displayTest && (
                <Assessment
                  assessment={course.test}
                  lessonTitle={course.title}
                  playFrom={playFrom}
                  handleNext={handleNext}
                  handleQuizResize={handleQuizResize}
                  handleBeginTest={handleBeginTest}
                  handleFinishTest={handleFinishTest}
                />
              )}
            </div>
          </div>
        </div>
      </aside>
      <aside>
        {
          <>
            <h2 style={{ display: 'inline-block' }}>Completion: {courseCompletion}%</h2>
            <input type="range" min="0" max="100" step="0.01" readOnly value={courseCompletion} />
            <ul>
              {lessons.map((lesson, i) => {
                return (
                  <li key={lesson.id}>
                    <h2 style={{ backgroundColor: `${lesson.isFinished ? '#009BD8' : 'none'}` }}>{i + 1}. {lesson.title}</h2>
                    <ul>
                      {lesson.contents.map((content, j) => {
                        return (
                          <li key={lesson.id + "" + content.id} style={{ color: `${(i === lessonIdx && j === contentIdx) ? '#009BD8' : 'unset'}` }}>
                            <a onClick={() => handleNavClick(i, j)}>
                              <h3>
                                {content.type} {content.isFinished ? `✅ ${content.type === 'quiz' ? (content.score + "/" + content.questions.length) : ""}` : ""}
                              </h3>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                    <button onClick={() => handleNavClick(i, lessons[i].contents.length - 1)}>{lessons[i].contents[lessons[i].contents.length - 1].isFinished ? 'Retake Quiz' : 'Take Quiz'}</button>
                  </li>
                )
              })}
              <li key={course.test.id}>
                <h2>Test</h2>
                <button onClick={() => handleNavClick(lessonIdx, 0, true)}>{course.test.isAttempted ? 'Retake Test' : 'Take Test'}</button>
              </li>
            </ul>
          </>
        }
      </aside>
    </div>
  )
}

export default Course;