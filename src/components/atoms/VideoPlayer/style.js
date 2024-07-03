import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  VideoPlayer: {

    position: 'relative',
    width: 'fit-content',
    textAlign: 'center',

    '& .btn-container': {
      position: 'absolute',
      left: '80%',
      bottom: '25%',
      backgroundColor: '#fff',

      '& button': {
        fontSize: '2.5rem',
        padding: '0.5rem 0.75rem',
      },
    },

    '@media (max-width: 768px)': {
      backgroundColor: 'green',
    },

    '& .container': {
      position: 'relative',
      display: 'flex',
      width: 'fit-content',
      height: 'fit-content',
      borderRadius: '8px',
      overflow: 'hidden',

      '& video': {
        width: '804px',
      },

      '& .controls-wrapper': {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 0',
        backgroundColor: '#5D5E5E',
        opacity: '0.9',
        color: '#fff',

        '& .control-set': {
          width: '16%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          '&.set-1': {
            '& .pause-svg': {
              display: 'none',
            }
          },

          '&.set-2': {
            '& .volume-btn': {
              position: 'relative',
              margin: '0 10px',

              '& .volume-bar-wrapper': {
                display: 'none',
                position: 'absolute',
                bottom: '300%',
                left: '60%',
                transform: 'translateX(-50%) rotate(-90deg)',
                // width: 'fit-content',
                // height: 'fit-content',
                // border: '1px solid #000',
                // borderRadius: '8px',
                // backgroundColor: 'rgba(255,255,255,0.9)',
                padding: '0.75rem 1rem',
                // overflow: 'hidden',

                '&:hover': {
                  display: 'block',
                }
              },

              '&:hover .volume-bar-wrapper': {
                display: 'block',
              },
            }
          },
        },

        '& .progress-wrapper': {
          display: 'flex',
          width: '65%',
          alignItems: 'center',
          '& .video-time, & .video-duration': {
            width: '10%',
            textAlign: 'center',
          },

          '& .progress-outer': {
            width: '80%',
            height: '2px',
            backgroundColor: '#fff',
            margin: '0 15px',
            cursor: 'pointer',
            borderRadius: '5px',

            '& .progress-inner': {
              width: '0%',
              height: '100%',
              backgroundColor: '#009BD8',
              borderRadius: '5px',
              position: 'relative',

              '& .progress-knob': {
                position: 'absolute',
                display: 'block',
                width: '0.75rem',
                height: '0.75rem',
                right: '0',
                top: '50%',
                transform: 'translate(50%, -50%)',
                backgroundColor: '#009BD8',
                border: '2px solid #fff',
                borderRadius: '50%',
                pointerEvents: 'none',
              },
            },

            '&:hover': {
              height: '5px',
              '& .progress-inner .progress-knob': {
                display: 'block',
              }
            },
          },
        },

      },
    },
  },
}));

export default useStyles;