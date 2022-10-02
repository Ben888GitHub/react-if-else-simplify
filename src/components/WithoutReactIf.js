import { useState } from 'react';
import withoutreactif from '../images/withoutreactif.png';

function WithoutReactIf() {
	const [show, setShow] = useState(false);

	return (
		<>
			<h2>Without React If</h2>
			<br />
			{show ? (
				<>
					<button onClick={() => setShow(false)}>Hide Image</button>
					<br />
					<img
						src={withoutreactif}
						alt=""
						style={{ width: 800, height: 700, marginTop: 10 }}
					/>
				</>
			) : (
				<>
					<button onClick={() => setShow(true)}>Show Image</button>
					<h3>Click to show image 👆</h3>
				</>
			)}
		</>
	);
}

export default WithoutReactIf;
