//Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). 
//Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”.

function random (min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function guessNumber (number, random){
    let result = '';
   if(number >= 1 && number <= 10){
       if(number === random){
           result += 'Вы выиграли';
       }else{
           result += `Вы не угадали ваше число ${number} а выпало число ${random}`;
       }
   }
   return result;
}

console.log(guessNumber(8, random(1, 10)));