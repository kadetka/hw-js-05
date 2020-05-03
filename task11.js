// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач"

const findBestEmployee = function(employees) {
    let max = 0;
    let bestEmployee;

    for (let employee in employees) {
        let numOfTasks = employees[employee];
        if (numOfTasks > max) {
            max = numOfTasks;
            bestEmployee = employee;
        }
    }

    return bestEmployee;
  };

  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  );