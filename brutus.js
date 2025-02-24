function decrypt(letter, value) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const shift = (alphabets.indexOf(letter) - value + alphabets.length) % alphabets.length;
    return alphabets[shift];
}

function decryptMessage(word, value) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        const decryptValue = decrypt(word[i], value);
        result += decryptValue;
    }
    return result;
} 
const shiftValue = 3; // Replace with the shift value used in encryption

const decryptedWord = decryptMessage(encryptedWord, shiftValue);
console.log("Decrypted Message:", decryptedWord)   