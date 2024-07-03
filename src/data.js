export const COURSES = [
  {
    id: 'c1',
    slug: 'intro-to-entrepreneurship',
    title: 'Introduction to Entrepreneurship',
    subTitle: 'Start your entrepreneurial journey with our beginner-friendly course, covering essential skills and insights for success. ',
    type: "Online",
    isAi: true,
    isFinished: false,
    lessons: [
      {
        id: 'l1',
        title: 'Understanding Entrepreneurship',
        isFinished: false,
        contents: [
          {
            id: 'v1',
            type: 'video',
            isFinished: true,
            languages: ['en', 'ar'],
            srcList: {
              "en": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              "ar": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
            }
          },
          {
            id: 'qz1',
            type: 'quiz',
            isFinished: false,
            score: 0,
            languages: ['en', 'ar'],
            questions: [
              {
                id: 'que1',
                questionType: 'mcq',
                questionText: 'What is the capital of Canada?',
                answerOptions: [
                  { id: 1, text: 'Ottawa', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'Toronto', isCorrect: false },
                  { id: 3, text: 'Calgary', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 4, text: 'Vancouver', isCorrect: false },
                ]
              },
              {
                id: 'que2',
                questionType: 'bcq',
                questionText: 'Are you working?',
                answerOptions: [
                  { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'False', isCorrect: false },
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'l2',
        title: 'The Entrepreneur',
        isFinished: false,
        contents: [
          {
            id: 'v1',
            type: 'video',
            isFinished: false,
            languages: ['en', 'ar'],
            srcList: {
              "en": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
              "ar": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
            }
          },
          {
            id: 'qz2',
            type: 'quiz',
            isFinished: false,
            score: 0,
            languages: ['en', 'ar'],
            questions: [
              {
                id: 'que1',
                questionType: 'mcq',
                questionText: 'What is the capital of Germany?',
                answerOptions: [
                  { id: 1, text: 'Berlin', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'Hamburg', isCorrect: false },
                  { id: 3, text: 'Cologne', isCorrect: false },
                  { id: 4, text: 'Frankfurt', isCorrect: false },
                ]
              },
              {
                id: 'que2',
                questionType: 'bcq',
                questionText: 'Are you excited?',
                answerOptions: [
                  { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'False', isCorrect: false },
                ]
              },

            ]
          }
        ]
      },
      {
        id: 'l3',
        title: 'The Problem with Entrepreneurship',
        isFinished: false,
        contents: [
          {
            id: 'v1',
            type: 'video',
            isFinished: false,
            languages: ['en', 'ar'],
            srcList: {
              "en": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              "ar": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
          },
          {
            id: 'qz3',
            type: 'quiz',
            isFinished: false,
            score: 0,
            languages: ['en', 'ar'],
            questions: [
              {
                id: 'que1',
                questionType: 'mcq',
                questionText: 'What is the capital of France?',
                answerOptions: [
                  { id: 1, text: 'Paris', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'Lyon', isCorrect: false },
                  { id: 3, text: 'Marseille', isCorrect: false },
                  { id: 4, text: 'Nantes', isCorrect: false },
                ]
              },
              {
                id: 'que2',
                questionType: 'bcq',
                questionText: 'Are you running?',
                answerOptions: [
                  { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'False', isCorrect: false },
                ]
              },
            ]
          }
        ]
      }
    ],
    test: {
      isAttempted: false,
      score: 0,
      questions: [
        {
          id: 'que1',
          questionType: 'mcq',
          questionText: 'What is the capital of France?',
          answerOptions: [
            { id: 1, text: 'Paris', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'Lyon', isCorrect: false },
            { id: 3, text: 'Marseille', isCorrect: false },
            { id: 4, text: 'Nantes', isCorrect: false },
          ]
        },
        {
          id: 'que2',
          questionType: 'bcq',
          questionText: 'Are you running?',
          answerOptions: [
            { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'False', isCorrect: false },
          ]
        },
        {
          id: 'que3',
          questionType: 'mcq',
          questionText: 'What is the capital of Germany?',
          answerOptions: [
            { id: 1, text: 'Berlin', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'Hamburg', isCorrect: false },
            { id: 3, text: 'Cologne', isCorrect: false },
            { id: 4, text: 'Frankfurt', isCorrect: false },
          ]
        },
        {
          id: 'que4',
          questionType: 'bcq',
          questionText: 'Are you excited?',
          answerOptions: [
            { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'False', isCorrect: false },
          ]
        },
        {
          id: 'que5',
          questionType: 'mcq',
          questionText: 'What is the capital of Canada?',
          answerOptions: [
            { id: 1, text: 'Ottawa', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'Toronto', isCorrect: false },
            { id: 3, text: 'Calgary', isCorrect: false },
            { id: 4, text: 'Vancouver', isCorrect: false },
          ]
        },
        {
          id: 'que6',
          questionType: 'bcq',
          questionText: 'Are you working?',
          answerOptions: [
            { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'False', isCorrect: false },
          ]
        },
      ]
    }
  },
  {
    id: 'course-2',
    slug: 'intro-to-ai',
    title: 'Introduction to AI',
    subTitle: 'Learn the basics of AI',
    isFinished: false,
    lessons: [
      {
        id: 'l1',
        title: 'Understanding Entrepreneurship',
        isFinished: false,
        contents: [
          {
            id: 'v1',
            type: 'video',
            isFinished: false,
            languages: ['en', 'ar'],
            srcList: {
              "en": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              "ar": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
          },
          {
            id: 'qz4',
            type: 'quiz',
            isFinished: false,
            score: 0,
            languages: ['en', 'ar'],
            questions: [
              {
                id: 'que1',
                questionType: 'mcq',
                questionText: 'What is the capital of Canada?',
                answerOptions: [
                  { id: 1, text: 'Ottawa', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'Toronto', isCorrect: false },
                  { id: 3, text: 'Calgary', isCorrect: false },
                  { id: 4, text: 'Vancouver', isCorrect: false },
                ]
              },
              {
                id: 'que2',
                questionType: 'bcq',
                questionText: 'Are you working?',
                answerOptions: [
                  { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'False', isCorrect: false },
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'l2',
        title: 'The Entrepreneur',
        isFinished: false,
        contents: [
          {
            id: 'v1',
            type: 'video',
            isFinished: false,
            languages: ['en', 'ar'],
            srcList: {
              "en": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              "ar": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
          },
          {
            id: 'qz5',
            type: 'quiz',
            isFinished: false,
            score: 0,
            languages: ['en', 'ar'],
            questions: [
              {
                id: 'que1',
                questionType: 'mcq',
                questionText: 'What is the capital of Germany?',
                answerOptions: [
                  { id: 1, text: 'Berlin', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'Hamburg', isCorrect: false },
                  { id: 3, text: 'Cologne', isCorrect: false },
                  { id: 4, text: 'Frankfurt', isCorrect: false },
                ]
              },
              {
                id: 'que2',
                questionType: 'bcq',
                questionText: 'Are you excited?',
                answerOptions: [
                  { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'False', isCorrect: false },
                ]
              },

            ]
          }
        ]
      },
      {
        id: 'l3',
        title: 'The Problem with Entrepreneurship',
        isFinished: false,
        contents: [
          {
            id: 'v1',
            type: 'video',
            isFinished: false,
            languages: ['en', 'ar'],
            srcList: {
              "en": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              "ar": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
          },
          {
            id: 'qz6',
            type: 'quiz',
            isFinished: false,
            score: 0,
            languages: ['en', 'ar'],
            questions: [
              {
                id: 'que1',
                questionType: 'mcq',
                questionText: 'What is the capital of France?',
                answerOptions: [
                  { id: 1, text: 'Paris', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'Lyon', isCorrect: false },
                  { id: 3, text: 'Marseille', isCorrect: false },
                  { id: 4, text: 'Nantes', isCorrect: false },
                ]
              },
              {
                id: 'que2',
                questionType: 'bcq',
                questionText: 'Are you running?',
                answerOptions: [
                  { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'False', isCorrect: false },
                ]
              },
            ]
          }
        ]
      }
    ],
    test: {
      isAttempted: false,
      score: 0,
      questions: [
        {
          id: 'que1',
          questionType: 'mcq',
          questionText: 'What is the capital of France?',
          answerOptions: [
            { id: 1, text: 'Paris', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'Lyon', isCorrect: false },
            { id: 3, text: 'Marseille', isCorrect: false },
            { id: 4, text: 'Nantes', isCorrect: false },
          ]
        },
        {
          id: 'que2',
          questionType: 'bcq',
          questionText: 'Are you running?',
          answerOptions: [
            { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'False', isCorrect: false },
          ]
        },
        {
          id: 'que3',
          questionType: 'mcq',
          questionText: 'What is the capital of Germany?',
          answerOptions: [
            { id: 1, text: 'Berlin', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'Hamburg', isCorrect: false },
            { id: 3, text: 'Cologne', isCorrect: false },
            { id: 4, text: 'Frankfurt', isCorrect: false },
          ]
        },
        {
          id: 'que4',
          questionType: 'bcq',
          questionText: 'Are you excited?',
          answerOptions: [
            { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'False', isCorrect: false },
          ]
        },
        {
          id: 'que5',
          questionType: 'mcq',
          questionText: 'What is the capital of Canada?',
          answerOptions: [
            { id: 1, text: 'Ottawa', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'Toronto', isCorrect: false },
            { id: 3, text: 'Calgary', isCorrect: false },
            { id: 4, text: 'Vancouver', isCorrect: false },
          ]
        },
        {
          id: 'que6',
          questionType: 'bcq',
          questionText: 'Are you working?',
          answerOptions: [
            { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'False', isCorrect: false },
          ]
        },
      ]
    }
  },
  {
    id: 'course-3',
    slug: 'intro-to-ml',
    title: 'Introduction to ML',
    subTitle: 'Learn the basics of ML',
    isFinished: false,
    lessons: [
      {
        id: 'l1',
        title: 'Understanding Entrepreneurship',
        isFinished: false,
        contents: [
          {
            id: 'v1',
            type: 'video',
            isFinished: true,
            languages: ['en', 'ar'],
            srcList: {
              "en": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              "ar": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
          },
          {
            id: 'qz7',
            type: 'quiz',
            isFinished: false,
            score: 0,
            languages: ['en', 'ar'],
            questions: [
              {
                id: 'que1',
                questionType: 'mcq',
                questionText: 'What is the capital of Canada?',
                answerOptions: [
                  { id: 1, text: 'Ottawa', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'Toronto', isCorrect: false },
                  { id: 3, text: 'Calgary', isCorrect: false },
                  { id: 4, text: 'Vancouver', isCorrect: false },
                ]
              },
              {
                id: 'que2',
                questionType: 'bcq',
                questionText: 'Are you working?',
                answerOptions: [
                  { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'False', isCorrect: false },
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'l2',
        title: 'The Entrepreneur',
        isFinished: false,
        contents: [
          {
            id: 'v1',
            type: 'video',
            isFinished: false,
            languages: ['en', 'ar'],
            srcList: {
              "en": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              "ar": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
          },
          {
            id: 'qz8',
            type: 'quiz',
            isFinished: false,
            score: 0,
            languages: ['en', 'ar'],
            questions: [
              {
                id: 'que1',
                questionType: 'mcq',
                questionText: 'What is the capital of Germany?',
                answerOptions: [
                  { id: 1, text: 'Berlin', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'Hamburg', isCorrect: false },
                  { id: 3, text: 'Cologne', isCorrect: false },
                  { id: 4, text: 'Frankfurt', isCorrect: false },
                ]
              },
              {
                id: 'que2',
                questionType: 'bcq',
                questionText: 'Are you excited?',
                answerOptions: [
                  { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'False', isCorrect: false },
                ]
              },

            ]
          }
        ]
      },
      {
        id: 'l3',
        title: 'The Problem with Entrepreneurship',
        isFinished: false,
        contents: [
          {
            id: 'v1',
            type: 'video',
            isFinished: false,
            languages: ['en', 'ar'],
            srcList: {
              "en": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              "ar": 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
          },
          {
            id: 'qz9',
            type: 'quiz',
            isFinished: false,
            score: 0,
            languages: ['en', 'ar'],
            questions: [
              {
                id: 'que1',
                questionType: 'mcq',
                questionText: 'What is the capital of France?',
                answerOptions: [
                  { id: 1, text: 'Paris', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'Lyon', isCorrect: false },
                  { id: 3, text: 'Marseille', isCorrect: false },
                  { id: 4, text: 'Nantes', isCorrect: false },
                ]
              },
              {
                id: 'que2',
                questionType: 'bcq',
                questionText: 'Are you running?',
                answerOptions: [
                  { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
                  { id: 2, text: 'False', isCorrect: false },
                ]
              },
            ]
          }
        ]
      }
    ],
    test: {
      isAttempted: false,
      score: 0,
      questions: [
        {
          id: 'que1',
          questionType: 'mcq',
          questionText: 'What is the capital of France?',
          answerOptions: [
            { id: 1, text: 'Paris', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'Lyon', isCorrect: false },
            { id: 3, text: 'Marseille', isCorrect: false },
            { id: 4, text: 'Nantes', isCorrect: false },
          ]
        },
        {
          id: 'que2',
          questionType: 'bcq',
          questionText: 'Are you running?',
          answerOptions: [
            { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'False', isCorrect: false },
          ]
        },
        {
          id: 'que3',
          questionType: 'mcq',
          questionText: 'What is the capital of Germany?',
          answerOptions: [
            { id: 1, text: 'Berlin', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'Hamburg', isCorrect: false },
            { id: 3, text: 'Cologne', isCorrect: false },
            { id: 4, text: 'Frankfurt', isCorrect: false },
          ]
        },
        {
          id: 'que4',
          questionType: 'bcq',
          questionText: 'Are you excited?',
          answerOptions: [
            { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'False', isCorrect: false },
          ]
        },
        {
          id: 'que5',
          questionType: 'mcq',
          questionText: 'What is the capital of Canada?',
          answerOptions: [
            { id: 1, text: 'Ottawa', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'Toronto', isCorrect: false },
            { id: 3, text: 'Calgary', isCorrect: false },
            { id: 4, text: 'Vancouver', isCorrect: false },
          ]
        },
        {
          id: 'que6',
          questionType: 'bcq',
          questionText: 'Are you working?',
          answerOptions: [
            { id: 1, text: 'True', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
            { id: 2, text: 'False', isCorrect: false },
          ]
        },
      ]
    }
  }
]

export const VIDEO_QUIZ = [
  {
    srcLang: [
      { "en": { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' } },
      { "ar": { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' } }
    ],
    title: 'Big Buck Bunny',
    quiz: [
      {
        questionText: 'What is the capital of Canada?',
        answerOptions: [
          { answerText: 'Ottawa', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
          { answerText: 'Toronto', isCorrect: false },
          { answerText: 'Calgary', isCorrect: false },
          { answerText: 'Vancouver', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the capital of Germany?',
        answerOptions: [
          { answerText: 'Berlin', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
          { answerText: 'Hamburg', isCorrect: false },
          { answerText: 'Cologne', isCorrect: false },
          { answerText: 'Frankfurt', isCorrect: false },
        ],
      }
    ]
  },
  {
    srcLang: [
      { "en": { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' } },
      { "ar": { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' } },
      { "ge": { src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' } }
    ],
    title: 'Elephant Dream',
    quiz: [
      {
        questionText: 'What is the capital of Canada?',
        answerOptions: [
          { answerText: 'Ottawa', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
          { answerText: 'Toronto', isCorrect: false },
          { answerText: 'Calgary', isCorrect: false },
          { answerText: 'Vancouver', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the capital of Germany?',
        answerOptions: [
          { answerText: 'Berlin', isCorrect: true, desc: 'Lorem ipsum something but nothing which means the answer is this.' },
          { answerText: 'Hamburg', isCorrect: false },
          { answerText: 'Cologne', isCorrect: false },
          { answerText: 'Frankfurt', isCorrect: false },
        ],
      }
    ]
  }
]