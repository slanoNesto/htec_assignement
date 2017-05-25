window.Cars = (function($, _, Render) {
    const dataUrlSmall = 'http://www.json-generator.com/api/json/get/ctPVOIKOZK?indent=4';
    const dataUrlLarge = 'http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4';

    var data;

    return {
        load,
        select,
        getSelectedCars,
        searchCars
    };

    function load() {
        Render.showLoader();
        $.get(dataUrlSmall, (response) => {
            data = {cars: response.data};
            renderCars(data);
            Render.hideLoader();
        });
    }

    function select(id, cb) {
        let car = _.find(data.cars, {id});
        car._selected = !car._selected;
        markSelected(car);
        cb();
    }

    function getSelectedCars() {
        return _.filter(data.cars, {_selected: true});
    }

    function getCarsByName(name) {
        return _.filter(data.cars, (car) => {
            return _.includes(car.name, name)
        });
    }

    function searchCars(term) {
        let cars = getCarsByName(term);
        renderCars({cars});
    }

    function renderCars(data) {
        Render.component('cars', data);
        markSelectedAll(data.cars);
    }

    function markSelected(car) {
        if (car._selected) {
            $('#card-' + car.id).addClass('selected');
        } else {
            $('#card-' + car.id).removeClass('selected');
        }
    }

    function markSelectedAll(cars) {
        for (let i = 0; i < cars.length; i++) {
            markSelected(cars[i]);
        }
    }

})(window.jQuery, window._, window.Render);
