import { Link } from 'react-router-dom';

const CardProduct = (props) => {
	const { children } = props;
	return (
		<div className='w-full max-w-72 bg-orange-300 border border-gray-300 rounded-lg shadow mx-2 my-2 flex flex-col justify-between'>
			{children}
		</div>
	);
};

const HeaderCard = (props) => {
	const { image, id } = props;
	return (
		<Link to={`/product/${id}`}>
			<img
				src={image}
				alt='product'
				className='p-5 rounded-t-3xl h-60 w-full object-cover'
			/>
		</Link>
	);
};

const Body = (props) => {
	const { children, title } = props;
	return (
		<div className='px-5 pb-5 h-full'>
			<a href=''>
				<h5 className='text-xl font-bold tracking-tight text-slate-500'>
					{title.substring(0, 20) + '...'}
				</h5>
				<p className='text-slate-500 text-sm'>
					{children.substring(0, 100) + '...'}
				</p>
			</a>
		</div>
	);
};

const FooterCard = (props) => {
	const { price, handleAddToCart, id } = props;
	return (
		<div className='flex items-center  justify-between p-5'>
			<span className='text-l font-bold text-rose-700'>
				${' '}
				{price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}
			</span>
			<button
				className='text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
				onClick={() => handleAddToCart(id)}
			>
				Add to cart
			</button>
		</div>
	);
};

CardProduct.Header = HeaderCard;
CardProduct.Body = Body;
CardProduct.Footer = FooterCard;

export default CardProduct;
