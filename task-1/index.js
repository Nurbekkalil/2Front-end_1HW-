//Задание 1
// На странице есть верстка:
//
// <div id="string-1">Ядра в вёдра, выдру в тундру!</div> 6)
// <div id="string-2">Выдрав с выдры в тундре гетры</div> 3)
// <div id="string-3">В недрах тундры, выдры в гетрах </div> 1)
// <div id="string-4">Вытру гетрой выдре морду </div> 5)
// <div id="string-5">Тырят в вёдра ядра кедров!</div> 2)
// <div id="string-6">Вытру выдрой ядра кедров</div> 4)
//
// Необходимо поочередно обратиться к каждому тэгу в нужном порядке,
// и вывести их содержимое в консоль,
// чтобы получилась осмысленная скороговорка.
//
// Вывод в консоли:
// В недрах тундры, выдры в гетрах
// Тырят в вёдра ядра кедров!
// Выдрав с выдры в тундре гетры
// Вытру выдрой ядра кедров
// Вытру гетрой выдре морду
// Ядра в вёдра, выдру в тундру!

const element1 = document.getElementById('string-1');
const element2 = document.getElementById('string-2');
const element3 = document.getElementById('string-3');
const element4 = document.getElementById('string-4');
const element5 = document.getElementById('string-5');
const element6 = document.getElementById('string-6');

console.log(element6.innerText)
console.log(element3.innerText)
console.log(element1.innerText)
console.log(element5.innerText)
console.log(element2.innerText)
console.log(element4.innerText)