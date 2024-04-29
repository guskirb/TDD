export default reverseString;

function reverseString(string) {
    const stringArray = string.split('').map(i => i.split(''));
    const arrayReverse = [];
    stringArray.forEach(element => {
        arrayReverse.unshift(element);
    });
    return arrayReverse.join('');
}
