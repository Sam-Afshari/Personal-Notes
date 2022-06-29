import { useMemo } from 'react';

import useAppSelector from '../../../hooks/useAppSelector';

import { selectNotes } from '../../notes/store';

const useRecentNotes = () => {
  const notes = useAppSelector(selectNotes);

  const recentNotes = useMemo(() => notes.slice(0, 3), [notes]);

  return {
    recentNotes,
  };
};

export default useRecentNotes;
