// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств

const countProps = function(obj) {
    return Object.keys(obj).length;
  };

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));