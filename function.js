// დავალება1

 function evenOrOdd(num) {
    if (num % 2 == 0) {
      return "false";
    } else {
      return "true";
    }
  }
  console.log(evenOrOdd(45));
  console.log(evenOrOdd(46));

//  დავალება2

function getCurrencySymbolFromCode(currency) {
    if (currency === 'USD') {
        console.log ("$");
    }
    else if (currency ==='EUR') {
        console.log("€");
    }
    else if (currency === 'GEL'){
        console.log ("ლ");
    }
    else if (currency !=="USD" , currency !=="EUR" , currency !=="GEL" ) {
        console.log (currency)
    }
}
getCurrencySymbolFromCode ('USD');
getCurrencySymbolFromCode ('EUR');
getCurrencySymbolFromCode ('GEL');
getCurrencySymbolFromCode ('GBP');

// დავალება3

function LowCase(text) {
    let UpperCase = text.toLowerCase();
    console.log(UpperCase);
}
LowCase('MY NAME IS JOHN');

// დავალება4 
const array = [55,23,21,48,25,47,66,69,24,2,0,4,7,14]
const evens = array.filter(function(number) {
   return number % 2 === 0;
})

console.log(evens);

// დავალება5

const persons = [
    {name:'Lela', age : 22},
    {name:'Lily', age : 22},
    {name:'Sandro', age : 22},
    {name:'Gio' , age : 22}
]
const findPerson = persons.find((me) => {
    return me.name === 'Lela';
});
console.log (findPerson)