import ChangeNameForm from '../components/ChangeNameForm';
import ChangePasswordForm from '../components/ChangePasswordForm';

const ProfileScreen = () => (
  <div className="w-100 h-100 d-flex flex-column flex-md-row justify-content-center align-items-center gap-8">
    <ChangeNameForm />

    <ChangePasswordForm />
  </div>
);

export default ProfileScreen;
