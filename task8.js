// Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять.
// Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

let users = [ {name: 'Denis', age: 29, gender: 'male'} , {name: 'Ivan', age: 20, gender: 'male'}, {name: 'Inna', age: 25, gender: 'female'}];

function funcGetUsers (arr, key, value){
    if(arguments.length === 3) {
        let newArr = arr.filter(el => el.hasOwnProperty(key) && el[key] === value);
        
        return newArr;

    }else{
        console.log('Не все аргументы переданы.');
    }
    
}

console.log(funcGetUsers(users, 'gender', 'male'));