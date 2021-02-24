  
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    
    constructor () {
        this.name = 'DepthCalculator';
    }
    calculateDepth(array) {
        console.log(array);
        if (!Array.isArray(array))  {
            return 0;
        } else{
            let count = [];
            for (let item of array) {
                count.push(this.calculateDepth(item));
                console.log(count);
            }
            return 1 + Math.max(0, ...count);
        }
    }
    
};

