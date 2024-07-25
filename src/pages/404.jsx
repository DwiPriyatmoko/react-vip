import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<h1 className='text-5xl font-bold mb-4'>Oops!</h1>
			<p className='text-gray-600 mb-6'>Error nich coooooy, gimana yeeee..</p>
			<p className='text-red-500'>{error.statusText || error.message}</p>
		</div>
	);
};

export default ErrorPage;
