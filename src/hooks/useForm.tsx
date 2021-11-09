import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>(initState: T) => {
	const [form, setForm] = useState(initState);

	const handleForm = (ev: ChangeEvent<HTMLInputElement>) => {
		console.log(ev);
		const { name, value } = ev.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	return {
		form,
		handleForm,
	};
};
