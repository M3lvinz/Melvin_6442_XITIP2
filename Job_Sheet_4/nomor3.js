const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (InputString) => {
    //Contoh property Lenght 
    console.log(`Panjang Kalimat: ${InputString.length}`);
    rl.close();
})

// Jawaban 15