import { Link } from "react-router-dom";

function Tabs() {
    return (
        <>
            <nav className="text-slate-200 w-full">
                <ul className="flex justify-center gap-10 text-xl border-b-4 border-slate-200 border-double flex-wrap">
                    <li className="pb-2">
                        <Link to="/" className="navbar">Home</Link>
                    </li>
                    <li className="pb-2">
                        <Link to="/server" className="navbar">Server</Link>
                    </li>
                    <li className="pb-2">
                        <Link to="/how-to" className="navbar">How To</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Tabs;