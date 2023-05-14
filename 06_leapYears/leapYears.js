const divisble = function(n, by){
    if (n % by === 0){
        return true
    }
    else{ 
        return false 
    }
}

const leapYears = function(year) {
    if (divisble(year,4)){
        if (divisble(year, 100)){
            if(divisble(year,400)){
                return true
            }
            else{
                return false
            }

        }
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
