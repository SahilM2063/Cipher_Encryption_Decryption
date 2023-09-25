// generating ascii characters for input and key
const generateAscii = (str) => {
    str = str.split('').map((val) => {
        return val.charCodeAt() - 65;
    });
    console.log(str)
    return str;
}

// generates character string from ascii chars 
const generateChars = (ascii) => {
    ascii = ascii.map(val => String.fromCharCode(val));
    console.log(ascii.join(''));
}

// encryption logic for encryption. also creating matrix from key according to input.
const encrypt = (input, key) => {
    let matrix = [];
    let cipherAscii = [];

    for (let i in input) {
        let values = key.splice(0, input.length);
        matrix.push(values);
    }

    for (let i of matrix) {
        let sum = 0;
        for (let j in i) {
            sum += i[j] * input[j];
        }
        cipherAscii.push((sum % 26) + 65);
    }
    return cipherAscii;
}

// executing.
let input = 'GFG';
let key = 'HILLMAGIC';
let encryptedValues;
input = generateAscii(input);
key = generateAscii(key);
encryptedValues = encrypt(input, key);
let encryptedText = generateChars(encryptedValues);