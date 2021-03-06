window.Rankings = (function($, moment) {
    const rankingsElement = $('#rankings-table tbody');

    return {
        reset,
        add
    };

    function reset() {
        $('#rankings-table').hide();
        $('.track-car').css({left: 0});
        rankingsElement.empty();
    }

    function add(car) {
        $('#rankings-table').show();
        let time = moment.utc(car._secondsToArrival * 1000).format('HH:mm:ss');
        rankingsElement.append('<tr><td>' + car._ranking + '</td><td>' + car.name + '</td><td>' + time + '</td></tr>');
    }

})(window.jQuery, window.moment);
