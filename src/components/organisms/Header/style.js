
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Header: {
    color: '#0E0E0E',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E3E3E4',
    padding: '0.625rem 5rem',

    '& .navigation': {
      display: 'flex',

      '& .navigation-item': {
        fontSize: '1.375rem',
        fontWeight: '500',
        margin: '0.313rem',
        lineHeight: '1.625rem',
        marginRight: '1.875rem',

        '&:last-child': {
          marginRight: '0',
        },
      },
    },

    '& .cta-plus-settings': {
      display: 'flex',
      alignItems: 'center',
      padding: '0.625rem 0',

      '& > *': {
        marginRight: '1.25rem',

        '&:last-child': {
          marginRight: '0',
        },
      },

      '& .language': {
        display: 'flex',
        alignItems: 'center',
        '& .current-language': {
          margin: '0.313rem 0.313rem 0.313rem 0',
          fontSize: '1.25rem',
          fontWeight: '500',
          lineHeight: '1.5rem',
        },

        '& .language-dropdown-btn': {
          cursor: 'pointer',
          display: 'flex',
        },

        '& .language-dropdown': {
          display: 'none',
          position: 'absolute',
        }
      },

      '& .divider': {
        width: '1px',
        height: '3.5rem',
        backgroundColor: '#C7C8C8',
      },

      '& .cta': {
        display: 'flex',
        fontWeight: '500',
        fontSize: '1.25rem',
        lineHeight: '1.5rem',

        '& > *': {
          marginRight: '0.625rem',

          '&:last-child': {
            marginRight: '0',
          },
        },

        '& .cta-btn': {
          fontSize: '1.375rem',
          lineHeight: '1.625rem',
          fontWeight: '500',
          boxSizing: 'border-box',
          // height
          padding: '0.938rem 2.5rem',
          border: '2px solid #009BD8',
          borderRadius: '2.5rem',

          '&.style2': {
            backgroundColor: '#009BD8',
            color: '#fff',
          },
        },
      },
    },
  },
}));

export default useStyles;