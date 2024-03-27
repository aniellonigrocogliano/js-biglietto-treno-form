const btn = document.getElementById("btn"); // object | null
let userAge = 0;
let userKm = 0;
btn.addEventListener("click", function () {
    //Raccolta dati
    const systemKM = 0.21; //number
    const kmImput = document.getElementById("km"); // object | null
    console.log(kmImput);
    const km = kmImput.value; // string
    console.log(km);
    const ageImput = document.getElementById("age"); // object | null
    console.log(ageImput);
    const age = ageImput.value; // string
    console.log(age);
           let userAge = parseInt(age);// number
       let userKm = parseInt(km);// number
    if (isNaN(userAge) || isNaN(userKm)) {
        alert("Non hai inserito tutti i dati necessari per il calcolo.");

    }else if  (userAge<1 || userKm <1) {
        alert("Non puoi inserire valori negativi.");
    }
    else {


        //calcolo prezzo)
        let userPrize = userKm * systemKM; //number
        let userDiscount = 0; //number
        let prize = userPrize;
        let userDiscountNum = 0;

        if (userAge < 18) {
            userDiscount = userPrize * 0.20;
            userDiscountNum = 20;
        } else if (userAge > 65) {
            userDiscount = userPrize * 0.40;
            userDiscountNum = 40;
        } else {
            userDiscount = 0;
        }

        userPrize = userPrize - userDiscount;
        userPrize = userPrize * 100;
        userPrize = Math.round(userPrize);
        userPrize = userPrize / 100;
        userDiscount = userDiscount * 100;
        userDiscount = Math.round(userDiscount);
        userDiscount = userDiscount / 100;
        userDiscount = 0 - userDiscount;
        prize = prize * 100;
        prize = Math.round(prize);
        prize = prize / 100;

        //verifica dati
        console.log(userKm, typeof userKm,);

        //stampa risultato
        document.getElementById("userkm").innerHTML = userKm;
        document.getElementById("prize").innerHTML = prize;
        document.getElementById("discountnumber").innerHTML = userDiscountNum;
        document.getElementById("discountprize").innerHTML = userDiscount;
        document.getElementById("userprize").innerHTML = userPrize;
   
} })