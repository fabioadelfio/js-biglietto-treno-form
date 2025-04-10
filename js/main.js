// # form element
const fullnameInput = document.getElementById(`fullname-input`);
const kmInput = document.getElementById(`km-input`);
const ageGroupInput = document.getElementById(`age-group-input`);

console.log(fullnameInput);
console.log(kmInput);
console.log(ageGroupInput);

const ticketForm = document.getElementById(`ticket-form`);

ticketForm.addEventListener(`submit`, function (event) {
    event.preventDefault();
    
    const fullname = fullnameInput.value;
    const km = parseInt(kmInput.value);
    const ageGroup = ageGroupInput.value;
    
    const myTicket = document.getElementById(`my-ticket`);
    const passengerName = document.getElementById(`passenger-name`);
    const offerType = document.getElementById(`offer-type`);
    const ticketPrice = document.getElementById(`ticket-price`);
    
    
    if(!fullname) return;
    if(isNaN(km)) return;
    if(!ageGroup) return;

    myTicket.classList.remove(`d-none`);
    myTicket.classList.remove(`d-block`);
    
    // Calcolo del prezzo del biglietto
    const price = 0.21 * km;
    let discountPerc = ``;
    let discountAmount = ``;
    let finalPrice = ``;

    if (ageGroup === `Minorenne`) {
        discountPerc = 20;
        discountAmount = price * discountPerc / 100;
        finalPrice = price - discountAmount;
        offerType.append(`Biglietto Minorenne`);
    } 
    else if (ageGroup === `Over 65`) {
        discountPerc = 40;
        discountAmount = price * discountPerc / 100;
        finalPrice = price - discountAmount;
        offerType.append(`Biglietto Over 65`);
    }
    else if (ageGroup === `Maggiorenne`){
        finalPrice = price;
        offerType.append(`Biglietto Standard`);
    }
    
    console.log(`Biglietto:`);
    console.log(`Nome e cognome: ${fullname}`);
    console.log(`Km da percorrere ${km}`);
    console.log(`Fascia d'età: ${ageGroup}`);
    console.log(`Il prezzo del biglietto è: ${finalPrice.toFixed(2)} €`);

    passengerName.append(fullname);
    ticketPrice.append(`${finalPrice.toFixed(2)} €`);
})



