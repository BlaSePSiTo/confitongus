$(document).ready(function() {
    $('.sidebar-btn').on('click', function() {
        $('#sidebar').toggleClass('visible');
    });

    $('.close').on('click', function() {
        $('#sidebar').toggleClass('visible');
    });
});