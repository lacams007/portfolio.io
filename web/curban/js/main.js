$(function(){

  // 비주얼 슬라이드  .visualWrap

  // .paging>li 를 클릭했을때, 해당 위치의 이미지가 출력 ('.paging>li' 와 '.visualGroup'을 연결)
  $('.paging>li').click(function(){
    $('.paging>li').removeClass('sel');
    $(this).addClass('sel');

    var ind = $(this).index();

    clearInterval(rolling);// 자동 슬라이드 연결
    
    $('.visualGroup').css('margin-left',ind*-100+'%');
  });

  // 비주얼 자동슬라이드
  var i = 0;

  var rolling = setInterval(function(){
    i++;
    i = i%3;

    $('.paging>li').removeClass('sel');
    $('.paging>li').eq(i).addClass('sel');
    $('.visualGroup').css('margin-left',i*-100+'%');
  },3000);





  // 게시판 아코디언 .accordionWrap 

  // ★★★★★   main .accordionWrap .acc h3 i <<가  removeClass 됐을때, 원래 아이콘모양으로 돌아오지않는 이슈 
  
  var icon =$('main .accordionWrap .acc h3 i');
  var iconInd =$('main .accordionWrap .acc h3 i').index();
  var acc = $('.accordionWrap .acc');

  // icon.css('margin-right', '25px');
  // icon.css('transform', 'rotate(0deg)');

  // acc.eq(1).css('color','black');

  
  // $('main .accordionWrap .acc h3 i').not(iconInd - 1).css({
  //   marginRight : '25px',
  //   transform : 'rotate(0deg)'
  // });
  $('main .accordionWrap .acc h3 i').eq(iconInd - 1).css({
    marginRight : '0px',
    transform : 'rotate(180deg)'
  });
  
  
  acc.click(function(){

    acc.removeClass('acc_on');
    $(this).addClass('acc_on');

    var ind = $(this).index();

    icon.eq(ind - 1).css({
      marginRight : '0px',
      transform : 'rotate(180deg)'
    });
  });



  // .slideWrap
  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      620: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1279: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });




});