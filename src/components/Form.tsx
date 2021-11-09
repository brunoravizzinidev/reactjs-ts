import { useForm } from '../hooks/useForm';

interface FormData {
	email: string;
	name: string;
}

const Form = () => {
	const { form, handleForm } = useForm<FormData>({
		email: '',
		name: '',
	});

	return (
		<form autoComplete="off">
			<div className="mb-3">
				<label className="form-label">Email</label>
				<input
					type="email"
					className="form-control"
					name="email"
					onChange={handleForm}
				/>
			</div>

			<div className="mb-3">
				<label className="form-label">Nombre</label>
				<input
					type="text"
					className="form-control"
					name="name"
					onChange={handleForm}
				/>
			</div>

			<pre>{JSON.stringify(form)}</pre>
		</form>
	);
};

export default Form;
