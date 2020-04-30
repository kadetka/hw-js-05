// Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n

function getArray (n){
    let arr = [];
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }

    return arr;
}

console.log(getArray(10));