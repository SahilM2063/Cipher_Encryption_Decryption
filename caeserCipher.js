// For Encoding --------------------------------------------------------------------------------------
let plainText = "Transformers"
var caeserEncode = function (plainText, shiftSize) {
    if (shiftSize < 0) {
        return caeserEncode(plainText, shiftSize + 26);
    }
    var cipherText = "";
    for (var i = 0; i < plainText.length; i++) {
        var char = plainText[i];
        if (char.match(/[a-z]/i)) {
            var charCode = plainText.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                char = String.fromCharCode(((charCode - 65 + shiftSize) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                char = String.fromCharCode(((charCode - 97 + shiftSize) % 26) + 97)
            }
        }
        cipherText += char;
    }
    return cipherText;
}
console.log(plainText + " -----> " + caeserEncode(plainText, 4));

// For Decoding ------------------------------------------------------------------------------------ 
let cipherText = "XverwJsvqivw";
var caeserDecode = function (cipherText, shiftSize) {
    if (shiftSize < 0) {
        return caeserDecode(cipherText, shiftSize + 26);
    }
    var plainText = "";
    for (var i = 0; i < cipherText.length; i++) {
        var char = cipherText[i];
        if (char.match(/[a-z]/i)) {
            var charCode = cipherText.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                char = String.fromCharCode(((charCode - 65 - shiftSize) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                char = String.fromCharCode(((charCode - 97 - shiftSize) % 26) + 97)
            }
        }
        plainText += char;
    }
    return plainText;
}
console.log(cipherText + " -----> " + caeserDecode(cipherText, 4));