import { NavLink } from "react-router-dom";

function Tabs() {
    return (
        <>
            <nav className="text-slate-200 w-full">
                <ul className="flex justify-center gap-10 text-xl border-b-4 border-slate-200 border-double flex-wrap">
                    <li className="pb-2">
                        <NavLink end to="/" className={({isActive}) => isActive ? "bg-slate-200 text-slate-900 p-3 rounded-t-lg" : "rounded-t-lg hover:bg-slate-200 hover:text-slate-900 p-3 transition"}>Home</NavLink>
                    </li>
                    <li className="pb-2">
                        <NavLink to="/administrator" className={({isActive}) => isActive ? "bg-slate-200 text-slate-900 p-3 rounded-t-lg" : "rounded-t-lg hover:bg-slate-200 hover:text-slate-900 p-3 transition"}>Administrator</NavLink>
                    </li>
                    <li className="pb-2">
                        <NavLink to="/server" className={({isActive}) => isActive ? "bg-slate-200 text-slate-900 p-3 rounded-t-lg" : "rounded-t-lg hover:bg-slate-200 hover:text-slate-900 p-3 transition"}>Server</NavLink>
                    </li>
                    <li className="pb-2">
                        <NavLink to="/how-to" className={({isActive}) => isActive ? "bg-slate-200 text-slate-900 p-3 rounded-t-lg" : "rounded-t-lg hover:bg-slate-200 hover:text-slate-900 p-3 transition"}>How To</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Tabs;