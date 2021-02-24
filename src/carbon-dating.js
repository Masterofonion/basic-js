const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(OLD_ACTIVITY) {
    if (typeof OLD_ACTIVITY == 'undefined') {
        return false;        
    }
    
    let re = /[0-9.]/g;
    
    if (typeof OLD_ACTIVITY != 'string') {
        return false;
    }
    
    
    if (OLD_ACTIVITY.match(re) === null) {
        return false;
    }
    
    if (OLD_ACTIVITY.match(re).length != OLD_ACTIVITY.length || OLD_ACTIVITY.length == 0) {
        return false;        
    }
    
    if (Number(OLD_ACTIVITY) <= 0 || Number(OLD_ACTIVITY) > 15) {
        return false;
    }               
    
    
    return Math.ceil(Math.log(MODERN_ACTIVITY / OLD_ACTIVITY) / (Math.log(2) / HALF_LIFE_PERIOD));
    
  
};

//console.log(dateSample(' '))
