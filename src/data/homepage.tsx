import * as React from "react";

export const AppLogo = () => {
    return (
        <>
            <a className="flex items-center text-yellow-400 no-underline hover:no-underline font-bold text-3xl lg:text-4xl"
               href="#">
                IIT<span
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">tutor</span>
            </a>
        </>
    )
}

export const HeaderMessage = () => {
    return (
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Fun
            <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Way To Learn
            </span>
            Programming!
        </h1>
    )
}

export const SubHeaderMessage = "Kami membantu menghubungkan anda yang ingin belajar pemrograman dengan warga-warga HMIF ITB yang berpengalaman baik dalam pemrograman maupun pengalaman mengajar!"

export const DetailLayananKami = "Berikut adalah layanan pengajaran yang kami sediakan\n" +
    "                    Tutor pengajar merupakan mahasiswa IF/STI ITB yang berpengalaman dan terseleksi"