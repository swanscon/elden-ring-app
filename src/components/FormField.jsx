import { useState, useEffect } from "react";

export default function FormField(props) {
	const [pHolder, setPHolder] = useState("");

	const handleChange = (e) => {
		props.onValueChange(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onValueSubmit();
	};

	useEffect(() => {
		const current = props.pHolder;
		setPHolder(current);
	}, [props.pHolder]);

	return (
		<div>
			<form>
				<input type="text" placeholder={pHolder} onChange={handleChange}></input>
				<button type="submit" onClick={handleSubmit}>
					OK
				</button>
			</form>
		</div>
	);
}
