import { Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CardedLayout from '../../layouts/CardedLayout';

import useLogin from '../hooks/useLogin';

const LoginScreen = () => {
  const { form, onSubmit } = useLogin();

  return (
    <CardedLayout title="Login">
      <Form ref={form} onSubmit={onSubmit} className="d-flex flex-column justify-content-center align-items-center">
        <Form.Group className="mb-3 w-100" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control required type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3 w-100" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <LinkContainer to="/register">
          <Button type="button" variant="link">
            Need account? Register
          </Button>
        </LinkContainer>
      </Form>
    </CardedLayout>
  );
};

export default LoginScreen;
