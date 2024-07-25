import { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input';
import { login } from '../../services/auth.service';

const FormLogin = () => {
	const [loginFailed, setLoginFailed] = useState('');
	const handleLogin = (event) => {
		event.preventDefault();
		// localStorage.setItem('email', event.target.email.value);
		// localStorage.setItem('password', event.target.password.value);
		// window.location.href = '/products';
		const data = {
			username: event.target.username.value,
			password: event.target.password.value,
		};
		login(data, (status, res) => {
			if (status) {
				localStorage.setItem('token', res);
				window.location.href = '/products';
			} else {
				setLoginFailed(res.response.data);
			}
		});
	};

	// useRef apply focus on form login at first load
	const usernameRef = useRef(null);
	useEffect(() => {
		usernameRef.current.focus();
	}, []);

	return (
		<form onSubmit={handleLogin}>
			<InputForm
				labelTitle='Username'
				inputType='text'
				placeholder='Jane Doe'
				name='username'
				ref={usernameRef}
			/>
			<InputForm
				labelTitle='Password'
				inputType='password'
				placeholder='*********'
				name='password'
			/>
			<Button color='bg-blue-600 hover:bg-blue-700 w-full' type='submit'>
				Login
			</Button>
			{loginFailed && (
				<p className='text-red-500 text-center mt-5'>{loginFailed}</p>
			)}
		</form>
	);
};

export default FormLogin;
