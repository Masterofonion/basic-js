const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    
    let sorted = members.filter(function (item) {
        console.log(typeof item);
        return (typeof item === 'string');
    });
    
    return sorted.map(function(item) {
        
        item = item.trim().toUpperCase();
        return item = item[0];   
    }).sort().join('');
  // remove line with error and write your code here
}


//console.log(isWrongType);






