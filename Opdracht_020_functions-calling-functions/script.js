
const ageAdult = function(age) {
    if (age >= 18){       
    console.log("Hey there");
    return true;
}   
    console.log("Hey kiddo");
    return false;
};


const greeting = function(age) {
    ageAdult(age);         
    };

greeting(25); // Hey there
greeting(15); // Hey kiddo

//VAT1
const calculateTotal = function(basePrice) {
    return basePrice * 1.21;
};

const amountVat = function(basePrice) {
    return calculateTotal(basePrice) - basePrice;
};

console.log("amount of VAT " +(amountVat(30))); //6.3
console.log(amountVat(135)); //28.35

//VAT2
const calculateBasePrice = function(priceInclVat) {
    return priceInclVat / 1.21;
};
const calculateVat = function(priceInclVat){
    console.log(calculateBasePrice(priceInclVat));
    return priceInclVat - calculateBasePrice(priceInclVat);
};


console.log(calculateVat(10));
