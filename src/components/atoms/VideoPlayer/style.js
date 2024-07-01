import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  VideoPlayer: {

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
          }
        },

        '& .progress-wrapper': {
          display: 'flex',
          width: '65%',
          alignItems: 'center',

          '& .progress-outer': {
            width: '100%',
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
                display: 'none',
                width: '0.75rem',
                height: '0.75rem',
                right: 0,
                top: 50,
                transform: 'translate(50%, -50%)',
                backgroundColor: '#009BD8',
                border: '2px solid #fff',
                borderRadius: '50%',
                pointerEvents: 'none',
              },
              
              '&:hover .progress-knob': {
                display: 'block',
              },
            },
          },
        },

      },
    },
    // backgroundColor: 'blue',
    position: 'relative',
    width: 'fit-content',
    textAlign: 'center',

    '& .video': {
      width: '100%',
      maxWidth: '1000px',
      margin: '20px 0',
    },

    '& .btn-container': {
      position: 'absolute',
      left: '80%',
      bottom: '25%',

      '& button': {
        fontSize: '2.5rem',
        padding: '0.5rem 0.75rem',
      },
    },

    '@media (max-width: 768px)': {
      backgroundColor: 'green',
    },
  },
}));

export default useStyles;