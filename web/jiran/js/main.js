//window.alert()
$(document).ready(function() {

  $('.btn_allmenu').click(function() {
    $('.allmenu').show();
  });

  $('.allmenu_close').click(function() {
    $('.allmenu').hide();
  })
  //form 태그 header 외에도 존재할 수 있으니 css 처럼 부모 경로를 사용할 것
  //$('.header_search form')
  $('.btn_search').click(function() {
    $('.header_search form').show();
  })
  $('.search_close').click(function() {
    $('.header_search form').hide();
  })

  // 모바일용
  $('.a1>li>a').click(function() {
    $('.a1>li').removeClass('m_on');
    $(this).parent().addClass('m_on');
  })

})//ready()
  