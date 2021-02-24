const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (typeof date == 'undefined') {
        return 'Unable to determine the time of year!';
    }
    let x = new Date(1582, 5, 24, 3, 30, 22, 496);
    
    if (Object.prototype.toString.call(date) != '[object Date]') {
        throw Error;
    }
    
 
    let month = date.getMonth();
    if (month < 2 || month > 10) {
        return 'winter';
    }
    
    
    if (month >= 2 && month < 5) {
        return 'spring';
    }
    
    if (month >= 5  && month  < 8) {
        return 'summer';
    }
    
    if (month >= 8 && month  < 11) {
        return 'autumn';
    }
};

