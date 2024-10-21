// Name: Vallerie Salindeho
// Exericse #1

// Buatlah fungsi untuk menghitung BMI (body mass index)
// Rumus: BMI = berat / (tinggi * tinggi)
// berat dalam kg dan tinggi dalam meter
// 170 cm = 1.7 m
// fungsi tersebut menerima 2 parameter yaitu berat dan tinggi
// dan mengembalikan output berupa BMI

function calculateBMI(bb, tb) {
    let bmi = bb / (tb * tb);
    return bmi;
}

let bb = 50;
let tb = 1.60;

let bmi = calculateBMI(bb, tb);
console.log("BMI: " + bmi.toFixed(2));