"use client";

import QuizForm from "@/components/atoms/QuizForm/QuizForm";
import VideoPlayer from "@/components/atoms/VideoPlayer/VideoPlayer";
import { produce } from "immer";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

const Course = ( props) => {

  const [course, setCourse] = useState(props.course);

  const [state, setState] = useState({
    displayVideo: true,
    displayQuiz: false,
    lastSrcList: course.lessons[0].contents[0].srcList,
    videoLang: 'en',
    playFrom: 0,
    lessonIdx: 0,
    contentIdx: 0
  });

  const { displayVideo, displayQuiz, videoLang, playFrom, lessonIdx, contentIdx } = state;
  const { lessons } = course;
  const { contents } = lessons[lessonIdx];
  const lesson = lessons[lessonIdx];
  const content = contents[contentIdx];

  let courseCompletion = useMemo(() => {
    let totalContent = 0;
    let completedContent = 0;
    course.lessons.forEach(lesson => lesson.contents.forEach(content => {
      totalContent++;
      if (content.isFinished) completedContent++;
    }));
    return (completedContent / totalContent * 100).toFixed(1);
  }, [course])

  // console.log(playFrom, videoLang);
  // console.log('contentIdx, lessonIdx', contentIdx, lessonIdx);
  // console.log('state.contentIdx, state.lessonIdx', state.contentIdx, state.lessonIdx);

  const handleNext = (playFrom, score) => {
    // Note: Using immer
    setCourse(produce(prevState => {
      prevState.lessons[lessonIdx].contents[contentIdx].isFinished = true;
      if (contents[contentIdx].type === 'quiz') {
        console.log('score', score);
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
      alert('You have completed the course!');
    }
  }

  const handleLangChange = useCallback((lang, playFrom) => {
    setState(prevState => ({
      ...prevState,
      videoLang: lang,
      playFrom: playFrom
    }))
  }, []);

  const handleQuizResize = useCallback((playFrom) => {
    setState(prevState => ({
      ...prevState,
      displayVideo: !prevState.displayVideo,
      playFrom: playFrom
    }))
  }, []);

  const handleNavClick = (lessonIdx, contentIdx) => {
    console.log('handleNavClick', lessonIdx, contentIdx);
    setState(prevState => ({
      ...prevState,
      displayVideo: course.lessons[lessonIdx].contents[contentIdx].type === 'video',
      displayQuiz: course.lessons[lessonIdx].contents[contentIdx].type === 'quiz',
      lastSrcList: course.lessons[lessonIdx].contents[0].srcList,
      playFrom: 0,
      lessonIdx: lessonIdx,
      contentIdx: contentIdx,
    }))
  }

  let videoPlayer = useMemo(() => {
    return <VideoPlayer displayQuiz={displayQuiz} playFrom={playFrom} videoLang={videoLang} srcList={displayQuiz ? state.lastSrcList : content.srcList} handleNext={handleNext} handleLangChange={handleLangChange} />
  }, [videoLang, state.lastSrcList]);

  // console.log(course);

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
          {/* <h3>Lesson {lesson.id}: {lesson.title}</h3> */}
          <div>
            {/* <h2>{lesson.id}.{content.id}. {content.type} {displayVideo && !displayQuiz && `(${videoLang})`} {content.isFinished ? "✅" : ""}</h2> */}
            <div>
              <div style={{ display: displayVideo ? 'block' : 'none' }}>
                {/* <VideoPlayer displayQuiz={displayQuiz} playFrom={playFrom} videoLang={videoLang} srcList={displayQuiz ? state.lastSrcList : content.srcList} handleNext={handleNext} handleLangChange={handleLangChange} /> */}
                {videoPlayer}
              </div>
              {displayQuiz && (
                // <h1>Quiz</h1>
                <QuizForm quiz={content} lessonTitle={lesson.title} playFrom={playFrom} handleNext={handleNext} handleQuizResize={handleQuizResize} />
              )}
            </div>
          </div>
        </div>
      </aside>
      <aside>
        {
          <>
            <h2 style={{ display: 'inline-block' }}>Completion: {courseCompletion}%</h2>
            <input type="range" min="0" max="100" step="0.01" value={courseCompletion} />
            <ul>
              {lessons.map((lesson, i) => {
                return (
                  <li key={lesson.id}>
                    <h2 style={{ backgroundColor: `${lesson.isFinished ? '#009BD8' : 'none'}` }}>{lesson.id}. {lesson.title}</h2>
                    <ul>
                      {lesson.contents.map((content, j) => {
                        return (
                          <li key={content.id} style={{ color: `${(i === lessonIdx && j === contentIdx) ? '#009BD8' : 'unset'}` }}>
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
            </ul>
          </>
        }
      </aside>
    </div>
  )
}

export default Course;