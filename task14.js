// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество)

const product = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  const calculateTotalPrice = function(allProdcuts, productName) {
    let total = 0;

    for(let item of allProdcuts){
        if(productName === item.name){
            total += item.price * item.quantity
        }
    }

    return total;
  };

  console.log(calculateTotalPrice(products, 'Дроид'));