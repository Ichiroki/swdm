import { PageType } from "../app/types/PageTypes";

function Home({title}: PageType) {

    document.title = title ? "Secret Weapon Deathmatch | " + title : 'Home'

    return (
        <>
            <div className="snow-canvas">
                <div className="snow"></div>
            </div>
        </>
    );
}

export default Home;