import { useEffect, useRef, useState } from 'react';

type TimerProps = {
	milisegundos: number;
};

const Timer = ({ milisegundos }: TimerProps) => {
	const [segundos, setSegundos] = useState(0);
	const ref = useRef<NodeJS.Timeout>();

	useEffect(() => {
		ref.current && clearInterval(ref.current);

		ref.current = setInterval(
			() => setSegundos((seg) => seg + 1),
			milisegundos
		);
	}, [milisegundos]);

	return (
		<>
			<h4>
				Timer: <small>{segundos}</small>
			</h4>
		</>
	);
};

export default Timer;
