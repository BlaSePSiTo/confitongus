$(".sidebar-btn").on('click', function() {
    $(".sidebar").toggle();
    $(".sidebar-content").animate({width: 'toggle'}, 300);
    $(".sidebar-content a").animate({width: 'toggle', display: 'block'}, 300);
  })

  $(".close").on('click', function() {
    $(".sidebar").toggle();
    $(".sidebar-content").animate({width: 'toggle'});
    $(".sidebar-content a").animate({width: 'toggle'});
  })