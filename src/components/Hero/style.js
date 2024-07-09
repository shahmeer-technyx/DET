import zIndex from "@mui/material/styles/zIndex";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Hero: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    paddingTop: '100px',

    '& .hero-banner-part-1': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: 'calc(100% - 15rem)',
      zIndex: '-1',
      overflow: 'hidden',
      '& img': {
        position: 'absolute',
        top: '0',
        left: '0',
        objectFit: 'cover',
        width: '100%',
        height: '100vh',
      },
    },

    '& .hero-banner-part-2': {
      position: 'absolute',
      bottom: '0',
      left: '0',
      // width: '53.698%',
      width: 'calc(100% - 55.563rem)',
      height: '29.625rem',
      zIndex: '-1',
      overflow: 'hidden',
      borderRadius: '0 0 6.25rem 0',
      '& img': {
        position: 'absolute',
        bottom: '0',
        left: '0',
        objectFit: 'cover',
        width: '100vw',
        height: '100vh',
      },
    },

    '& .heading-subtitle': {
      width: 'fit-content',
      height: 'fit-content',
      backgroundColor: '#FFF',
      padding: '2.5rem 9.875rem 5.625rem 5rem',
      borderRadius: '0 0 6.25rem 0',

      '& .heading-wrapper': {
        maxWidth: '36.688rem',

        '& .heading': {
          fontSize: '4.5rem',
          lineHeight: '5.5rem',
          fontWeight: '500',
          marginBottom: '1.25rem',

          '& .highlight': {
            color: '#00909A',
          },
        },
        '& .subtitle': {
          fontSize: '1.375rem',
          lineHeight: '1.875rem',
          fontWeight: '400',
        }
      }
    },

    '& .ai-assistant': {
      position: 'absolute',
      bottom: '-3.313rem',
      right: '0',
      zIndex: '-1',
      boxSizing: 'border-box',
      width: '55.563rem',
      height: '24.063rem',
      borderRadius: '6.25rem 0 0 0',
      backgroundColor: '#FFF',
      padding: '2.938rem 5rem 10.375rem 6.063rem',

      '& .ai-assistant-wrapper': {
        maxWidth: '44.5rem',
        fontSize: '2rem',
        fontWeight: '500',

        '& .text': {
          '&.text-1': {
            marginBottom: '2.5rem',
          },
          '& .input': {
            display: 'inline-flex',
            gap: '5.563rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.625rem 1.25rem',
            margin: '0 1.25rem',
            backgroundColor: '#E6F5FB',
            borderRadius: '5rem',
          }
        },
      },
    },
  },
}));

export default useStyles;