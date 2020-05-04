/* Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of*/

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
  
/*
for (let [key, value]  of Object.entries(user)){
    console.log(`${key}: ${value}`);
}
*/

for (const key of Object.keys(user)) {
  console.log(`${key} : ${user[key]}`);
  
};