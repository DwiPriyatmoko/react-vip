import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormLogin from '../components/Fragments/FormLogin';

const LoginPage = () => {
	return (
		<AuthLayouts title='Login' subtitle='Login bro!' type='login'>
			<FormLogin />
		</AuthLayouts>
	);
};

export default LoginPage;
