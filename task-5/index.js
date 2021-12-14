//Задание 5
// Дана такая разметка:
//
// <div id="cart-items">
// 	<div class="item">Milk 1 l.<span class="qty">x 2</span></div>
// 	<div class="item">Cola 1.5 l. <span class="qty">x 1</span></div>
// 	<div class="item">Bread<span class="qty">x 2</span></div>
// 	<div class="item">Cheese<span class="qty">x 1</span></div>
// 	<div class="item">Chocolate bar<span class="qty">x 3</span></div>
// </div>
//
// Необходимо с помощью JavaScript удалить элемент
// "Cola 1.5 l" и заменить товар "Chocolate bar" на "Canned Fish",
// количеством 4 штуки.
//
// Указания:
// ●	Для удаления использовать .remove()
// ●	Для замены использовать .replaceChild()
// ●	Подразумевается, что вышеуказанная разметка находится внутри тега <body>.



function Remove(){
    var textnode = document.createTextNode("Canned Fish");
    var x = document.getElementById("cart-items");
    var kol = document.createElement("span.qty");
    var textnodekol=document.createTextNode(" x 4");
    kol.appendChild(textnodekol);
    x.children[1].remove();
    x.replaceChild(textnode, x.lastChild);
    x.appendChild(kol, x.lastChild);
}
Remove()