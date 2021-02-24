const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  let res = arr;
  let sum = [];
  if (!Array.isArray(arr)) {
      throw Error;
  }
  for (let i = 0; i < res.length; i++) {
      
      if (res[i] == '--discard-next') {
          i++;        
      } else if (res[i] == '--double-prev' && res[i-2] != '--discard-next' && i > 0) {
          sum.push(res[i-1]);  
      } else if ((res[i] == '--double-prev' && res[i-2] == '--discard-next') || 
                 (res[i] == '--double-prev' && i == 0)) {
          continue;    
      } else if (res[i] == '--discard-prev' && res[i-2] != '--discard-next' && i > 0) {  
          sum.pop();        
      } else if ((res[i] == '--discard-prev' && res[i-2] == '--discard-next') || 
                 (res[i] == '--discard-prev' && i == 0)) {
          continue;
      }
      else if (res[i] == '--double-next' && i != res.length-1) {  
          sum.push(res[i+1]);
      } else if (res[i] == '--double-next' && i == res.length-1) {
          continue;          
      }
      else {
          sum.push(res[i]);
      }
      
  }
    
  
  return sum;
};

