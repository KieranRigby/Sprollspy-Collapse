// Get viewport height, gridTop and gridBottom
var windowHeight = $(window).height(),
    gridTop = windowHeight * .45,
    gridBottom = windowHeight * .55,
    activeElement;

$(window).on('scroll', function() {
    // On each scroll check if `li` is in interested viewport
    $('.scrollspy').each(function() {
    var thisTop = $(this).offset().top - $(window).scrollTop(); // Get the `top` of this `li`

    // Check if this element is in the interested viewport
    if (thisTop >= gridTop && (thisTop + $(this).height()) <= gridBottom) {
        if($(this).attr('id') != activeElement) {
            activeElement = $(this).attr('id');
            $(".panel-collapse a").removeClass('active');
            $("a[href$='#"+ activeElement +"']").addClass('active');

            if(! $("a[href$='#"+ activeElement +"']").closest('.panel-collapse').hasClass('in')) {
                $(".panel-collapse").collapse('hide');
                $("a[href$='#"+ activeElement +"']").closest('.panel-collapse').collapse('show');
                $("a[href$='#"+ activeElement +"']").closest('.panel-collapse').prev().addClass('active')
            }
        }
    }
    });
});
