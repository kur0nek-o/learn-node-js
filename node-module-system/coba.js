const sayHello = (nama, umur) => {
    return `Halo nama saya ${nama}, umur ${umur} tahun.`;
}

const mahasiswa = {
    nama: 'Bagus Maulana H',
    umur: 18
}

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!');
    }
}

module.exports = {
    sayHello,
    mahasiswa,
    Orang
}