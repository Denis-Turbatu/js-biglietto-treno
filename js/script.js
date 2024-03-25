// ********** Km travel request **********
const userTravelKm = parseInt(prompt("Quanti kilometri devi percorrere?"));
document.getElementById("userKm").innerHTML = userTravelKm;
// debug
console.log(userTravelKm + " Km", typeof userTravelKm);

// ********** User age request **********
const userAge = parseInt(prompt("Quanti anni hai?"));
document.getElementById('userAge').innerHTML = userAge;
// debug
console.log(userAge + " anni", typeof userAge);

// ********** Calculate price for ticket **********

let ticketPrice = "";

if (userAge < 18){
    ticketPrice = parseFloat(((userTravelKm * 0.21) * 0.80).toFixed(2));
    // debug
    console.log(ticketPrice, typeof ticketPrice);
}else if(userAge >= 65){
    ticketPrice = parseFloat(((userTravelKm * 0.21) * 0.6).toFixed(2));
    // debug
    console.log(ticketPrice, typeof ticketPrice);
}else{
    ticketPrice = parseFloat((userTravelKm * 0.21).toFixed(2));
    // debug
    console.log(ticketPrice, typeof ticketPrice);
}

document.getElementById('ticketPrice').innerHTML = ticketPrice + " €";
