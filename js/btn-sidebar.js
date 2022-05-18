$(".sidebar-btn").on('click', function() {
    $(".sidebar").toggle();
    $(".sidebar-content").animate({ width: 'toggle', display: 'block' }, 500);
    $(".sidebar-content a").css("display", "block");
})

$(".close").on('click', function() {
    $(".sidebar").toggle();
    $(".sidebar-content").animate({ width: 'toggle' });
    $(".sidebar-content a").animate({ width: 'toggle' });
})