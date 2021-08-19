$(document).ready(function() {
    var currentfloor = 2; // перменная, где храниться этаж
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    var counterup = $(".counter-up"); // кнопка увеличения этажа
    var counterdown = $(".counter-down"); // кнопка уменьшения этажа
    // функция при наведении мышь на этаж
    floorPath.on('mouseover', function() {
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        currentfloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentfloor); // записываем значение этажа в счётчик справа
    });
    counterup.on("click", function() {
        // отслеживаем клик по кнопке вверх
        if (currentfloor < 18) { // значение этажа не должно быть больше 18
            currentfloor++; // + 1 этаж
            usCurrentFloor = currentfloor.toLocaleString('en-Us', {
                minimumIntegerDigits: 2,
                useGrouping: false // форматируем значение этажа с 2 на 02
            })
            $(".counter").text(usCurrentFloor); // записываем в счётчик значение этажа 
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем этаж
        }
    })

    counterdown.on("click", function() {
        if (currentfloor > 2) {
            currentfloor--;
            usCurrentFloor = currentfloor.toLocaleString('en-Us', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })
});