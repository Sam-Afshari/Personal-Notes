import { Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CardedLayout from '../../layouts/CardedLayout';

import useRegister from '../hooks/useRegister';

const RegisterScreen = () => {
  const { form, onSubmit } = useRegister();

  return (
    <CardedLayout title="Register">
      <Form ref={form} onSubmit={onSubmit} className="d-flex h-100 flex-column justify-content-center align-items-center">
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control pattern=".{8,}" required type="text" placeholder="Enter username" />
          <Form.Text className="text-muted">min 8 characters</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control pattern=".{8,}" required type="password" placeholder="Password" />
          <Form.Text className="text-muted">min 8 characters</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full name</Form.Label>
          <Form.Control required type="text" placeholder="Enter full name" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>

        <LinkContainer to="/user/login">
          <Button type="button" variant="link">
            Have account? Login
          </Button>
        </LinkContainer>
      </Form>
    </CardedLayout>
  );
};

export default RegisterScreen;
