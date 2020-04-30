//Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (123)
//Если нет ни одного аргумента, вернуть ноль

function multiply (...args){
    let res = 1;

    for(let arg of args){
        res *= arg;
    };
    if(args.length === 0){
        res = 0;
    }

    return res;
};

console.log(multiply());

