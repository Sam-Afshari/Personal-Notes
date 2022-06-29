import { FC } from 'react';

import RecentNotes from '../components/RecentNotes';
import Todos from '../components/Todos';

const HomeScreen: FC = () => (
  <div className="w-100 h-100 d-flex flex-column flex-md-row overflow-hidden justify-content-start align-items-start gap-4">
    <Todos />

    <RecentNotes />
  </div>
);

export default HomeScreen;
