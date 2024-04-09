import { NavLink } from "react-router-dom";

export default function MainNav() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/equip-load">Equip Load</NavLink>
        </div>
    )
}