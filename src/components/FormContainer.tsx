import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from 'routes';
import DossScale from 'components/forms/DossScale';
import RiskFactors from './forms/RiskFactors';
import TreatmentResults from './forms/TreatmentResults';

const FormContainer = () => {
  return (
    <div>
      <Switch>
        <Route path={ROUTES.DOSS} component={DossScale}></Route>
        <Route path={ROUTES.RISK} component={RiskFactors}></Route>
        <Route path={ROUTES.RESULTS} component={TreatmentResults}></Route>
      </Switch>
    </div>
  );
};

export default FormContainer;
