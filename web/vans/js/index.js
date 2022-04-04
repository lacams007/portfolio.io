$(function(){

    var wd = $(window).width();//반응형
    // alert(wd);윈도우너비출력

    // var mnImg , mnTitle , mnNote = 0;
    var mnImg = 0;
    // var mnTitle = 0;
    // var mnNote = 0;
    var cnt01ml = 0;
    var sideB = $('.sideBar');

    if(wd>=780){
        mnImg = 690;
        cnt01ml = 25;
        sideB.css('display','none');
    }else if(wd<780 && wd>=430){
        mnImg = 480;
        cnt01ml = 50;
        sideB.css('display','none');
    }else{
        mnImg = 280;
        cnt01ml = 100;
        sideB.css('display','block');
    }

    var Dot =$('.main>.paging>li');
    var imG = $('.imgGroup');
    var titleG = $('.titleGroup');
    var noteG = $('.noteGroup');

    Dot.click(function(){
        Dot.removeClass('sel');
        $(this).addClass('sel');

        var ind = $(this).index();

        clearInterval(rolling);

        imG.css('margin-top',ind*-mnImg+'px');
        titleG.css('margin-top',ind*-80+'px');
        noteG.css('margin-top',ind*-80+'px');

    });

    //마우스호버 or 마우스엔터
    $('.menu li').mouseenter(function(){
        var ind = $(this).index();
        $('.menu li:last').css('left',ind * 25 + '%');
        // $('.menu li:last').stop().animate({
        //     left: ind * 25+'%'
        // },500);
        //애니메이션이랑 transition(css)은 동시에 사용 불가능
    });

    var leftBtn = $('.cnt01 .left');
    var rightBtn = $('.cnt01 .right');

    var artG = $('.artGroup');
    //기본세팅
    artG.find('.article:last').prependTo(artG);
    artG.css('margin-left',-cnt01ml+'%');

    leftBtn.click(function(){
        artG.stop().animate({
            marginLeft : '0%'
        },500,function(){
            artG.find('.article:last').prependTo(artG);
            artG.css('margin-left',-cnt01ml+'%');
        })
    });
    rightBtn.click(function(){
        artG.stop().animate({
            marginLeft : -cnt01ml * 2+'%'
        },500,function(){
            artG.find('.article:first').appendTo(artG);
            artG.css('margin-left',-cnt01ml+'%');
        })
    });


    var acc = $('.cnt02 .article>div');
    $('.checked').css('background-color','gray');

    acc.even().click(function(){
        acc.even().removeClass('checked').css('background-color','black');
        $(this).addClass('checked');
        
        $('.checked').css('background-color','gray');
    });


    var i = 0;

    var rolling = setInterval(function(){
        i++;
        i = i%3;
        // if(i>=2){
        //     i=2;
        // }
        Dot.removeClass('sel');
        Dot.eq(i).addClass('sel');

        imG.css('margin-top',i*-mnImg+'px');
        titleG.css('margin-top',i*-80+'px');
        noteG.css('margin-top',i*-80+'px');
    },3000);//n초마다 한번씩 반복 1초=1000




});