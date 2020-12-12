import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import DossScale from 'components/forms/DossScale';
import RiskFactors from 'components/forms/RiskFactors';
import TreatmentResults from 'components/forms/TreatmentResults';
import { Row } from 'react-bootstrap';

interface FormsProps {
  formType: string;
}

const PatientForm = ({ formType }: FormsProps) => {
  return (
    <UserTemplate>
      <Row className="justify-content-center">
        <h4 className="text-uppercase">Wypełnij formularz</h4>
      </Row>
      {formType === 'doss' && <DossScale />}
      {formType === 'risk' && <RiskFactors />}
      {formType === 'results' && <TreatmentResults />}
    </UserTemplate>
  );
};

export default PatientForm;
