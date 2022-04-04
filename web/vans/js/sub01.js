$(function(){
    
    var wd = $(window).width();
    var textF =  $('.cnt01 .texts').first();
    var textL =  $('.cnt01 .texts').last();
    var flag = false;
    var sideB = $('.sideBar');

    if(wd>=780){
        sideB.css('display','none');
        
    }else if(780>=wd && wd>=430){
        sideB.css('display','none');
        textF.click(function(){
            // $('.cnt01 .texts').css('margin-bottom','-540px');
            // $(this).css('margin-bottom','0px');
    
            // ! = not 
            // if(!flag){
            //     $('.cnt01 .texts').first().css('margin-left','-475px');
            //     $(this).css('margin-left','0px');
            //     flag =  true;
            // }else{
            //     $(this).css('margin-left','-475px');
            //     flag= false;
            // }
            if(!flag){
                    $('.cnt01 .texts').first().css('margin-right','calc(100% / 8 * 7.5)');
                    $(this).css('margin-right','calc(100% / 8 * 2)');
                    flag =  true;
                }else{
                    $(this).css('margin-right','calc(100% / 8 * 7.5)');
                    flag= false;
                }
    
        });
        textL.click(function(){
            if(!flag){
                $('.cnt01 .texts').last().css('margin-left','640px');
                $(this).css('margin-left','calc(100% / 8 * 2)');
                flag = true;
            }else{
                $(this).css('margin-left','640px');
                flag = false;
            }
        });
    }else{
        sideB.css('display','block');
    }

    

    // textF.click(function(){
    //     // $('.cnt01 .texts').css('margin-bottom','-540px');
    //     // $(this).css('margin-bottom','0px');

    //     // ! = not 
    //     // if(!flag){
    //     //     $('.cnt01 .texts').first().css('margin-left','-475px');
    //     //     $(this).css('margin-left','0px');
    //     //     flag =  true;
    //     // }else{
    //     //     $(this).css('margin-left','-475px');
    //     //     flag= false;
    //     // }
    //     if(!flag){
    //             $('.cnt01 .texts').first().css('margin-right','calc(100% / 8 * 7.5)');
    //             $(this).css('margin-right','calc(100% / 8 * 2)');
    //             flag =  true;
    //         }else{
    //             $(this).css('margin-right','calc(100% / 8 * 7.5)');
    //             flag= false;
    //         }

    // });

    // textL.click(function(){
    //     if(!flag){
    //         $('.cnt01 .texts').last().css('margin-left','640px');
    //         $(this).css('margin-left','calc(100% / 8 * 2)');
    //         flag = true;
    //     }else{
    //         $(this).css('margin-left','640px');
    //         flag = false;
    //     }
    // });




    // = var hText= $('.thImg:first').text();
    // = var hText= $('.thImg').first().text();
    var hText= $('.thImg').eq(0).text();
    var hFive = $('.thImg').eq(0).attr('data-h5');

    $('.thumbImg h3').text(hText);
    $('.thumbImg h5').text(hFive);

    $('.thImg').click(function(){

        var bgImg = $(this).css('background-image');
        var txt =$(this).text();
        var note =$(this).attr('data-h5');
        //attr 태그안에있는속성


        $('.thumbImg h3').text(txt);
        $('.thumbImg h5').text(note);
        $('.thumbImg').css('background-image',bgImg);
    });


   



});

