import { Link } from 'react-router-dom';
const AuthLayouts = (props) => {
	const { children, title, subtitle, type } = props;
	const FormLink = () => {
		return (
			<p className='text-zinc-600 font-semibold text-sm text-center mt-8'>
				{/* Ternary Operator Text*/}
				{type === 'login'
					? "Don't have an account? "
					: 'Already have an account? '}

				{/* Ternary Operator Link*/}
				{type === 'login' ? (
					<Link to='/Register' className='text-blue-600'>
						Register
					</Link>
				) : (
					<Link to='/Login' className='text-blue-600'>
						Login
					</Link>
				)}
			</p>
		);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<div className='w-full max-w-xs'>
				<h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
				<p className='text-gray-600 font-medium mb-8'>{subtitle}</p>
				{children}
				<FormLink />
			</div>
		</div>
	);
};

export default AuthLayouts;
