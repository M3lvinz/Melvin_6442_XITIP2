// ini tidak perlu diubah
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//

// Republik Indonesia (indeks ke 7 adalah k)
rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    rl.question("Masukkan indeks yang ingin Anda cek: " , (index) => {
        index = Number(index);
        // periksa apakahh index valid (berada dalam rentang string)
        if (index >= 0 && index < inputString.length){
            const character = inputString.charAt(index);
            console.log(`Karakter pada indeks ${index}: ${character}`);
        }
        else {
            console.log("Indeks tidak valid!");
        }
        rl.close();
    });
});

//Jawaban 