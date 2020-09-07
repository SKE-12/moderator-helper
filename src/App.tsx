import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import DayPage from './pages/DayPage';
import InputPage from './pages/InputPage';
import Night from './pages/NightPage';
import SelectPage from './pages/SelectPage';
import SummaryPage from './pages/SummaryPage';

const Container = styled.div`
  padding: 16px;
`

const App = () => {
  return (
    <Container>
      <Switch>
        <Route path="/" component={SelectPage} />
        <Route path="/input" component={InputPage} />
        <Route path="/day" component={DayPage} />
        <Route path="/night" component={Night} />
        <Route path="/summary" component={SummaryPage} />
      </Switch>
    </Container>
  )
}

export default App;
