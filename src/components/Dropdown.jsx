import { useState, useEffect } from "react";

export default function Dropdown(props) {
	const [listItems, setListItems] = useState([]);

	useEffect(() => {
		setListItems(props.dataList);
	}, [props.dataList]);

	const handleItemSelected = (e) => {
		const selectedItem = listItems.find(item => item.name === e.target.value);
		props.onItemSelected(selectedItem);
		console.log(selectedItem);
	};

	return (
		<div>
			<select onChange={handleItemSelected}>
				<option>---</option>
				{listItems.map((item, index) => (
					<option key={index} value={item.name}>
						{item.name}
					</option>
				))}
			</select>
		</div>
	);
}
