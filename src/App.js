import "./App.css";
import { Routes, Route } from "react-router-dom";
import EquipLoadCalculator from "./pages/EquipLoadCalculator";
import Home from "./pages/Home";
import MainNav from "./components/MainNav";

function App() {
	return (
		<div className="App">
			<MainNav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/equip-load" element={<EquipLoadCalculator />} />
			</Routes>
		</div>
	);
}

export default App;
