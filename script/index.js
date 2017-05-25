(function($, Cars, Rankings, Race) {
    init();

    function init() {
        Cars.load();
    }

    function carSelect() {
        resetState();
        let carId = $(this).data().carId;
        Cars.select(carId, () => {
            Race.renderTrack({cars: Cars.getSelectedCars()});
        });
    }

    function startRace() {
        Rankings.reset();
        let cars = Cars.getSelectedCars();
        Race.start(cars, Rankings.add);
    }

    function searchCars() {
        let term = $('#search-cars-input').val();
        Cars.searchCars(term);
    }

    function resetState() {
        Race.stop();
        Rankings.reset();
    }

    //BIND EVENTS
    $(document).on('click', '.car', carSelect);
    $(document).on('click', '#start-btn', startRace);
    $('#search-cars-form').on('submit', searchCars);

})(window.jQuery, window.Cars, window.Rankings, window.Race);
