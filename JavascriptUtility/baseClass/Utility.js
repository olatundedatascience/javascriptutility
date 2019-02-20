var utility = require('../functions/count_items');
class utilities {
    constructor(){

    }

    static count(item) {
        return utility.Count(item);
    }
    static generateArray(items, sep) {
        return utility.InitArray(items, sep)
    }
    static generatePin(len = 20) {
        return utility.generatePin(len);
    }
    static generateReference(length, encode = false) {
        return utility.generateReference(length, encode);
    }
}

module.exports = utilities;
