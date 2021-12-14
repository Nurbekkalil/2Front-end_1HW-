//Задание 6
// Напишите программу для создания списка задач, которые будет вводить пользователь:
//
// ●	Для каждого пункта:
// ○	Запрашивайте содержимое пункта у пользователя с помощью prompt.
// ○	Создавайте пункт и добавляйте его к UL.
// ○	Процесс прерывается, когда пользователь нажимает "Отмена" или вводит пустую строку.

function addinfo(){
	var ul = document.createElement('ul');
	document.body.appendChild(ul);
	while (true) {
		var newLi = prompt("Введите текст для пункта списка", "");

		if (newLi === null) {
			break;
		}

		var li = document.createElement('li');
		li.appendChild(document.createTextNode(newLi));
		ul.appendChild(li);
	}
}
addinfo()