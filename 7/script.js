// 1.Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function printEvenNumbersDescending(num1, num2) {
//     let start = Math.max(num1, num2);
//     let end = Math.min(num1, num2);
  
//     for (let i = start; i >= end; i--) {
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//     }
//   }
  
//   // Пример использования функции
//   printEvenNumbersDescending(10, 3);


// 2.Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
// function power(base, exponent = 2) {
//     return Math.pow(base, exponent);
//   }
//   console.log(power(2, 3));
//   console.log(power(4)); 
    

// 3.Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function calculateSum(n) {
//     let sum = 0;
    
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
    
//     return sum;
//   }
//   const result = calculateSum(10);
//   console.log(result); 


//   4.Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

//   function sumEvenOddNumbers(n, m) {
//     let sumEven = 0;
//     let sumOdd = 0;
  
//     for (let i = n; i <= m; i++) {
//       if (i % 2 === 0) {
//         sumEven += i;
//       } else {
//         sumOdd += i;
//       }
//     }
  
//     console.log("Сумма четных чисел:", sumEven);
//     console.log("Сумма нечетных чисел:", sumOdd);
//   }
//   sumEvenOddNumbers(1, 10);
  
// 5.Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. (string.length > string.length) - сравнение длины строк
// Пример: [ 'one', 'two', 'three' ] => 'three'

function findLongestString(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
  
    return longest;
  }
  const strings = ['one', 'two', 'three'];
  const longestString = findLongestString(strings);
  console.log(longestString);  
  
  