window.Cars = (function($, _, Render) {
    const dataUrlSmall = 'http://www.json-generator.com/api/json/get/ctPVOIKOZK?indent=4';
    const dataUrlLarge = 'http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4';

    var data;

    return {
        load,
        selectCar,
        getSelectedCars,
        getCarsByName,
        searchCars,
        renderCars
    };

    function load() {
        Render.showLoader();
        $.get(dataUrlSmall, (response) => {
            data = {cars: response.data};
            renderCars(data);
            Render.hideLoader();
        });
    }

    function selectCar(id, cb) {
        let car = _.find(data.cars, {id});
        car._selected = !car._selected;
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
    }

})(window.jQuery, window._, window.Render);
