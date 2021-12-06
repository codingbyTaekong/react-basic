/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Error from './components/Error';
import ErrorBoundary from './components/ErrorBoundary';
import App from './App';
import StyledComponents from './components/StyledComponents';
import styled, {ThemeProvider} from 'styled-components'

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;



Sentry.init({
  dsn: "https://c128aec190c24ed89dcd4095286505ed@o1082920.ingest.sentry.io/6091959",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const palette = {
  blue : '#228be6',
  gray : '#496057',
  pink : '#f06595'
}



ReactDOM.render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
      {/* <Error /> */}
    {/* </ErrorBoundary> */}
    {/* <App/> */}
    <ThemeProvider theme={{palette}}>
      <AppBlock>
        <ButtonGroup>
          <StyledComponents>버튼</StyledComponents>
          <StyledComponents color="gray" >버튼</StyledComponents>
          <StyledComponents color="pink">버튼</StyledComponents>
        </ButtonGroup>
        <ButtonGroup>
          <StyledComponents color="gray" size="large">버튼</StyledComponents>
          <StyledComponents color="gray" size="medium">버튼</StyledComponents>
          <StyledComponents color="gray" size="small">버튼</StyledComponents>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
