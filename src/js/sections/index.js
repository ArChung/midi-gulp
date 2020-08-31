function init_index() {
  console.log('init_index');

  init_pros();

  initJumpBtm();

  initViewAni();

  initIntro();
}

function initIntro(){
  // $('#index .index-ani').addClass('index-ani-init');
  var tl = new TimelineMax();
  tl.set('#index .index-ani',{x:50})
  .staggerTo('#index .index-ani',.8,{alpha:1,x:0},.15)

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
    tl.set(targetList.find('.pro-item'),{alpha:0,y:100})
    .staggerTo(targetList.find('.pro-item'),.8,{alpha:1,y:0},.1);

    ChungTool.pageScrollAni($('.listWrap').offset().top-85);
  });
}


function initJumpBtm(){
  $('.jBtn').click(function(){
    var t = $(this);
    ChungTool.pageScrollAni($(t.attr('data-pos')).offset().top);
  });
}

function  initViewAni(){
  $('.view-ani').addClass('ani-init');

  inView.offset(170);
  inView('.view-ani')
    .on('enter', el => {
      if(!$(el).hasClass('ani-active')){
        $(el).addClass('ani-active');
      }
  });
}