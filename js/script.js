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
    ticketPrice = ((userTravelKm * 0.21) * 0.80);
    // debug
    console.log(ticketPrice, typeof ticketPrice);
}else if(userAge >= 65){
    ticketPrice = ((userTravelKm * 0.21) * 0.6);
    // debug
    console.log(ticketPrice, typeof ticketPrice);
}else{
    ticketPrice = (userTravelKm * 0.21);
    // debug
    console.log(ticketPrice, typeof ticketPrice);   
}

document.getElementById('ticketPrice').innerHTML = (ticketPrice).toFixed(2) + " €";
