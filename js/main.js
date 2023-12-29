(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    document.getElementById('surveyForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
      
        // Get form data
        var formData = new FormData(this);
      
        // Create a CSV string
        var csvContent = "data:text/csv;charset=utf-8,";
      
        // Get the form field names as an array
        var fieldNames = Array.from(formData.keys());
      
        // Add column names to the CSV content
        csvContent += fieldNames.join(',') + '\n';
      
        // Get the form field values as an array
        var fieldValues = Array.from(formData.values());
      
        // Add field values to the CSV content
        csvContent += fieldValues.join(',') + '\n';
      
        // Create a temporary link element to download the CSV file
        var link = document.createElement('a');
        link.href = encodeURI(csvContent);
        link.target = '_blank';
        link.download = 'survey_results.csv';
        link.click();
      
        // Reset the form
        this.reset();
      });

      
    
})(jQuery);

