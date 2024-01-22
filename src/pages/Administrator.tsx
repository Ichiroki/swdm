import AdminList from "../components/AdminList";

type AdminType = {
    title: string
}

function Administrator({title}: AdminType) {

    document.title = title ? "ExT X sW | " + title : 'Administrator'

    return (
        <>
            <div className="flex flex-col items-center">
                <div>
                    <h1 className="text-4xl mb-12 font-semibold">{title}</h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-24 w-full lg:flex-row lg:items-start">
                    <div className="w-2/6">
                        <AdminList title="Code Maintainer" admin={['Kirima', 'eQuinnox']}/>
                    </div>
                    <div className="w-2/6">
                        <AdminList title="Web Developer" admin={['Mirai']}/>
                    </div>
                    <div className="w-2/6">
                        <AdminList title="Management" admin={['Evaga', 'mythicalimmortal', 'NeoNinja', 'snowdr1ve', 'TRanYon']}/>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-24 w-full lg:flex-row lg:items-start">
                    <div className="w-2/6">
                        <AdminList title="Lead Administrator" admin={['Syno', 'jerrykun', 'Biofrost']}/>
                    </div>
                    <div className="w-2/6">
                        <AdminList title="Senior Administrator" admin={['fvcktherules']}/>
                    </div>
                    <div className="w-2/6">
                        <AdminList title="Administrator" admin={['ExT]Yogi', 'Jun', 'Youpy', 'Cusson', 'MDR', 'Ziel', 'Surya']}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Administrator;