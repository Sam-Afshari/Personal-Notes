import { Form, Button } from 'react-bootstrap';

import CardedLayout from '../../../layouts/CardedLayout';

import useChangePassword from '../hooks/useChangePassword';

const ChangePasswordForm = () => {
  const { form, onSubmit } = useChangePassword();

  return (
    <CardedLayout title="Change your password:">
      <Form ref={form} onSubmit={onSubmit} className="d-flex flex-column justify-content-center align-items-center">
        <Form.Group className="mb-3 w-100" controlId="newPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control pattern=".{8,}" required type="password" placeholder="Enter new password" />
          <Form.Text className="text-muted">min 8 characters</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 w-100" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control pattern=".{8,}" required type="password" placeholder="Enter password again" />
          <Form.Text className="text-muted">min 8 characters</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Change
        </Button>
      </Form>
    </CardedLayout>
  );
};

export default ChangePasswordForm;
