//Задание 3
//
// На странице есть контейнер
// <ol id="todo-list"></ol>,
//  необходимо с помощью цикла добавить в него пять задач (элементов <li>) с классом task и текстом,
//  взятым из массива задач из пяти элементов:
//
//  const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
//
// Ожидаемый результат в инспекторе после выполнения скрипта:
//
// <ol id="todo-list">
// 	<li class="task">Buy lemonade</li>
// 	<li class="task">Make toasts</li>
// 	<li class="task">Repair car</li>
// 	<li class="task">Play games</li>
// 	<li class="task">Pet a cat</li>
// </ol>

function Additing(){
     var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
     for (i = 0; i < 5; i++){
         var addLi = document.createElement('li');
         addLi.className = 'task';
         addLi.innerHTML = tasks[i];
         todolist.appendChild(addLi)
     }

}
Additing()