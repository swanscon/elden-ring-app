import FormField from "../components/FormField";
import { useState } from "react";
import calculateEquipLoadThreshold from "../functions/calculateEquipLoadThreshold";
import calculateEquipLoad from "../functions/calculateEquipLoad";
import Dropdown from "../components/Dropdown";
import Talismans from "../data/Talismans";

export default function EquipLoadCalculator() {
	const [endurance, setEndurance] = useState(0);
	const [equipLoad, setEquipLoad] = useState(0);
	const [currentLoad, setCurrentLoad] = useState(0);

	const handleEnduranceChange = (value) => {
		setEndurance(value);
	};

	const handleCalculateEndurance = () => {
		setEquipLoad(calculateEquipLoad(endurance));
	};

	const handleItemSelected = (item) => {
		if (item) {
			setEndurance(endurance + item.endurance);
			setEquipLoad(equipLoad * item.equipLoad);
			setCurrentLoad(currentLoad + item.weight);
		}
	};

	return (
		<div>
			<h1>Equip Load Calculator</h1>
			<FormField
				pHolder="Base Endurance"
				onValueChange={handleEnduranceChange}
				onValueSubmit={handleCalculateEndurance}
			/>
			{equipLoad === "Endurance out of range" ? (
				<p>{equipLoad}</p>
			) : (
				<div>
					<p>Light: up to {calculateEquipLoadThreshold(equipLoad, "light").toFixed(2)}</p>
					<p>
						Medium: up to {calculateEquipLoadThreshold(equipLoad, "medium").toFixed(2)}
					</p>
					<p>Heavy: up to {equipLoad.toFixed(1)}</p>
				</div>
			)}

			<div>
				<b>Talisman 1</b>
				<Dropdown dataList={Talismans} onItemSelected={handleItemSelected} />
				<b>Talisman 2</b>
				<Dropdown dataList={Talismans} onItemSelected={handleItemSelected} />
				<b>Talisman 3</b>
				<Dropdown dataList={Talismans} onItemSelected={handleItemSelected} />
				<b>Talisman 4</b>
				<Dropdown dataList={Talismans} onItemSelected={handleItemSelected} />
			</div>
			{/* <div>
				<b>Head</b>
				<Dropdown dataList={Talismans} />
				<b>Chest</b>
				<Dropdown dataList={Talismans} />
				<b>Hands</b>
				<Dropdown dataList={Talismans} />
				<b>Feet</b>
				<Dropdown dataList={Talismans} />
			</div>
			<div>
				<b>Right Armament 1</b>
				<Dropdown dataList={Talismans} />
				<b>Right Armament 2</b>
				<Dropdown dataList={Talismans} />
				<b>Right Armament 3</b>
				<Dropdown dataList={Talismans} />
			</div>
			<div>
				<b>Left Armament 1</b>
				<Dropdown dataList={Talismans} />
				<b>Left Armament 2</b>
				<Dropdown dataList={Talismans} />
				<b>Left Armament 3</b>
				<Dropdown dataList={Talismans} />
			</div> */}
		</div>
	);
}
