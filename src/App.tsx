import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from 'routes';
import { RecoilRoot } from 'recoil';
import SignIn from 'views/SignIn';
import PatientID from 'views/PatientID';
import Patient from 'views/Patient';
import PatientForms from 'views/PatientForms';
import DossScale from 'components/forms/DossScale';
import RiskFactors from 'components/forms/RiskFactors';
import TreatmentResults from 'components/forms/TreatmentResults';

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} component={SignIn} />
          <Route exact path={ROUTES.ID} component={PatientID} />
          <Route exact path={ROUTES.FORMS} component={Patient} />
          <Route
            path={ROUTES.DOSS}
            render={(props) => (
              <PatientForms {...props}>
                <DossScale />
              </PatientForms>
            )}
          />
          <Route
            path={ROUTES.RISK}
            render={(props) => (
              <PatientForms {...props}>
                <RiskFactors />
              </PatientForms>
            )}
          />
          <Route
            path={ROUTES.RESULTS}
            render={(props) => (
              <PatientForms {...props}>
                <TreatmentResults />
              </PatientForms>
            )}
          />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
