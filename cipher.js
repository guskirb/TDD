export default caesarCipher;

function caesarCipher(string, shift) {
    const array = string.split("");
    const cipher = [];

    array.forEach(element => {
        cipher.push(toCipher(element, shift));
    });

    return cipher.join('');
}

function toCipher(letter, shift) {
    const alphabet = ['.', ',', '?', '!', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
    let uppercase = false;
    if (letter.toUpperCase() === letter && letter.match(/[a-z]/i)) {
        uppercase = true;
    }
    if (uppercase) {
        return alphabet[(alphabet.indexOf(letter.toLowerCase()) + shift) % alphabet.length].toUpperCase();
    } else {
        return alphabet[(alphabet.indexOf(letter.toLowerCase()) + shift) % alphabet.length];
    }
}