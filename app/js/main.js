$(function () {

    // *contacts *
   





    // *slider blog standart (blog page 1) *
    $('.blog-page__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g ><path d="M 0.867188 6.535156 L 4.585938 2.816406 C 4.84375 2.558594 5.257812 2.558594 5.511719 2.816406 L 6.128906 3.433594 C 6.386719 3.691406 6.386719 4.105469 6.128906 4.359375 L 3.496094 7 L 6.132812 9.636719 C 6.390625 9.894531 6.390625 10.308594 6.132812 10.5625 L 5.515625 11.183594 C 5.257812 11.441406 4.84375 11.441406 4.589844 11.183594 L 0.871094 7.464844 C 0.609375 7.207031 0.609375 6.792969 0.867188 6.535156 Z M 0.867188 6.535156 "/></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg"  width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g><path d="M 6.132812 7.464844 L 2.414062 11.183594 C 2.15625 11.441406 1.742188 11.441406 1.488281 11.183594 L 0.871094  10.566406 C 0.613281 10.308594 0.613281 9.894531 0.871094 9.640625 L 3.503906 7.003906 L 0.871094 4.367188 C 0.613281 4.109375 0.613281 3.695312 0.871094 3.441406 L 1.484375 2.816406 C 1.742188 2.558594 2.15625 2.558594 2.410156 2.816406 L 6.128906 6.535156 C 6.390625 6.792969 6.390625 7.207031 6.132812 7.464844 Z M 6.132812 7.464844 "/></g></svg></button>',
        infinite: false,
    });


    // *табы product *
    $('.product-tabs__top-item').on('click', function (e) {
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
        fade: true
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
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path style="stroke:none;" d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /> </g> </svg>',
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