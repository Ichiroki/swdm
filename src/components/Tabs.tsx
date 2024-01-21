import { NavLink } from "react-router-dom";

function Tabs() {
    return (
        <>
            <nav className="text-slate-200 w-full">
                <ul className="flex justify-center mb-24 gap-10 text-xl border-b-4 border-slate-200 border-double">
                    <li className="pb-2">
                        <NavLink end to="/" className={({isActive}) => isActive ? "bg-slate-200 text-slate-900 p-3 rounded-t-lg" : "rounded-t-lg hover:bg-slate-200 hover:text-slate-900 p-3 transition"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/administrator" className={({isActive}) => isActive ? "bg-slate-200 text-slate-900 p-3 rounded-t-lg" : "rounded-t-lg hover:bg-slate-200 hover:text-slate-900 p-3 transition"}>Administrator</NavLink>
                    </li>
                    <li>
                        <NavLink to="/server" className={({isActive}) => isActive ? "bg-slate-200 text-slate-900 p-3 rounded-t-lg" : "rounded-t-lg hover:bg-slate-200 hover:text-slate-900 p-3 transition"}>Server</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Tabs;