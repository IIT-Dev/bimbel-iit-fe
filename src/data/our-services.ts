import {OurServiceInterface} from "../interfaces/our-service-interface";

export const OurServices: OurServiceInterface[] = [
    {
        packageName: "Bimbingan Privat",
        price: "150.000",
        measurement: "pertemuan / orang",
        hyperlink:"#",
        buttonText: "Coming Soon",
        buttonEnabled: false,
        benefit : [
            "Satu pertemuan 100 menit",
            "Satu Orang",
            "Pengajar merupakan orang yang terseleksi dan unggul"
        ]
    },
    {
        packageName: "Bimbingan Kelompok",
        price: "80.000",
        measurement: "pertemuan / orang",
        hyperlink:"#",
        buttonText: "Coming Soon",
        buttonEnabled: false,
        benefit : [
            "Satu pertemuan 110 menit",
            "Satu regu 3-5 orang",
            "Bisa kolektif atau dibantu untuk pairing",
            "Pengajar merupakan orang yang terseleksi dan unggul"
        ]
    },
    {
        packageName: "Bimbel IIT !!!!",
        price: "35.000",
        measurement: "orang",
        hyperlink:"https://forms.gle/JG6rTa1WBNvKo5P89",
        buttonText: "Daftar Sekarang!",
        buttonEnabled: true,
        benefit : [
            "Acara diselenggarakan pada Kamis 3 Nov dan Jum'at 4 Nov 2022",
            "Satu kelas 7-10 orang",
            "Cocok untuk persiapan UTS",
            "Tersedia kelas offline dan online",
            "Pengajar merupakan orang yang terseleksi dan unggul"
        ]
    },
    {
        packageName: "Custom Lessons",
        price: "-",
        measurement: "-",
        hyperlink:"https://wa.me/0895420592600?text=Halo%20saya%20mau%20request%20untuk%20tutor%2Fpengajaran",
        buttonText: "Hubungi Kami",
        buttonEnabled: true,
        benefit : [
            "Pengajaran materi khusus",
            "Bisa Individu, kelompok kecil, atau organisasi",
            "Pengajar merupakan orang yang terseleksi dan unggul",
            "Harga dan TOR didiskusikan lebih lanjut"
        ]
    }
]