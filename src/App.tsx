import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import Form from './components/Form';
import TimerTop from './components/TimerTop';
import Usuario from './components/Usuario';
function App() {
	return (
		<div>
			<h1>App Reactjs + Typescript</h1>
			<hr />
			<Counter />

			<Usuario />

			<h2 className="mt-4">useEffect - useRef</h2>
			<hr />
			<TimerTop />

			<h2 className="mt-4">UseReducer</h2>
			<hr />

			<CounterReducer />

			<br />
			<h2 className="mt-4">Custom Form Hook</h2>

			<Form />
		</div>
	);
}

export default App;
