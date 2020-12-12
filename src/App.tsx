import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from 'routes';
import SignIn from 'views/SignIn';
import PatientID from 'views/PatientID';
import Patient from 'views/Patient';
import PatientForms from 'views/PatientForms';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME} component={SignIn} />
        <Route exact path={ROUTES.ID} component={PatientID} />
        <Route exact path={ROUTES.FORMS} component={Patient} />
        <Route path={ROUTES.DOSS} render={(props) => <PatientForms {...props} formType="doss" />} />
        <Route path={ROUTES.RISK} render={(props) => <PatientForms {...props} formType="risk" />} />
        <Route path={ROUTES.RESULTS} render={(props) => <PatientForms {...props} formType="results" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
