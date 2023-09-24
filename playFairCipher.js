let input = "i ams ssahil";
let key = "onepiece";
let cipherText = "";
const gridChars = "abcdefghijklmnopqrstuvwxyz";

// function for removing duplicate elements
const removeDuplicates = (str) => {
    return str.split("").filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    }).join("");
}

input = input.toLowerCase();
// below REGEX checks for any element which is not a small/capital chars or number and replaces them with empty space.
input = input.replace(/[^a-zA-Z]/g, '');

// also adding one dummy char 'X' after first char if two consecutive same elements occurs.

let inpPairArr = [];   // inputPairArray which is storing pairs of two elements. 
for (let i = 0; i < input.length; i += 2) {
    let currentChar = input[i];
    let nextChar = input[i + 1];

    if (nextChar === currentChar) {
        inpPairArr.push([currentChar, "x"]);
        i--;
    } else if (!nextChar) {
        // // below if block checks weather input string is even in size or not , if not than appending dummy char at the end. (here i m taking "z" as a dummy char)
        inpPairArr.push([currentChar, 'z'])
    }
    else {
        inpPairArr.push([currentChar, nextChar]);
    }

}
console.log("Main Elements Pair Array : \n", inpPairArr)

key = key.toLowerCase();
key = key.replace(/[^a-z]/g, '');
key = key += gridChars;
key = removeDuplicates(key);
key = key.replace('j', '')
// console.log(key)

// created an array for storing and displaying whole 5 X 5 matrix
let playFairArray = [];
for (let i = 0; i < key.length; i += 5) {
    let subArr = [key[i], key[i + 1], key[i + 2], key[i + 3], key[i + 4]];
    playFairArray.push(subArr);
}
console.log("Main 5 X 5 Grid Matrix : \n", playFairArray);

// iterating through inpPairArr and for each pair finding positions of them using findPos function.
for (let i = 0; i < inpPairArr.length; i++) {
    let char1 = inpPairArr[i][0];
    let char2 = inpPairArr[i][1];
    let pos1;
    let pos2;
    let row1;
    let row2;
    for (let x = 0; x < playFairArray.length; x++) {
        for (let y = 0; y < playFairArray.length; y++) {
            const findPos = (arr, str) => {
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr.length; j++) {
                        if (arr[i][j] === str) {
                            return [i, j];
                        }
                    }
                }
            }
            let res1 = findPos(playFairArray, char1)
            let char1X = res1[0];
            let char1Y = res1[1];
            
            let res2 = findPos(playFairArray, char2)
            let char2X = res2[0];
            let char2Y = res2[1];

            // applying and checking for basic rules for playFairCipher code
            if (char1Y === char2Y) {
                pos1 = char1Y;
                pos2 = char2Y;
                row1 = char1X === playFairArray.length - 1 ? 0 : char1X + 1;
                row2 = char2X === playFairArray.length - 1 ? 0 : char2X + 1;
            } else if (char1X === char2X) {
                pos1 = char1Y === playFairArray.length - 1 ? 0 : char1Y + 1;
                pos2 = char2Y === playFairArray.length - 1 ? 0 : char2Y + 1;
                row1 = char1X;
                row2 = char2X;
            }
            else if (char1 === playFairArray[x][y]) {
                pos2 = y;
                row1 = x;
            } else if (char2 === playFairArray[x][y]) {
                pos1 = y;
                row2 = x;
            }
        }
    }
    // concat with cipherText
    cipherText += playFairArray[row1][pos1] + playFairArray[row2][pos2];
}
console.log(cipherText);