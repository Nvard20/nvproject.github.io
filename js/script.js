$(document).ready(function() {
    $(window).scrollTop(0);
});

var toggle = true;
$('.text-block').click(function() {
    if (toggle) {
        $('.text-block').animate({
            'bottom': "288px"
        });
        $(this).next().show(500);
        $('.form').css({ 'bottom': '20px' });
        toggle = false;
    } else {
        $('.text-block').animate({
            'bottom': "-42px"
        });
        $(this).next().hide(200);
        $('.contacts-form').css({ 'top': '64px' });

        toggle = true;
    }

});

function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}


// application

AOS.init({
    duration: 1500,
})

$(document).ready(function() {


    $('<img/>').attr('src', 'img/frame.jpg').on('load', function() {
        $(this).remove(); // prevent memory leaks as @benweet suggested
        $('.banner').css('background-image', 'url(img/frame.jpg)');
        $('.logoImage').removeClass('displayNone');
        $('.mainText').removeClass('displayNone');
        $('.individuals').removeClass('displayNone');
        // $('.individuals').css()
    });



    $(document).delegate('.open', 'click', function(event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
});




$(".open1").click(function() {

    $(".mobile_open1").slideToggle()

})
$(".prefent").click(function(event) {
    event.preventDefault();

});



// window.scrollTo(0, 0);
// window.scrollTo()

let animated = false;
document.addEventListener('scroll', function(event) {
    if (window.pageYOffset > 250 && !animated) {
        addAnimationToText();
    }
})


function addAnimationToText() {
    animated = true;
    var speed = 0.5;
    var h1 = document.querySelector('.h2');
    var p = document.querySelector('.p');
    var c = document.querySelector('.c')
    var d = document.querySelector('.d')

    var delay = h1.innerHTML.length;
    var delay2 = p.innerHTML.length + h1.innerHTML.length + 1200;
    var delay3 = c.innerHTML.length + p.innerHTML.length + h1.innerHTML.length + 2500;
    h1.style.display = "inline-block";


    // type affect to body
    setTimeout(function() {
        p.style.display = "inline-block";


        typeEffect(p, speed);


    }, delay);
    setTimeout(function() {

        c.style.display = "inline-block";

        typeEffect(c, speed);

    }, delay2);
    setTimeout(function() {

        d.style.display = "inline-block";

        typeEffect(d, speed);

    }, delay3);
}



$('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Читать далее") {
        $(this).text("Закрыть ")
    } else {
        $(this).text("Читать далее")
    }
});


(function() {
    $('.btn-open-modal').on('click', function() {
        var target = $(this).data('target');
        $(target).addClass('in');
    });

    $('.modal').on('click', function(e) {
        //Check whether click on modal-content    
        if (e.target !== this)
            return;

        $(this).removeClass('in');
    });
})(jQuery);

$(".close_x").click(function() {
    $('.modal').removeClass('in');
});
$(document).ready(function() {
    $("a.scrollink").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});
//portfolio

$(document).ready(function() {
    /*
     *  Simple image gallery. Uses default settings
     */

    $('.fancybox').fancybox();

    /*
     *  Different effects
     */

    $(".fancybox-effects-a").fancybox({
        helpers: {
            title: {
                type: 'outside'
            },
            overlay: {
                speedOut: 0
            }
        }
    });

    // Disable opening and closing animations, change title type
    $(".fancybox-effects-b").fancybox({
        openEffect: 'none',
        closeEffect: 'none',

        helpers: {
            title: {
                type: 'over'
            }
        }
    });

    // Set custom style, close if clicked, change title type and overlay color
    $(".fancybox-effects-c").fancybox({
        wrapCSS: 'fancybox-custom',
        closeClick: true,

        openEffect: 'none',

        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
                css: {
                    'background': 'rgba(238,238,238,0.85)'
                }
            }
        }
    });

    // Remove padding, set opening and closing animations, close if clicked and disable overlay
    $(".fancybox-effects-d").fancybox({
        padding: 0,

        openEffect: 'elastic',
        openSpeed: 150,

        closeEffect: 'elastic',
        closeSpeed: 150,

        closeClick: true,

        helpers: {
            overlay: null
        }
    });

    /*
     *  Button helper. Disable animations, hide close button, change title type and content
     */

    $('.fancybox-buttons').fancybox({
        openEffect: 'none',
        closeEffect: 'none',

        prevEffect: 'none',
        nextEffect: 'none',

        closeBtn: false,

        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        },

        afterLoad: function() {
            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
    });


    /*
     *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
     */

    $('.fancybox-thumbs').fancybox({
        prevEffect: 'none',
        nextEffect: 'none',

        closeBtn: true,
        arrows: true,
        nextClick: true,

        helpers: {
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });

    /*
     *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
     */
    $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            prevEffect: 'none',
            nextEffect: 'none',

            arrows: false,
            helpers: {
                media: {},
                buttons: {}
            }
        });

    /*
     *  Open manually
     */

    $("#fancybox-manual-a").click(function() {
        $.fancybox.open('1_b.jpg');
    });

    $("#fancybox-manual-b").click(function() {
        $.fancybox.open({
            href: 'iframe.html',
            type: 'iframe',
            padding: 5
        });
    });

    $("#fancybox-manual-c").click(function() {
        $.fancybox.open([{
            href: '1_b.jpg',
            title: 'My title'
        }, {
            href: '2_b.jpg',
            title: '2nd title'
        }, {
            href: '3_b.jpg'
        }], {
            helpers: {
                thumbs: {
                    width: 75,
                    height: 50
                }
            }
        });
    });


});