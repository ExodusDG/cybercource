$(document).ready(function() {
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {

        // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
        if (this.hash !== "") {
            // Запретить поведение щелчка якоря по умолчанию
            event.preventDefault();

            // Хранить хэш
            var hash = this.hash;

            // Использование метода animate() jQuery для добавления плавной прокрутки страницы
            // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                window.location.hash = hash;
            });
        } // Конец, если
    });
    $('.mobile-navbar-links').hide();
    $('.hamburger').click(function() {
        $('#hamburger-id').toggleClass('is-active');
        $('.navbar-mobile-menu').toggleClass('mobile-background-active');
        $('.mobile-navbar-links').toggle();
        if (('.navbar-mobile-menu').hasClass("mobile-background-active")) {
            return false;
        } else {
            $('.navbar-mobile-menu').addClass('mobile-background-default');
        }
    });
});