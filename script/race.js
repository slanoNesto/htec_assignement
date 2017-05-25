window.Race = (function($) {
    const RACE_DISTANCE = .3; //km

    return {
        start,
        animateCars,
    };

    function start(cars, cb) {
        for (let i = 0; i < cars.length; i++) {
            let car = cars[i];
            car._secondsToArrival = RACE_DISTANCE / car.speed * 60 * 60;
        }
        animateCars(cars, cb);
    }

    function animateCars(cars, cb) {
        let ranking = 1;
        for (let i = 0; i < cars.length; i++) {
            let car = cars[i];
            let trackLength = $('.track').outerWidth();
            $('#car-' + car.id).stop().animate({left: trackLength - '60'}, car._secondsToArrival * 1000, () => {
                car._ranking = ranking++;
                cb(car);
            });
        }
    }

})(window.jQuery);
