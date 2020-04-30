//Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа

function getCodeStringFromText (string){
    let str = '';

    for(let i = 0; i < string.length; i++){
        str += string.charCodeAt(i) + ' ';
    }

    return str;
};

console.log(getCodeStringFromText('hello'));