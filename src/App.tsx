import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ROUTES } from 'routes';
import SignIn from 'views/SignIn';
import DossScale from 'components/forms/DossScale';
import RiskFactors from 'components/forms/RiskFactors';
import TreatmentResults from 'components/forms/TreatmentResults';
import Step1 from 'views/Step1';
import Step2 from 'views/Step2';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME} component={SignIn} />
        <Route exact path={ROUTES.ID} component={Step1} />
        <Route exact path={ROUTES.FORMS} component={Step2} />
        <Route path={ROUTES.DOSS} component={DossScale} />
        <Route path={ROUTES.RISK} component={RiskFactors} />
        <Route path={ROUTES.RESULTS} component={TreatmentResults} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
