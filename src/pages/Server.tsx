import { PageType } from "../app/types/PageTypes";
import WebLayout from "../components/WebLayout";

function Server({title}: PageType) {

    document.title = title ? "Secret Weapon Deatcmatch | " + title : 'Server'

    return (
        <WebLayout>
            <div className="flex flex-col w-full pb-6">
                <h1 className="text-4xl mb-12 font-semibold text-center">{title}</h1>
                <div className="flex flex-col items-center mx-12 mb-6">
                    <h1 className="mb-6 text-2xl font-semibold border-b-2 w-fit">Perhatian</h1>
                    <p>Sebelum menambahkan IP dibawah ini sebagai server favorit. Pastikan dibaca terlebih dahulu, dikarenakan ada beberapa IP yang mungkin telah dinonaktifkan </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between mx-12">
                    <div className="flex flex-col items-center mb-10">
                    <h1 className="mb-6 text-xl font-semibold border-b-2 w-fit">Death Match</h1>
                        <p>
                            157.254.166.215:7011 / play.swdm.my.id:7011
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="mb-6 text-xl font-semibold border-b-2 w-fit">Attack / Defense (A/D)</h1>
                        <ul>
                            <li className="mb-3">[CJRun-1] : 15.235.149.61:7701 / aad.swdm.my.id:7701</li>
                            <li className="mb-3">[CJRun-2] : 15.235.149.61:7702 / aad.swdm.my.id:7702</li>
                            <li className="mb-3">[RPRun-1] : 15.235.149.61:7703 / aad.swdm.my.id:7703</li>
                            <li className="mb-3">[RPRun-2] : 15.235.149.61:7704 / aad.swdm.my.id:7704</li>
                            <li className="mb-3">[RPRun-3] : 15.235.149.61:7705 / aad.swdm.my.id:7705</li>
                        </ul>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}

export default Server;