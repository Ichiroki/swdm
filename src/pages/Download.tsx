import { PageType } from "../app/types/PageTypes";
import WebLayout from "../components/WebLayout";

function Home({title}: PageType) {

    document.title = title ? "Secret Weapon Deathmatch | " + title : 'Home'

    return (
        <WebLayout>
            <div className="text-slate-200">
                <div className='flex flex-col lg:flex-row justify-between gap-10'>
                    <div className='lg:w-1/2 mb-6 lg:mb-0 flex items-center justify-center lg:justify-start'>
                        <iframe src="https://www.youtube.com/embed/cc9ujuE_H_U?si=BbIF6aJuNRyzpqZv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="w-full h-[25rem] lg:h-[22.5rem] rounded-3xl"/>
                    </div>
                    <div className='flex flex-col items-center lg:w-1/2 text-center lg:text-start h-full'>
                        <h1 className='text-3xl font-semibold mb-6 text-center'>
                        Selamat datang di [sW] Secret Weapon D/M
                        </h1>
                        <p className='mb-6'>
                        Secret Weapon Deathmatch merupakan server deathmatch dengan multi gamemode yang dikembangkan dari 0 oleh Koky bersama Tim nya (Koky's Deathmatch) dan sekarang dilanjutkan oleh equinnox dan ohmypxl dengan nama baru. Pada sW Deathmatch terdapat macam-macam mode, antara lain Arena/DM, Gangwar, Police Pursuit, dan Duel. 
                        </p>
                        <p className='mb-6'>
                        sW Deathmatch cukup berbeda dari server deathmatch yang sudah ada karena memiliki fitur custom skin yang dapat dilihat oleh player lain juga (0.3DL). Disini juga kalian dapat membuat clan ingame yang berguna untuk chitchat ingame dan juga tim khusus pada gangwar, sehingga kalian dapat melakukan teaming bersama clan kalian saja!
                        </p>
                        <p className='mb-6'>
                        Kalian dapat mendownload cache server pada link dibawah, cache ini diekstrak ke Documents\GTA San Andreas User Files\SAMP\cache. Hal ini diwajibkan untuk pengguna 0.3DL yang tidak dapat mendownload ingame, pengguna 0.3.7 tidak diperlukan untuk mendownload ini.
                        </p>
                        <div className="flex w-full items-center justify-center lg:justify-normal">
                            <div className="platform">
                                <a href="https://discord.gg/tAU72FPD4h" className="before:rounded-md before:hover:p-5 before:block before:absolute before:-inset-1 before:w-0 relative inline-block before:hover:bg-cyan-800 before:hover:w-[8rem] before:transition-[width] before:duration-300 before:ease-in-out before:active:w-full" target="_blank">
                                    <span className="relative text-white flex items-center gap-5 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                                            <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                                        </svg>
                                        <p>
                                            Discord
                                        </p>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}

export default Home;