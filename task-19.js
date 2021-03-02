const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
    const propValue = []
    for (const product of products) { 
        const keys = Object.keys(product);
        for (const key of keys) {
            if (key === propName) {
                propValue.push(product[key])
            }
        }
    }
    return propValue;

  
  // Пиши код выше этой строки
}


console.log(getAllPropValues('name'));
console.log(getAllPropValues('price'));
console.log(getAllPropValues('quantity'));