module.exports = {
    display: getFortune
};

function getFortune (){

var quotes = new Array(3);
quotes[0]="Your future is whatever you make it, so make it a good one...";
quotes[1]="You will meet a strange person.";
quotes[2]="Luck is on your side today.";
quotes[3]="Do NOT go in there.";
/* calculate a random index */
var index = Math.floor(Math.random() * quotes.length);
/* display the quotation */
return ("\n" + quotes[index] + "\n");

    
}