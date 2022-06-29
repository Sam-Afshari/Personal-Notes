import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectNotes } from '../../notes/store';

const useRecentNotes = () => {
  const notes = useSelector(selectNotes);

  const recentNotes = useMemo(() => notes.slice(0, 3), [notes]);

  return {
    recentNotes,
  };
};

export default useRecentNotes;
