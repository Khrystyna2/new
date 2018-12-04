const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let countDownStart = new Date('Feb 01 2019 00:00:00').getTime();
let countDownEnd = new Date('Mar 01 2019 00:00:00').getTime();
let x = setInterval(function() {

        let now = new Date().getTime();
        let distance = countDownStart - now;
        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
        if (distance < 0) { 
                let newDistance = countDownEnd - now;
                $('.competition-counter > ul li').css('color', '#ff0000');
                document.getElementById('textCounter').innerHTML = '<img src="image/icons/stopwatch.svg" alt=""> до кінця терміну подачі проектів:';
                document.getElementById('days').innerText = Math.floor(newDistance / (day)),
                document.getElementById('hours').innerText = Math.floor((newDistance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((newDistance % (hour)) / (minute));
        } 
        
}, second);

    

        //map
        function initMap() {
                var location = {lat: 48.9252, lng: 24.7147};
                var map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 15,
                    center: location
                });
    
        }

$(document).ready(function() {
        $('.competition-category__group-button>button').click(function() {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
        });

        $('.menu-btn').on('click', function() {
		$(this).toggleClass('menu-btn_active');
		$('.menu').slideToggle();
        });


        if ($(window).width() > 1024) {
                $('.menu>li>div').hover(function() {
                        $('.menu-dropdown').slideToggle();
                });
        }else if ($(window).width() <= 1024) {
                $('.menu>li>div').click(function() {
                        $('.menu-dropdown').slideToggle();
                });
        }

        $('.competition-category__list-items').click(function() {
                $('.competition-category__info').show();
        });

        $('.close-block').click(function() {
                $('.competition-category__info').hide();
        });
     

});