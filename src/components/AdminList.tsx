type AdminListType = {
    title: string
    admin: string[]
}

function AdminList({title, admin}: AdminListType) {
    return (
        <>
            <div className="mb-12 flex flex-col items-center">
                <h1 className="text-2xl text-center mb-6 font-semibold border-b-2 w-fit">{title}</h1>
                <ul className="flex flex-col items-center justify-center gap-10 text-lg">
                    {
                        admin.map((a) => (
                            <li>{a}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default AdminList;