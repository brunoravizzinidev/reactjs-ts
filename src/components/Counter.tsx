import { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const incrementar = (number: number = 1): void => {
		setCounter(counter + number);
	};

	return (
		<div className="mt-5">
			<h3>Counter: </h3>
			<span>Valor: {counter}</span>
			<br />
			<button
				onClick={() => incrementar()}
				className="btn btn-outline-primary mt-2"
			>
				{' '}
				+1{' '}
			</button>

			<button
				onClick={() => incrementar(2)}
				className="btn btn-outline-primary mt-2"
			>
				{' '}
				+1{' '}
			</button>

			<button
				onClick={() => setCounter(0)}
				className="btn btn-outline-warning mt-2"
			>
				Reset
			</button>
		</div>
	);
};

export default Counter;
