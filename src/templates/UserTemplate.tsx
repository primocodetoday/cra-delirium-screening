import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import TopNav from 'components/TopNav';
import { useRecoilValue } from 'recoil';
import { loggedUser } from 'store/atoms';
import * as dayjs from 'dayjs';

const UserTemplate: React.FC = ({ children }) => {
  const now = dayjs.default().format('YYYY-MM-DD HH:mm:ss');
  const user = useRecoilValue(loggedUser);
  return (
    <Container className="px-0">
      <TopNav />
      <Row className="mb-2 justify-content-center">
        <p className="mr-3">
          Witaj <strong>{user},</strong>
        </p>
        <p>
          Aktualna czas to: <strong>{now}</strong>
        </p>
      </Row>
      <Container>{children}</Container>
    </Container>
  );
};

export default UserTemplate;
