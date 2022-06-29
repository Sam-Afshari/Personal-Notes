import { ToastContainer, Toast } from 'react-bootstrap';

import useToast from '../hooks/useToast';

const ToastProvider = () => {
  const { toasts, hide } = useToast();

  return (
    <ToastContainer position="bottom-end" className="m-4">
      {
        Object.entries(toasts).map(([id, toast]) => (
          <Toast key={id} show delay={3000} autohide onClose={() => hide(id)}>
            <Toast.Header>
              <strong className="me-auto">{toast.title}</strong>

              <small className="text-muted">{toast.subtitle}</small>
            </Toast.Header>

            {toast.body && <Toast.Body>{toast.body}</Toast.Body>}
          </Toast>
        ))
      }
    </ToastContainer>
  );
};

export default ToastProvider;
