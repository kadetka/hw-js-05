//Создать функцию, которая принимает строку и возвращает строку-перевертыш

function reverseString (str){
    let arrStr = str.split('');
    let reverseStr = arrStr.reverse().join('');
    return reverseStr;
}

console.log(reverseString('test'));