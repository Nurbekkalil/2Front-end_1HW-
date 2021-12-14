//Задание 2
// На странице есть верстка
//
// <div class="element">Element 1</div>
// <div class="element">Element 2</div>
// <div class="element">Element 3</div>
// <div class="element">Element 4</div>
// <div class="element">Element 5</div>
// <div class="element">Element 6</div>
//
// С помощью JS необходимо первым трем элементам
// задать красный цвет текста, а остальным трем - зеленый.


function painting() {
    var paint = document.querySelectorAll('.element');
    var i;
    for(i = 0; i < paint.length; i++){
        paint[i].style.color = 'green';
        if(i < 3){
            paint[i].style.color = 'red'
        }
    }
}
painting()


// const paint = document.querySelectorAll('.element');
// const painting = () => {
//     if (paint.length < 3) {
//         paint.style.color = 'red'
//     } else {
//         paint.style.color = 'green'
//     }
// }
// painting()