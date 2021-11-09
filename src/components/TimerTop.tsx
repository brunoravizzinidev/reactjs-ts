import { useState } from 'react';
import Timer from './Timer';

const TimerTop = () => {
	const [milisegundos, setMilisegundos] = useState(1000);

	return (
		<>
			<span>Milisegundos</span>
			<br />
			<br />
			<button
				onClick={() => setMilisegundos(1000)}
				className="btn btn-outline-success me-2"
			>
				1000
			</button>

			<button
				onClick={() => setMilisegundos(2000)}
				className="btn btn-outline-success"
			>
				2000
			</button>
			<Timer milisegundos={milisegundos} />
		</>
	);
};

export default TimerTop;
