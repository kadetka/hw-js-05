// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"

const countTotalSalary = function(employees) {
    let sum = 0;
    for (let employee in employees) {
      sum += employees[employee];
    }

    return sum;
  };

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  );