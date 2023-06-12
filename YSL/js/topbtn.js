$(document).ready(function(){

    $(".btnTop").click(function(){
        // $("html,body").animate({scrollTop:0},500)
        // moveScroll(0,2000)
        moveScroll({
            top: 0,
            speed:800,
            
        })
        // html,body를 기준으로 scrollTop을 '0'으로 설정해주면 맨 위로 올라간다
    })
    function moveScroll(option){
        $("html,body").stop().animate({scrollTop:option.top},option.speed)
    }
})