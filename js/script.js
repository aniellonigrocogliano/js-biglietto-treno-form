const btn = document.getElementById("btn"); // object | null

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

    userAge = parseInt(age);// number
    userKm = parseInt(km);// number

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

    //verifica dati
    // // console.log(userKm, typeof userKm,);
    // // console.log(userAge, typeof userAge,);
    // // console.log(systemKM, typeof systemKM,);
    // // console.log(userPrize, typeof userPrize,);
    // // console.log(userDiscount, typeof userDiscount,);
    // // //stampa risultato
    // // document.getElementById("km").innerHTML = userKm;
    document.getElementById("prize").innerHTML = prize;
    // // document.getElementById("discountnumber").innerHTML = userDiscountNum;
    // // document.getElementById("discountprize").innerHTML = userDiscount;
    // // document.getElementById("userprize").innerHTML = userPrize;
})