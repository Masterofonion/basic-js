const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let data = {turns: 0, seconds: 0};
    data.turns = 2 ** disksNumber - 1;
    data.seconds = Math.floor(data.turns/turnsSpeed * 3600);
    return data;
};
