import { FC, ReactElement } from 'react';
import {
  Card,
  Container, ListGroup, Navbar, NavDropdown, Offcanvas,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import useDrawer from '../hooks/useDrawer';

type IProps = {
  children: ReactElement
}

const DrawerLayout: FC<IProps> = ({ children }) => {
  const {
    currentUser, logoutUser, location, show, handleClose, handleOpen, pageTitle,
  } = useDrawer();

  return (
    <div className="d-flex flex-column h-100 w-100">
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand>
            Personal Notes
            {' '}
            {pageTitle && `- ${pageTitle}`}
          </Navbar.Brand>

          <Navbar.Toggle onClick={handleOpen} />

          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <NavDropdown
                  title={`Welcome ${currentUser?.fullName}!`}
                >
                  <LinkContainer to="profile">
                    <NavDropdown.Item>Edit Profile</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="px-0">
              <ListGroup activeKey={location.pathname}>
                <LinkContainer to="home">
                  <ListGroup.Item action eventKey="/">
                    Home
                  </ListGroup.Item>
                </LinkContainer>

                <LinkContainer to="notes">
                  <ListGroup.Item action eventKey="/notes">
                    Notes
                  </ListGroup.Item>
                </LinkContainer>

                <ListGroup.Item action onClick={logoutUser}>
                  Logout
                </ListGroup.Item>
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>

      <div className="flex-grow-1 p-3 bg-light overflow-hidden">
        <Card className="p-3 h-100 overflow-auto">
          {children}
        </Card>
      </div>
    </div>
  );
};

export default DrawerLayout;
