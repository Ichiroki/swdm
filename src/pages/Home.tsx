type HomeType = {
    title: string
}

function Home({title}: HomeType) {

    document.title = title ? "ExT X sW | " + title : 'Home'

    return (
        <div className="container bg-slate-900 text-slate-200">
            <div className='flex flex-col lg:flex-row justify-between mx-6 pb-7'>
                <div className='w-1/2'>
                    <iframe width="430" height="300" src="https://www.youtube.com/embed/cc9ujuE_H_U?si=BbIF6aJuNRyzpqZv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>
                </div>
                <div className='flex flex-col items-center w-1/2'>
                    <h1 className='text-3xl font-semibold mb-6'>
                    Secret Weapon Deathmatch
                    </h1>
                    <p className='mb-6'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestiae quod expedita incidunt ex perspiciatis, commodi atque nisi at velit voluptates corrupti quisquam optio veniam quasi. Tempore vitae sit debitis?
                    </p>
                    <p className='mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime, eius quia excepturi qui veritatis iure explicabo, suscipit officia dolorem atque ipsam culpa! Placeat, unde?
                    </p>
                    <div className="flex w-full">
                        <div className="platform">
                            <a href="https://discord.gg/tAU72FPD4h" className="before:rounded-md before:hover:p-5 before:block before:absolute before:-inset-1 before:w-0 relative inline-block before:hover:bg-cyan-800 before:hover:w-[8rem] before:transition-[width] before:duration-300 before:ease-in-out">
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
    );
}

export default Home;