import { FC, ReactElement } from 'react';
import { Card } from 'react-bootstrap';

type IProps = {
  title: string,
  children: ReactElement
}

const CardedLayout: FC<IProps> = ({ title, children }) => (
  <div className="w-100 h-100 mw-100 mh-100 d-flex justify-content-center align-items-center">
    <Card className="m-auto">
      <Card.Body className="m-auto">
        <Card.Title className="h3">{title}</Card.Title>

        {children}
      </Card.Body>
    </Card>
  </div>
);

export default CardedLayout;
