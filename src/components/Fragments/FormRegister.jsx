import Button from '../Elements/Button';
import InputForm from '../Elements/Input';
import { useEffect, useRef } from 'react';

const FormRegister = () => {
	// useRef apply focus on form register at first load
	const nameRef = useRef(null);
	useEffect(() => {
		nameRef.current.focus();
	}, []);

	return (
		<form action=''>
			<InputForm
				labelTitle='Full Name'
				inputType='text'
				placeholder='insert your full name'
				name='fullName'
				ref={nameRef}
			/>
			<InputForm
				labelTitle='Email'
				inputType='email'
				placeholder='bangkee@gmail.com'
				name='email'
			/>
			<InputForm
				labelTitle='Password'
				inputType='password'
				placeholder='*********'
				name='password'
			/>
			<InputForm
				labelTitle='Confirm Password'
				inputType='password'
				placeholder='*********'
				name='confirmPassword'
			/>

			<Button color='bg-blue-600 hover:bg-blue-700 w-full'>Register</Button>
		</form>
	);
};

export default FormRegister;
