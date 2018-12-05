const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

let countDownStart = new Date('Feb 01 2019 00:00:00').getTime();
// let countDownEnd = new Date('dec 05 2018 13:35:00').getTime();

let startDate = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownStart - now;
        function timer(distance) {
                        $('#days').text( Math.floor(distance / (day)));
                        $('#hours').text( Math.floor((distance % (day)) / (hour)));
                        $('#minutes').text( Math.floor((distance % (hour)) / (minute)));
                }
        timer(distance);

        if (distance < 0) { 
                clearInterval(startDate);
                distance = 0;
                $('.competition-counter > ul li').css('color', '#ff0000');
                timer(distance);
        }

}, second);

/*let endDate = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownEnd - now;
        function timer(distance) {
                $('.competition-counter > ul li').css('color', '#ff0000');
                document.getElementById('textCounter').innerHTML = '<img src="image/icons/stopwatch.svg" alt=""> до кінця терміну подачі проектів:';
                        $('#days').text( Math.floor(distance / (day)));
                        $('#hours').text( Math.floor((distance % (day)) / (hour)));
                        $('#minutes').text( Math.floor((distance % (hour)) / (minute)));
                }
        timer(distance);

        if (distance < 0) { 
                clearInterval(endDate);
                distance = 0;
                timer(distance);
        }

}, second);*/

// const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;

// let currentYear = new Date().getFullYear();
// let startDate = new Date('Feb 01 ' + currentYear + ' 00:00:00');
// let endDate = new Date('Mar 01 ' + currentYear + ' 00:00:00');
// let beforeInterval = null;
// let afterInterval = null;

// function timer(distance) {
//         document.getElementById('days').innerText = Math.floor(distance / (day));
//         document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
//         document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
//         document.getElementById('seconds').innerText = Math.floor((distance % (second * 60)) / second);
// }

// function before() {
//         let now = new Date().getTime();
//         let distance = startDate.getTime() - now;
//         if (distance < 0) {
//                 startAfterTimer();
//         } else {
//                 document.getElementById('textCounter').innerHTML = '<img src="image/icons/stopwatch.svg" alt=""> до початку конкурсу:';
//                 timer(distance);
//         }
// }

// function after() {
//         let now = new Date().getTime();
//         let distance = endDate.getTime() - now;
//         if (distance < 0) {
//                 startBeforeTimer();
//         } else {
//                 $('.competition-counter > ul li').css('color', '#ff0000');
//                 document.getElementById('textCounter').innerHTML = '<img src="image/icons/stopwatch.svg" alt=""> до кінця терміну подачі проектів:';
//                 timer(distance);
//         }
// }

// function startAfterTimer() {
//         clearInterval(beforeInterval);
//         afterInterval = setInterval(after, second);
// }

// function startBeforeTimer() {
//         clearInterval(afterInterval);
//         endDate.setFullYear(currentYear + 1);
//         startDate.setFullYear(currentYear + 1);
//         beforeInterval = setInterval(before, second);
// }

// beforeInterval = setInterval(before, second);




// map
function initMap() {
        var location = { lat: 48.9252, lng: 24.7147 };
        var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: location
        });

}

$(document).ready(function () {
        $('.competition-category__group-button>button').click(function () {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
        });

        $('.menu-btn').on('click', function () {
                $(this).toggleClass('menu-btn_active');
                $('.menu').slideToggle();
        });


        // if ($(window).width() > 1024) {
        //         $('.menu>li>div').hover(function () {
        //                 $('.menu-dropdown').slideToggle();
        //         });
        // } else if ($(window).width() <= 1024) {
        //         $('.menu>li>div').click(function () {
        //                 $('.menu-dropdown').slideToggle();
        //         });
        // }

        if ($(window).width() > 1024) {
                $('.menu>li>div').mouseenter(function () {
                        $('.menu-dropdown').fadeIn(200);
                })
                        .mouseleave(function () {
                                $('.menu-dropdown').fadeOut(200);
                        });
        } else if ($(window).width() <= 1024) {
                $('.menu>li>div').click(function () {
                        $('.menu-dropdown').slideToggle();
                });
        }

        $('.competition-category__list-items').click(function () {
                $('.competition-category__info').show();
        });

        $('.close-block').click(function () {
                $('.competition-category__info').hide();
        });


});