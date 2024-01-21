function Server() {
    return (
        <>
            <div className="flex flex-col w-full pb-6">
                <h1 className="text-center text-3xl font-semibold">Server</h1>
                <div className="flex justify-between mx-12">
                    <div className="flex flex-col items-center">
                        <h1 className="mb-6">Death Match</h1>
                        <p>
                            157.254.166.215:7011 / play.swdm.my.id:7011
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="mb-6">Attack / Defense (A/D)</h1>
                        <ul>
                            <li>[CJRun-1] : 15.235.149.61:7701 / aad.swdm.my.id:7701</li>
                            <li>[CJRun-2] : 15.235.149.61:7702 / aad.swdm.my.id:7702</li>
                            <li>[RPRun-1] : 15.235.149.61:7703 / aad.swdm.my.id:7703</li>
                            <li>[RPRun-2] : 15.235.149.61:7704 / aad.swdm.my.id:7704</li>
                            <li>[RPRun-3] : 15.235.149.61:7705 / aad.swdm.my.id:7705</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Server;