import * as React from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import { ROUTES } from 'routes';
import { useHistory } from 'react-router-dom';
import { signIn, loggedUser } from 'store/atoms';
import { useRecoilState, useSetRecoilState } from 'recoil';

const SignIn = () => {
  const [signInState, setSignInState] = useRecoilState(signIn);
  const setUser = useSetRecoilState(loggedUser);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignInState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSignIn = () => {
    setUser('Sebastian');
    history.push(ROUTES.ID);
  };

  return (
    <Container style={{ height: '100vh' }} fluid="sm">
      <Row className=" justify-content-center align-items-center h-100 px-4">
        <Col xs={12} sm={8} md={6} className="">
          <Card className="mx-auto my-auto py-3 px-4">
            <Card.Title className="text-uppercase text-center">Delirium</Card.Title>
            <Form className="mt-2" onSubmit={handleSignIn}>
              <Form.Control
                className="mb-3"
                value={signInState.id}
                name="id"
                type="email"
                placeholder="Numer pracownika"
                onChange={handleChange}
              />
              <Form.Control
                type="password"
                name="pass"
                placeholder="Hasło"
                value={signInState.pass}
                onChange={handleChange}
              />

              <Row className="justify-content-center mt-3">
                <Button variant="primary" type="submit">
                  Loguj
                </Button>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
