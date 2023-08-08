const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan kata yang ingin Anda cari: ", (kataCari) => {
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1){
            console.log(`Kata ${kataCari} ditemukan pada indeks ${indeksKata}`)
        }
        else {
            console.log(`Kata ${kataCari} tidak ditemukan dalam kalimat.`)
        }
        rl.close();
    });
});

// Angka 5 pertamakali muncul pada indeks 4