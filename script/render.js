window.Render = (function($) {
    const loaderElement = $('#main-loader');

    return {
        component,
        showLoader,
        hideLoader
    }

    function component(component, data) {
        let source = $('#' + component + '-template').html();
        let template = Handlebars.compile(source);
        let html = template(data);
        $('.' + component + '-container').html(html);
    }

    function showLoader() {
        loaderElement.addClass('is-active');
    }

    function hideLoader() {
        loaderElement.removeClass('is-active');
    }

})(jQuery);
