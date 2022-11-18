$(document).ready(function(){
 
	var visual = $('#banner_img > ul > li'); // 이미지
    var button = $('#btn_all > li'); // 버튼
    var current = 0;
    var setIntervalId;
    
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();

            button.removeClass('on'); // 클래스 이름 일치시켜야 함
            tg.addClass('on');

            move(i);
        }
    });
    
    $('#banner_wrap').on({ // 마우스 오버시 멈추고 아웃시 다시 시작
        mouseover:function(){
            clearInterval(setIntervalId);
        },
        mouseout:function(){
            timer();
        }
    });
    
    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == visual.size()){
                n = 0;
            }
            
            button.eq(n).trigger('click');
        }, 5000);
    }
    
    function move(i){
        if(current == i) return;
        
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
        currentEl.css({left:0}).stop().animate({left:'-100%'});
        nextEl.css({left:'100%'}).stop().animate({left:0});

        current = i;
    }
});


$(document).ready(function(){
    //gnb
    //wrap1
    //초기설정
    $(".menu_1").hide();
    
    $(".menu_1 li a").hover(function(){//mouseover
        $(this).css({"color":"#fff","background-color":"#35A519"});
    },function(){//mouseout
        $(this).css({"color":"","background-color":""});
    });

    //이벤트
    $("#m_bar li").hover(function(){
        $(this).children("ul").stop().slideDown(500);
    },function(){
        $(this).children("ul").stop().slideUp(500);
    }); 









    // control button
    $('.control a').mouseover(function(){
        $(this).stop().animate({width:'30px'},10);
    }).mouseout(function(){
        $(this).stop().animate({width:'15px'},10);    
    });
    
    
    
    // top icon
    $('.gototop').hide();
    $(window).scroll(function(){
        var nowScroll = $(window).scrollTop();
        if( nowScroll > 0 ){
            $('.gototop').fadeIn(100);
        }else{
            $('.gototop').fadeOut(100);    
        }
    });

    //m_wrap6
    //내용 숨기기
    $("#cen > div:not("+$("#top17 li a.sel").attr("href") +")").hide();
    //이벤트
    $("#top17 li a").click(function(){
        //메뉴 => 1.모든 메뉴에서 클래스 제거 +2.클릭된 메뉴만 클래스 추가
        $("#top17 li a").removeClass("sel");
        $(this).addClass("sel");
        //내용 => 1. 모든 내용 숨김 + 2.클릭된 메뉴와 연결된 내용만 보임
        $("#cen > div").hide();
        $($(this).attr("href")).show();
        return false;
    });
    
    //tab_wrap
    //내용 숨기기
    $("#list > li:not("+$("#tab li a.sel").attr("href") +")").hide();
    //이벤트
    $("#tab li a").click(function(){
        //메뉴 => 1.모든 메뉴에서 클래스 제거 +2.클릭된 메뉴만 클래스 추가
        $("#tab li a").removeClass("sel");
        $(this).addClass("sel");
        //내용 => 1. 모든 내용 숨김 + 2.클릭된 메뉴와 연결된 내용만 보임
        $("#list > li").hide();
        $($(this).attr("href")).show();
        return false;
    });



});


/* main_img */
function show_img1(){
    $("#banner_wrap").delay(3000).animate({"margin-left":"100%"},"slow");//2
    $("#banner_wrap").delay(3000).animate({"margin-left":"-200%"},"slow");//3
    $("#banner_wrap").delay(3000).animate({"margin-left":"-300%"},"slow");//4
    $("#banner_wrap").delay(3000).animate({"margin-left":"-400%"},"slow");//5
    $("#banner_wrap").delay(3000).animate({"margin-left":"-500%"},"slow");//6
    $("#banner_wrap").delay(3000).animate({"margin-left":"-600%"},"slow");//7
    $("#banner_wrap").delay(3000).animate({"margin-left":"-500%"},"slow");//6
    $("#banner_wrap").delay(3000).animate({"margin-left":"-400%"},"slow");//5
    $("#banner_wrap").delay(3000).animate({"margin-left":"-300%"},"slow");//4
    $("#banner_wrap").delay(3000).animate({"margin-left":"-200%"},"slow");//3
    $("#banner_wrap").delay(3000).animate({"margin-left":"-100%"},"slow");//2
    $("#banner_wrap").delay(3000).animate({"margin-left":"0"},"slow");//1
}
//setInterval("show_img1()",3000);


//m_wrap3
function ex1(){
    $(".wrap3_img").delay(5000).animate({"margin-left":"-1200px"},"slow");//2
    $(".wrap3_img").delay(5000).animate({"margin-left":"-2400px"},"slow");//3
    $(".wrap3_img").delay(5000).animate({"margin-left":"-1200px"},"slow");//2
    $(".wrap3_img").delay(5000).animate({"margin-left":"0px"},"slow");//1

}
setInterval("ex1()",4000);  //setInterval=>반복할때
