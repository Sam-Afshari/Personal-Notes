import useAppSelector from '../../hooks/useAppSelector';

import { selectCurrentUser } from '../store';

const useCurrentUser = () => useAppSelector(selectCurrentUser);

export default useCurrentUser;
