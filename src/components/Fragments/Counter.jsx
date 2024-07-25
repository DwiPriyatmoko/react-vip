import React from 'react';
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		console.log('constructor');
	}

	componentDidMount() {
		this.setState({ count: 10 });
		console.log('Component mounted');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Component updated');
		if (this.state.count === 10) {
			this.setState({ count: 5 });
		}
	}

	render() {
		return (
			<div className='flex items-center'>
				<button
					className='bg-black text-white px-4 rounded'
					onClick={() => this.setState({ count: this.state.count - 1 })}
				>
					-
				</button>
				<h1 className='text-lg font-bold mr-5 ml-5'>{this.state.count}</h1>{' '}
				<button
					className='bg-black text-white px-4 rounded'
					onClick={() => this.setState({ count: this.state.count + 1 })}
				>
					+
				</button>
				{console.log('render')}
			</div>
		);
	}
}

export default Counter;
