// Print first letter

function returnFirst(word, func){
    func(word.charAt(0));
}

returnFirst("man", function(n){
    return n;
});


// Print last letter

function returnLast(word, funct){
    funct(word.slice(word.length-1));
}

returnFirst("foot", function(n){
    return n;
});

// return a string that contains first and last character


// return a string that contains first and last character
    
function getFirstAndLast(word, res){

    returnFirst(word, function(first){
                
        returnLast(word, function(last){
        
            res(first + last);
        });
    });     
}


getFirstAndLast("watermelon", function(newStr) {
    console.log(newStr);
});