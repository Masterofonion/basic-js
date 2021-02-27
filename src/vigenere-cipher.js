const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (type) {
    if (type == false) {
      return this.type = 'reverse';
    } else {
      return this.type = 'direct';
    }  
  }
      
  encrypt (message, key) {
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');
    let k = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/) ) {
        console.log(message[i].charCodeAt(0) + key[k].charCodeAt(0) - 65);
        if ((message[i].charCodeAt(0) + key[k].charCodeAt(0) - 65) < 91) {
          message[i] = String.fromCharCode(message[i].charCodeAt(0) + key[k].charCodeAt(0) - 65);
        } else {
          message[i] = String.fromCharCode(message[i].charCodeAt(0) + key[k].charCodeAt(0) - 91);
        }

        k++;
        if (k > key.length-1) {
          k = 0;
        }
      }  
    }
    if (this.type == 'direct') {
      return message.join(''); 
    } else {
      return message.reverse().join(''); 
    }
  }  
  
  
  decrypt (encryptedMessage, key) {
    encryptedMessage = encryptedMessage.toUpperCase().split('');
    key = key.toUpperCase().split(''); 
    let k = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].match(/[A-Z]/) ) {
        console.log(encryptedMessage[i].charCodeAt(0) - key[k].charCodeAt(0) + 65);
        if ((encryptedMessage[i].charCodeAt(0) - key[k].charCodeAt(0) + 66) > 65) {
          encryptedMessage[i] = String.fromCharCode(encryptedMessage[i].charCodeAt(0) - key[k].charCodeAt(0) + 65);
        } else {
          encryptedMessage[i] = String.fromCharCode(encryptedMessage[i].charCodeAt(0) - key[k].charCodeAt(0) + 91);
        }

        k++;
        if (k > key.length-1) {
          k = 0;
        }
      }  

    }
    if (this.type == 'direct') {
      return encryptedMessage.join(''); 
    } else {
      return encryptedMessage.reverse().join(''); 
    }
  }
}





  

module.exports = VigenereCipheringMachine;

//const dirMach = new VigenereCipheringMachine();
//console.log(dirMach.encrypt('Same length key', 'Samelengthkey'));
