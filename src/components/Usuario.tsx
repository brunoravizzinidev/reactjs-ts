import { useState } from 'react';

interface User {
	uid: string;
	name: string;
}

const Usuario = () => {
	const [user, setUser] = useState<User>();

	const login = () => {
		setUser({
			uid: 'ABC1',
			name: 'Nombre Usuario',
		});
	};

	return (
		<div className="mt-5">
			<h3>Usuario: </h3>
			<button
				onClick={() => login()}
				className="btn btn-outline-primary mt-2"
			>
				Login
			</button>
			<pre>{JSON.stringify(user)}</pre>
		</div>
	);
};

export default Usuario;
