import { useState } from 'react';
import { If, Then, Else } from 'react-if';
import withreactif from '../images/withreactif.png';

function WithReactIf() {
	const [show, setShow] = useState(false);

	return (
		<>
			<h2>With React If</h2>
			<br />
			<If condition={show}>
				<Then>
					<button onClick={() => setShow(false)}>Hide Image</button>
					<br />
					<img
						src={withreactif}
						alt=""
						style={{ width: 800, height: 700, marginTop: 10 }}
					/>
				</Then>
				<Else>
					<button onClick={() => setShow(true)}>Show Image</button>
					<h3>Click to show image 👆</h3>
				</Else>
			</If>
		</>
	);
}

export default WithReactIf;
