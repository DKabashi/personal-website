$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500);
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('#readAboutMe').on('click', function() {
        $('html, body').animate({
            scrollTop: $('.about').offset().top - 100
        }, 1500);
    });

    $('#viewProjects').on('click', function() {
        $('html, body').animate({
            scrollTop: $('.portfolio').offset().top - 100
        }, 1000);
    });


    $(".infScroll").slice(0, 1).show();
    if ($(".portfolio-item:hidden").length != 0) {
        $("#loadMore").show();
    }
    $("#loadMore").on('click', function(e) {
        e.preventDefault();
        onElementHeightChange(document.body, function() {
            AOS.refresh();
        });
        $(".portfolio-item:hidden").slice(0, 4).fadeIn(1000);
        if ($(".portfolio-item:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }

    });


    function onElementHeightChange(elm, callback) {
        var lastHeight = elm.clientHeight
        var newHeight;

        (function run() {
            newHeight = elm.clientHeight;
            if (lastHeight !== newHeight) callback();
            lastHeight = newHeight;

            if (elm.onElementHeightChangeTimer) {
                clearTimeout(elm.onElementHeightChangeTimer);
            }

            elm.onElementHeightChangeTimer = setTimeout(run, 200);
        })();
    }

    var $btns = $('.btn').click(function() {
        onElementHeightChange(document.body, function() {
            AOS.refresh();
        });
        if (this.id == 'all') {
            $('#parent > div').fadeOut(400);
            $('#parent > div').fadeIn(800);
            $("#loadMore").fadeOut('slow');
        } else {
            $('#parent > div').fadeOut(400);
            var $el = $('.' + this.id).fadeIn(800);
            $('#parent > div').not($el).fadeOut(400);
            $("#loadMore").fadeOut('slow');
        }
        $btns.removeClass('active');
        $(this).addClass('active');
    });

    setTimeout(function() {
        $('.arrow-down').show(); // or fade, css display however you'd like.
    }, 5000);

    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('.arrow-down').hide();
        }
        lastScrollTop = st;
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });





});