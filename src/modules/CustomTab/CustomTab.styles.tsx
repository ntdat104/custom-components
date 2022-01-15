import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    tabList: {
      display: 'flex',
      position: 'relative',
    },
    line: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '6px',
      borderRadius: '15px',
      backgroundColor: '#c23564',
      transition: 'all 0.2s ease',
    },
    tabItem: {
      minWidth: '80px',
      padding: '16px 20px 11px 20px',
      fontSize: '20px',
      textAlign: 'center',
      color: '#c23564',
      backgroundColor: '#fff',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      borderBottom: '5px solid transparent',
      opacity: '0.6',
      cursor: 'pointer',
      transition: 'all 0.5s ease',
      userSelect: 'none',
      '&:hover': {
        opacity: '1',
        backgroundColor: 'rgba(194, 53, 100, 0.05)',
        borderColor: 'rgba(194, 53, 100, 0.1)',
      },
      '&.active': {
        opacity: '1',
      },
    },
    tabContent: {
      padding: '28px 0px',
    },
    tabPanel: {
      color: '#333',
      '& h2': {
        fontSize: '24px',
        marginBottom: '8px',
      },
    },
  })
);
