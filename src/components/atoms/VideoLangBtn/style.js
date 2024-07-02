const { makeStyles } = require("@mui/styles");

const useStyles = makeStyles((theme) => ({
  VideoLangBtn: {
    position: 'relative',

    '& .popup': {
      position: 'absolute',
      bottom: '200%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'fit-content',
      height: 'fit-content',
      border: '1px solid #000',
      borderRadius: '8px',
      backgroundColor: 'rgba(255,255,255,0.9)',
      overflow: 'hidden',

      '& .lang-option': {
        display: 'block',
        padding: '0.5rem 1.5rem',

        '&:hover': {
          backgroundColor: 'rgba(255,255,255,1)',
        }
      }
    }
  },
}))

export default useStyles;