import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  VideoPlayer: {
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