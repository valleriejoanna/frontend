// Name: Vallerie Salindeho
// Exericse #3

// Buatlah object dengan properti:
// 1. firstName
// 2. weight
// 3. height
// 4. function calculateBMI (gunakan tabel berikut untuk meanmpilakn hasil)
// 5. BMI: properti baru hasil perhitungan function calculateBMI

let person = {
    firstName: "Vallerie",
    weight: 60,
    height: 1.6,
    calculateBMI: function(){
        let bmi = thiss.weight/(this.height * this.height)
        this.BMI = bmi;
        if (bmi < 16.0){
            console.log("Severely underweight")
        }else if (bmi >= 16.0 && bmi <= 18.4){
            console.log("Underweight");
        }else if (bmi >= 18.5 && bmi <= 24.9){
            console.log("Normal");
        }else if (bmi >= 25.0 && bmi <= 29.9){
            console.log("Overweight");
        }else if (bmi >= 30.0 && bmi <= 34.9){
            console.log("Moderately Obese");
        }else if (bmi >= 35.0 && bmi <= 39.9){
            console.log("Severely Obese");
        }else if (bmi >= 40.0){
            console.log("Morbidly Obese");
        }
    },
};
person.calculateBMI();