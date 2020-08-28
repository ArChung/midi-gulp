function init_index() {
  console.log('init_index');

  init_pros();
}

function init_pros() {
  $('.tabItem').click(function () {
    const t = $(this);
    const id = t.attr('data-id');
    const targetList = $('#pro-'+id);
    
    t.addClass('active').siblings('.tabItem').removeClass('active');
    targetList.siblings('.pro-list').addClass('hide');
    targetList.removeClass('hide');

    var tl = new TimelineMax();
    tl.set(targetList.find('.pro-Item'),{y:100})
    .to(targetList.find('.pro-Item'),.6,{y:0})

    
  });
}