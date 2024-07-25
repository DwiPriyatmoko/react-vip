import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormRegister from '../components/Fragments/FormRegister';

const RegisterPage = () => {
	return (
		<AuthLayouts title='Register' subtitle='Register Bro!' type='register'>
			<FormRegister />
		</AuthLayouts>
	);
};

export default RegisterPage;
