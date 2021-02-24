const CustomError = require("../extensions/custom-error");

module.exports = function countCats (matrix) {

    let row = matrix.reduce(function(preItem, item) {
        return preItem.concat(item);             
    }, []);  
    return row.reduce(function(preItem, item){
        if (item == '^^') {
            console.log(item);
            return preItem +=1;
        } else {
            return preItem;
        }
    }, 0);

};
