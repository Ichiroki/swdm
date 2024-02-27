import { useState } from "react"
import { NavLink } from "react-router-dom"
import { PageType } from "../app/types/PageTypes"
import WebLayout from "../components/WebLayout"
import botKirimPin from '/assets/howTo/botkirimpin.png'
import tombolRegister from '/assets/howTo/tombolregister.png'

export default function HowTo({title}: PageType) {
    const [isActive, setIsActive] = useState(false)

    document.title = title ? "Secret Weapon Deathmatch | " + title : "How To"

    const toggleAccordion = () => {
        setIsActive(!isActive)
    }

    return (
            <WebLayout>
                <div className="flex flex-col w-full pb-6">
                    <h1 className="text-4xl mb-12 font-semibold text-center">{title}</h1>
                    <div className={`relative overflow-hidden border rounded-xl hover:bg-slate-200 active:bg-slate-200 transition group ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
                        <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                        <div className="h-12 w-full pl-5 flex items-center">
                            <h1 className="group-hover:text-slate-700">
                                Bagaimana cara untuk melakukan Binding Akun saya ?
                            </h1>
                        </div>
                        <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90 group-hover:text-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        {isActive ? (
                            <div className="overflow-hidden bg-white transition-all duration-500">
                                <div className="p-5 text-slate-700">
                                    <ul className="list-disc p-5">
                                        <li className="py-3">Masuk Ke Channel <NavLink to={`https://discord.com/channels/1002076279304097892/1205719972400341033`} className={`text-sky-600 underline decoration-solid hover:no-underline transition-all`}>Register</NavLink></li>
                                        <li className="py-3">
                                            <span className="py-2 block">Pilih Tombol Register</span>
                                            <img src={tombolRegister} alt="" />
                                        </li>
                                        <li className="py-3">Masukkan Nama Yang Sesuai Keinginan</li>
                                        <li className="py-3">
                                            <span className="py-2 block">Jika Sudah, maka botnya akan mengirimkan konfirmasi melalui private message anda seperti gambar berikut
                                            </span>
                                            <img src={botKirimPin} alt="" />
                                        </li>
                                        <li className="py-3">Masukkan Nickname dan Pin yang sudah diberikan oleh bot melalui in game (Jangan diberi tahu kepada siapapun)</li>
                                        <li className="py-3">Terakhir, masukkan Password untuk mendaftarkan akun kamu</li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <>
                            </>
                        )
                        }
                    </div>
                    {/* <div className={`border p-2 ${isActive ? 'active' : ''}`}>
                        <div className="cursor-pointer" onClick={toggleAccordion}>
                            {title}
                        </div>
                        {isActive && <div className="mt-2">Test</div>}
                    </div> */}
                </div>
            </WebLayout>
    )
}
