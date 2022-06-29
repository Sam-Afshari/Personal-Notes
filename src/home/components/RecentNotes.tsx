import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import useRecentNotes from '../hooks/useRecentNotes';

const RecentNotes = () => {
  const { recentNotes } = useRecentNotes();

  return (
    <Card className="mh-100 w-100 flex-grow-1 overflow-auto">
      <Card.Body>
        <Card.Title className="h3">Recent Notes</Card.Title>

        <div className="d-flex flex-column gap-2">
          {
            recentNotes.map((note) => (
              <LinkContainer to={`/notes#${note.id}`} key={note.id}>
                <Card className="w-full cursor-pointer">
                  <Card.Header className="px-1 py-0">
                    <span className="text-muted small">{note.date}</span>
                  </Card.Header>

                  <Card.Body>
                    {note.text}
                  </Card.Body>
                </Card>
              </LinkContainer>
            ))
          }
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecentNotes;
