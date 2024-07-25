import { useEffect, useState, useRef } from 'react';
import Button from '../components/Elements/Button';
import CardProduct from '../components/Fragments/CardProduct';
// import Counter from '../components/Fragments/Counter';
import { getProducts } from '../services/products.service';
import { getUsername } from '../services/auth.service';
import { useLogin } from '../hooks/useLogin';
// Rendering Lists

const ProductsPage = () => {
	// Hook (useState)
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [products, setProducts] = useState([]);

	// useEffect Decoded (Custom Hooks)
	const username = useLogin();

	// Hook (useEffect)
	useEffect(() => {
		setCart(JSON.parse(localStorage.getItem('cart')) || []);
	}, []);

	// Hook Get Data API
	useEffect(() => {
		getProducts((data) => {
			setProducts(data);
		});
	}, []);

	// Hook (total price)
	useEffect(() => {
		if (products.length > 0 && cart.length > 0) {
			const sum = cart.reduce((acc, item) => {
				const product = products.find((product) => product.id === item.id);
				return acc + product.price * item.qty;
			}, 0);
			setTotalPrice(sum);
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}, [cart, products]);

	// Event Handler Logout
	const handleLogout = () => {
		localStorage.removeItem('token');
		// localStorage.removeItem('password');
		window.location.href = '/login';
	};

	// Handle item cart
	const handleAddToCart = (id) => {
		if (cart.find((item) => item.id === id)) {
			setCart(
				cart.map((item) =>
					item.id === id ? { ...item, qty: item.qty + 1 } : item
				)
			);
		} else {
			setCart([...cart, { id, qty: 1 }]);
		}
	};

	// UseRef
	const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);

	const handleAddToCartRef = (id) => {
		cartRef.current = [...cartRef.current, { id, qty: 1 }];
		localStorage.setItem('cart', JSON.stringify(cartRef.current));
	};

	const totalPriceRef = useRef(null);
	useEffect(() => {
		if (products.length > 0 && cart.length > 0) {
			totalPriceRef.current.style.display = 'table-row';
		} else {
			totalPriceRef.current.style.display = 'none';
		}
	}, [cart, products]);

	return (
		<>
			<div className="flex justify-end bg-red-200 font-bold items-center py-4 px-8">
				{username}
				<Button color="bg-black ml-5 hover:bg-blue-700" onClick={handleLogout}>
					Logout
				</Button>
			</div>
			{/* List products - Left*/}
			<div className="flex justify-center py-8">
				<div className="w-4/6 flex flex-wrap">
					{products.length > 0 &&
						products.map((product) => (
							<CardProduct key={product.id}>
								<CardProduct.Header image={product.image} id={product.id} />
								<CardProduct.Body title={product.title}>
									{product.description}
								</CardProduct.Body>

								<CardProduct.Footer
									price={product.price}
									id={product.id}
									handleAddToCart={handleAddToCart}
								/>
							</CardProduct>
						))}
				</div>

				{/* List Cart - Right */}
				<div className="w-2/6">
					<h1 className="text-3xl font-bold text-blue-600 ml-2 mb-2">Cart</h1>
					<table className="text-left table-auto border-separate border-spacing-x-4">
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Qty</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{/* create a looping */}
							{products.length > 0 &&
								cart.map((item) => {
									const product = products.find(
										(product) => product.id === item.id
									);
									return (
										<tr key={item.id}>
											<td>{product.title.substring(0, 20) + '...'}</td>
											<td>
												${' '}
												{product.price.toLocaleString('id-ID', {
													styles: 'currency',
													currency: 'USD',
												})}
											</td>
											<td className="text-center">{item.qty}</td>
											<td>
												${' '}
												{(product.price * item.qty).toLocaleString('id-ID', {
													styles: 'currency',
													currency: 'USD',
												})}
											</td>
										</tr>
									);
								})}
							<tr ref={totalPriceRef}>
								<td colSpan={3}>
									<b>Total Price</b>
								</td>
								<td>
									<b>
										${' '}
										{totalPrice.toLocaleString('id-ID', {
											styles: 'currency',
											currency: 'USD',
										})}
									</b>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			{/* <div className='mt-5 mb-5 flex justify-center'>
				<Counter></Counter>
			</div> */}
		</>
	);
};

export default ProductsPage;
