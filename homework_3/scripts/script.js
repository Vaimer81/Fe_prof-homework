

//Сформировать новый массив, в который попадут только возраст пользователей => [28, 18, 32, 14, 54]
const users = [
    { name: 'Olya', age: 28 },
    { name: 'Ivan', age: 18},
    { name: 'Charlie', age: 32},
    { name: 'Irina', age: 14},
    { name: 'Eve', age: 54,active: true}
  ];
  
  console.log(users.map(({ age}) =>  age));

  // 2. Сформировать новый массив, в который попадет информация о каждом пользователе в формате 'Name: <firstname>, Age: <age>'

  const userInfo = users.map(user => `Name: ${user.name}, Age: ${user.age}`);

console.log(userInfo);

// 3. Сформировать новый массив, в который попадут только те пользователи, чье имя начинается на I

const usersWithI = users.filter(user => user.name.startsWith('I'));

console.log(usersWithI);

// ***
// 1. Сформировать новый массив, в который попадет информация о каждом совершеннолетнем пользователе в формате 'Name: <firstname>, Age: <age>'
const adultUsers = users
  .filter(user => user.age >= 18)
  .map(user => `Name: ${user.name}, Age: ${user.age}`);
  console.log(adultUsers);


// 2. Сформировать новый массив, в который попадут только активные и совершеннолетние пользователи
const activeAdultUsers = users
.filter(user => user.age >= 18 && user.active)
  .map(user => `Name: ${user.name}, Age: ${user.age}`);
  console.log(activeAdultUsers);
// 3. Сформировать новый массив без пользователей, чье имя начинается на букву O
const filteredUsers = users.filter(user => !user.name.startsWith('O'));
console.log(filteredUsers);
// 4. Сформировать новый массив, в который попадут только имена активных и совершеннолетних пользователей в нижнем регистре
const result = users
  .filter(user => user.active && user.age >= 18) // фильтруем только активных и совершеннолетних пользователей
  .map(user => user.name.toLowerCase()); // переводим их имена в нижний регистр и формируем новый массив

console.log(result);

// ****
// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())

// создаем новый массив, содержащий копии пользователей из исходного массива
const sortedUsers = [...users];

// применяем метод sort() к новому массиву, передав ему функцию сравнения пользователей по возрасту
sortedUsers.sort((a, b) => a.age - b.age);

// выводим результат
console.log(sortedUsers);
// 2. Найти сумму возрастов всех пользователей (.reduce())

// вычисляем сумму возрастов всех пользователей с помощью метода reduce()
const totalAge = users.reduce((acc, user) => acc + user.age, 0);

// выводим результат
console.log(totalAge);