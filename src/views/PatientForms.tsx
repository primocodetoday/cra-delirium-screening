import React from 'react';
import UserTemplate from 'templates/UserTemplate';

const PatientForm: React.FC = ({ children }) => {
  return <UserTemplate>{children}</UserTemplate>;
};

export default PatientForm;
