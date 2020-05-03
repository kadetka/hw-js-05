// Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.

function changeCollection (...arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i].shift();
    }
    return arr;

}

console.log(changeCollection([1,2,3], ['a', 'b', 'c']));