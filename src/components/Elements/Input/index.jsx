import { forwardRef } from 'react';
import Input from './Input';
import Label from './Label';

const InputForm = forwardRef((props, ref) => {
	const { labelTitle, inputType, name, placeholder } = props;
	return (
		<div className='mb-6'>
			<Label htmlFor={name}>{labelTitle}</Label>
			<Input name={name} type={inputType} placeholder={placeholder} ref={ref} />
		</div>
	);
});

export default InputForm;
