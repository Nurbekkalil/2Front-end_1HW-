//Задание 4
// На странице есть следующая разметка:
//
// <article>
// <h3>What is Lorem Ipsum?</h3>
// <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
// <h3>Where does it come from?</h3>
// <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. from "The Extremes of Good and Evil" by Cicero</p>
// <h3>Why do we use it?</h3>
// <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
// </article>
//
// Вам необходимо с помощью JavaScript вставить после
// каждого тега <p> тег <hr>, для визуального отделения
// абзацев друг от друга.
//
// Указания:
// ●	Подразумевается, что вышеуказанная разметка
// находится внутри тега <body>.
// ●	Нельзя модифицировать указанную разметку.

var razmetka = document.getElementsByTagName('p');
for(i = 0; i < razmetka.length; i++){
	var newTag = document.createElement('hr');
	razmetka[i].appendChild(newTag);
}
