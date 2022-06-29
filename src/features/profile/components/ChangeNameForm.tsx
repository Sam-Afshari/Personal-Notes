import { Form, Button } from 'react-bootstrap';

import CardedLayout from '../../../layouts/CardedLayout';

import useChangeName from '../hooks/useChangeName';

const ChangeNameForm = () => {
  const { form, onSubmit } = useChangeName();

  return (
    <CardedLayout title="Change your name:">
      <Form ref={form} onSubmit={onSubmit} className="d-flex flex-column justify-content-center align-items-center">
        <Form.Group className="mb-3 w-100" controlId="newFullName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter your name" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Change
        </Button>
      </Form>
    </CardedLayout>
  );
};

export default ChangeNameForm;
