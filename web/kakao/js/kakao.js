$(function(){
    
    var wd = $(window).width();
    
    var mnG = $('.mnView>.mnGroup');
    var dot = $('.main>.paging>li');

    var mnImg = 0;
    var flag = false;
    var overText= $('.cnt02 .texts');

    if(wd>=780){
        mnImg = 1080;
    }else if(wd<=780 && wd>=430){
        mnImg = 768;
        // mnImg = 691;
        overText.click(function(){
            if(!flag){
                overText.css('margin-right','-30px');
                $(this).css('margin-right','-210px');
                flag= true;
            }else{
                $(this).css('margin-right','-30px');
                flag= false;
            
            }    
        });
        
    }else{

    }
    
    var b = 0;
    var bnr = $('.banner')
    var bnImg = $('.banner .image');
    
  

    ani();

    var an = setInterval(ani,15000);


function ani(){
       bnImg.eq(0).animate({
           left: '-20%'
       },5000,function(){
            bnImg.eq(0).css({
                opacity: 0,
                left: '100%'
            });
            bnImg.eq(0).css({
                opacity:1
            });
        bnImg.eq(1).animate({
            left: '-20%'
        },5000,function(){

            bnImg.eq(1).css({
                opacity: 0,
                left: '100%'
            });

            bnImg.eq(1).css({
                opacity:1
            });

            bnImg.eq(2).animate({
                left: '-20%'
            },5000,function(){
                bnImg.eq(2).css({
                    opacity: 0,
                    left: '100%'
                });
                bnImg.eq(2).css({
                    opacity:1
                });
            });

        });
       });
    }
    


    dot.click(function(){
        dot.removeClass('sel');
        $(this).addClass('sel');

        var ind = $(this).index();
        mnG.css('margin-left',ind*-mnImg+'px');

        clearInterval(rolling);
    });

    var i = 0;
    var rolling = setInterval(function(){
        i++;
        i=i%4;

        dot.removeClass('sel');
        dot.eq(i).addClass('sel');
        mnG.css('margin-left',i*-mnImg+'px');
    },3000);


    var leftBtn = $('.btns>.left');
    var rightBtn = $('.btns>.right');
    var artG = $('.cnt03 .artGroup');

    // $('.cnt03 .article').last().prependTo(artG);
    // artG.find('.cnt03 .article').last().prependTo(artG);
    artG.find('.article:last').prependTo(artG);
    artG.css('margin-left','-33.33%');

    leftBtn.click(function(){
        artG.animate({
            marginLeft : 0
        },500,function(){
            artG.find('.article:last').prependTo(artG);
            artG.css('margin-left','-33.33%');
        });
    });
    rightBtn.click(function(){
        artG.animate({
            marginLeft : -66.66+'%'
        },500,function(){
            artG.find('.article:first').appendTo(artG);
            artG.css('margin-left','-33.33%');
        });
    });

});