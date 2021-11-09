import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
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
		</div>
	);
}

export default App;
