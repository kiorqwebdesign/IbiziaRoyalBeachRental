//= require jquery-3.2.1.min.js
//= require tether.min.js
//= require popper.min.js

//= require bootstrap.min.js
//= require wow.min.js
//= require lightbox.min.js

$(document).ready(function(e) {

    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $(".header-nav[data-bootstrap-nav=true] .navbar-nav a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if
    });

    // display mini nav
    var y = $(this).scrollTop();
    if (y > 79) {
        $('#header-mini').show()
    } else {
        $('#header-mini').hide()
    }
    
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 79) {
            $('#header-mini').show()
        } else {
            $('#header-mini').hide()
        }
    });

    // wow animations
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 350,
        mobile: true,
        live: true,
        callback: function(box) {
                   
        },
        scrollContainer: null
    });
    wow.init();

})