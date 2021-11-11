$(function () {

    // *табы product *
    $('.product-tabs__top-item').on('click', function(e) {
        e.preventDefault(); //отменяет стандартную обработку по ссылке
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });






    // * слайдер product *
    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,

    });
    $('.product-slide__big').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        arrows: false,
        fade:true
    });





    $('.shop-content__filter-btn').on('click', function () {
        $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
        $(this).addClass('shop-content__filter-btn--active');
    });


    $('.button-list').on('click', function () {
        $('.product-item').addClass('product-item--list');
    });

    $('.button-grid').on('click', function () {
        $('.product-item').removeClass('product-item--list');
    });



    $('.select-style, .product-one__item-num').styler();

    // * фильтр shop page *

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            //  обозначение диапозона цен без передвижения ползунка
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            //  передача данных фильтра в span
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });










    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    });


    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true,
    });



    // ***************************
    // * дата завершения таймера *

    const endtime = 'December 31 2021, 23:59 GMT+0300';


    // приводим к стандартному виду 03:04:05, вместо 3:4:5
    function makeCorrectDate(uncorrectDate) {
        let correctDate = uncorrectDate;
        if (uncorrectDate < 10) {
            correctDate = '0' + uncorrectDate;
        }
        return correctDate;
    }

    // сколько времени осталось
    function getDateRemaining(timesup) {
        // total = оставшееся вермя
        var total = Date.parse(timesup) - Date.now();
        var seconds = Math.floor((total / 1000) % 60);
        var minutes = Math.floor((total / 1000 / 60) % 60);
        var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        var days = Math.floor(total / (1000 * 60 * 60 * 24));
        // вывод объектов
        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // инициализация таймера на самом сайте
    function setTime(id, timesup) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            // обновление таймера каждые 1000мс
            timeInterval = setInterval(update, 1000);

        function update() {
            // результат функции getDateRemaining
            let total = getDateRemaining(timesup);
            // Проверка на ноль
            var nowdate = Date.now();
            if (nowdate <= Date.parse(endtime)) {
                var nowdate = Date.now();
                days.textContent = makeCorrectDate(total.days);
                hours.textContent = makeCorrectDate(total.hours);
                minutes.textContent = makeCorrectDate(total.minutes);
                seconds.textContent = makeCorrectDate(total.seconds);
            } else {
                days.textContent = 0;
                hours.textContent = 0;
                minutes.textContent = 0;
                seconds.textContent = 0;
            }


            // Окончания часов
            switch (total.days) {
                case 1:
                case 21:
                case 31:
                case 41:
                case 51:
                    correct__days = "Days";
                    // console.log(total.days, correctDays); // DEBUG
                    break;
                case 2:
                case 3:
                case 4:
                case 22:
                case 23:
                case 24:
                case 32:
                case 33:
                case 34:
                case 42:
                case 43:
                case 44:
                case 52:
                case 53:
                case 54:
                    correct__days = "Days";
                    // console.log(total.days, correctDays); // DEBUG
                    break;
                default:
                    correct__days = "Days";
                // console.log(total.days, correctDays); // DEBUG
            }
            document.querySelector('.uncorrect__days').textContent = correct__days;

            // Окончания часов
            switch (total.hours) {
                case 1:
                case 21:
                case 31:
                case 41:
                case 51:
                    correct__hours = "Hours";
                    // console.log(total.hours, correctHours); // DEBUG
                    break;
                case 2:
                case 3:
                case 4:
                case 22:
                case 23:
                case 24:
                case 32:
                case 33:
                case 34:
                case 42:
                case 43:
                case 44:
                case 52:
                case 53:
                case 54:
                    correct__hours = "Hours";
                    // console.log(total.hours, correctHours); // DEBUG
                    break;
                default:
                    correct__hours = "Hours";
                // console.log(total.hours, correctHours); // DEBUG
            }
            document.querySelector('.uncorrect__hours').textContent = correct__hours;

            // Окончания минут
            switch (total.minutes) {
                case 1:
                case 21:
                case 31:
                case 41:
                case 51:
                    correct__minutes = "Minutes";
                    // console.log(total.minutes, correctMinutes); // DEBUG
                    break;
                case 2:
                case 3:
                case 4:
                case 22:
                case 23:
                case 24:
                case 32:
                case 33:
                case 34:
                case 42:
                case 43:
                case 44:
                case 52:
                case 53:
                case 54:
                    correct__minutes = "Minutes";
                    // console.log(total.minutes, correctMinutes); // DEBUG
                    break;
                default:
                    correct__minutes = "Minutes";
                // console.log(total.minutes, correctMinutes); // DEBUG
            }
            document.querySelector('.uncorrect__minutes').textContent = correct__minutes;

            // Окончания секунд
            switch (total.seconds) {
                case 1:
                case 21:
                case 31:
                case 41:
                case 51:
                    correct__seconds = "Seconds";
                    // console.log(total.seconds, correctSeconds); // DEBUG
                    break;
                case 2:
                case 3:
                case 4:
                case 22:
                case 23:
                case 24:
                case 32:
                case 33:
                case 34:
                case 42:
                case 43:
                case 44:
                case 52:
                case 53:
                case 54:
                    correct__econds = "Seconds";
                    // console.log(total.seconds, correctSeconds); // DEBUG
                    break;
                default:
                    correct__seconds = "Seconds";
                // console.log(total.seconds, correctSeconds); // DEBUG
            }
            document.querySelector('.uncorrect__seconds').textContent = correct__seconds;
        }

    }
    setTime('timer', endtime);



});