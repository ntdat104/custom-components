import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <StylesProvider injectFirst>
      <CssBaseline />
      <App />
    </StylesProvider>
  </StyledEngineProvider>,
  document.getElementById('root')
);
