const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let countDown = new Date('Dec 3, 2018 00:00:00').getTime(),
    x = setInterval(function() {

    let now = new Date().getTime();
        let distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
        if (distance <= now ) {
                document.getElementById('days').innerText = 'hello';
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

});