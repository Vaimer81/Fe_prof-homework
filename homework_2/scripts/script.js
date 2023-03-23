// 1. Напишите функцию, которая принимает массив строк и возвращает новый массив строк, в котором все первые буквы каждого слова написаны заглавными буквами.

function capitalizeWords(words){
     return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}
const words = ['hello', 'world', 'how', 'are', 'you'];
const capitalizedWords = capitalizeWords(words);
console.log(capitalizedWords); // ['Hello', 'World', 'How', 'Are', 'You']
// 2. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только положительные числа.

function positiveNumbers(numbers){
    return numbers.filter(number => number > 0);
}
const numbers = [1,2,'two',3,4,-6,-8,9,10,'four',11,15,18,21,30]
const positiv =  positiveNumbers(numbers);
console.log(positiv);

// 3. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только нечетные числа.

function Numbers(numbers){
    return numbers.filter(numbers => numbers % 2 !== 0);
}
const number = []
const oddNumbers = Numbers(numbers);
console.log(oddNumbers); 
// 4. Создайте новый массив, содержащий только элементы исходного массива, которые делятся на три без остатка.


const number1 = []
const newArr = numbers.filter(numbers => numbers %3 === 0);
console.log(newArr);
// 5. Создайте новый массив, содержащий только те элементы исходного массива, которые больше чем 10 и меньше чем 20.

const number2 = []
 const newArr1 = numbers.filter(numbers => numbers>10 && numbers<20);
 console.log(newArr1);

 // 6. Создайте новый массив, содержащий только те элементы исходного массива, которые не являются строками.
 const number3 = []
 const newArr2 = numbers.filter(numbers => typeof numbers !=='string');
 console.log(newArr2);