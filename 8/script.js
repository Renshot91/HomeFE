// 1.Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// const numbersDiv = document.querySelector('.numbers');
// const numbers = [100, 90, 80, 70, 60, 50];

// for (let i = 0; i < numbers.length; i++) {
//   const paragraph = document.createElement('p');
//   paragraph.textContent = numbers[i];
//   numbersDiv.appendChild(paragraph);
// }



//2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// const strings = [
//     "Первая строка",
//     "Вторая строка",
//     "Третья строка",
//     "Четвертая строка"
//   ];
  
 
//   const container = document.querySelector(".strings_container");
  
//   for (let i = 0; i < strings.length; i++) {
//     const paragraph = document.createElement("p");
//     paragraph.textContent = strings[i];
//     container.appendChild(paragraph);
//   }
  


// 3.Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

// Пример массива с объектами пользователей
// Пример массива с объектами пользователей
let users = [
    {
      first_name: 'Vadim',
      last_name: 'Devish',
      age: 25
    },
    {
      first_name: 'Igor',
      last_name: 'Struli',
      age: 17
    },
    {
      first_name: 'Dasha',
      last_name: 'Dava',
      age: 32
    }
  ];
  

  let usersContainer = document.querySelector('.users_container');
  

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
  

    if (user.age >= 18) {
    
      let card = document.createElement('div');
      card.className = 'user_card';
  
      
      let nameElement = document.createElement('p');
      nameElement.textContent = 'Name: ' + user.first_name + ' ' + user.last_name;
  
      let ageElement = document.createElement('p');
      ageElement.textContent = 'Age: ' + user.age;
  
    
      card.appendChild(nameElement);
      card.appendChild(ageElement);
  
      usersContainer.appendChild(card);
    }
  }
  
  
  