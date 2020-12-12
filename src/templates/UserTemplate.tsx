import * as React from 'react';
import { Container } from 'react-bootstrap';
import TopNav from 'components/TopNav';

const UserTemplate: React.FC = ({ children }) => {
  return (
    <Container className="px-0">
      <TopNav />
      <Container>{children}</Container>
    </Container>
  );
};

export default UserTemplate;
