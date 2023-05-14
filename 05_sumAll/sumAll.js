const sumAll = function(a, b) {

    if (isNaN(a) || isNaN(b) || a < 0 || b < 0 || (typeof a == "string") || (typeof b == "string")){
        return("ERROR")
    }
    else{
        let sum = 0;
        if (a>b){
            let g = a;
            a = b;
            b = g;
        }
        for (let i = a; i <= b; i ++){
            sum += i
        }
        return(sum)
    }



};



// Do not edit below this line
module.exports = sumAll;
