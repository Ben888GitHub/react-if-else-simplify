import './App.css';
import WithoutReactIf from './components/WithoutReactIf';
import WithReactIf from './components/WithReactIf';

function App() {
	return (
		<div className="App">
			<h1>React IF ELSE </h1>
			<br />

			<WithoutReactIf />
			<br />
			<br />
			<WithReactIf />
		</div>
	);
}

export default App;
