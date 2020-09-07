import React from 'react';

import { Route } from 'react-router-dom';
import { Switch } from 'solarxui';

import DayPage from './pages/DayPage';
import InputPage from './pages/InputPage';
import Night from './pages/NightPage';
import SelectPage from './pages/SelectPage';
import SummaryPage from './pages/SummaryPage';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={SelectPage} />
      <Route path="/input" component={InputPage} />
      <Route path="/day" component={DayPage} />
      <Route path="/night" component={Night} />
      <Route path="/summary" component={SummaryPage} />
    </Switch>
  )
}

export default App;
