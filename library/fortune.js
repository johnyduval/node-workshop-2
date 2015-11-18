module.exports = {
    display: getFortune
};

function getFortune (){

var quotes = new Array(3);
quotes[0]="'Your future is whatever you make it, so make it a good one...'<p>";
quotes[1]="'You will meet a strange person.'<p>";
quotes[2]="'Luck is on your side today.'<p>";
quotes[3]="'Do NOT go in there.'<p>";
/* calculate a random index */
var index = Math.floor(Math.random() * quotes.length);
/* display the quotation */
document.write("<p><DL>\n");
document.write("<p><DT>" + quotes[index] + "\n");
document.write("</DL>\n");
    
}