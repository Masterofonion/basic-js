const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let defSep = '+';
    let defAddSep = '|';
    let cell;
    if (options.hasOwnProperty('separator')) {
        defSep = options.separator;   
    }
    
    if (options.hasOwnProperty('additionSeparator')) {
        defAddSep = options.additionSeparator;   
    }
    
    if (options.hasOwnProperty('addition')) {
        let addition = options.addition + defAddSep;
        let fullAddition = Array(options.additionRepeatTimes).fill(addition).join('');
        fullAddition = fullAddition.slice(0,fullAddition.length - defAddSep.length);
        cell = str + fullAddition + defSep;
    } else {
        cell = str + defSep;
    }
    
    
    
    
    let fullStr = Array(options.repeatTimes).fill(cell).join('');
    fullStr = fullStr.slice(0,fullStr.length - defSep.length);
    console.log(fullStr);
    return fullStr;
};

//repeater('la', { repeatTimes: 3 });