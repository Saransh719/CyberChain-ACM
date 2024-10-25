const prompt = require("prompt-sync")();      //defining prompt

function taxcalc(rate,type){
    let cost=rate+(rate*(arr[type-1]/100));
    return (cost);
}

const arr=[1,3,5,7,10];   //5 types of item types
var rate=prompt("Please enter rate of item : ",0);
rate=parseFloat(rate);                                    //if this is not being done, rate was being treated as string and answer was coming wrong
var type=prompt("Please enter type of item : ",0);
type=parseInt(type);                                     // same as above
console.log(`The cost of item is ${taxcalc(rate,type)}`);


