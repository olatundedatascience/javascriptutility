function CountItems(item) {
    if(!Array.isArray(item)) {
        return ;
    }
    else {
        return item.length;
    }
}

function TurnToArray(item, separator = ",") {
    return item.split(separator);
}

function generatePin(len = 16) {
    var pins = "012356789012356789012356789012356789012356789";
    var ret ="";
    for(var i=0;i<pins.length;i++) {
        var index = Math.floor(Math.random() * pins.length);
        ret += pins[index];
    }

    return ret.substring(0, len);

}

function generateReferenceNumber(length=20 , encode = false){
    var posible = 987654321098765432109876543210987654321098765432109876543210;
    var probable =  posible;
   // var ret = Math.floor((Math.random()* probable) + probable);
   var ret = Math.floor((Math.random()* probable));
    var rety = ret.toString();
    var returnvalue ="";
    for(var i=0;i<rety.length;i++) {
        var index = Math.floor(Math.random() * rety.length);
        returnvalue += rety[index];
    }
    return returnvalue.substring(0, length);
}

var utility = {

}

utility.Count = function(item) {
    return CountItems(item);
}
utility.InitArray = function(items, sep) {
    return TurnToArray(items, sep);
}
utility.generatePin = function(len) {
    return generatePin(len);
}

utility.generateReference = function(length, encode) {
    return generateReferenceNumber(length, encode);
}

module.exports = utility