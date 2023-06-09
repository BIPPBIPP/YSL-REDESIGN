$(document).ready(function(){

    // subpage 3
    $(".tabMenu1>dt").click(function(e){
        e.preventDefault()
        // 1.dt태그들이 on클래스가 지워져야 함
        // 2.내가 클릭한 dt태그한테만 on클래스가 추가
        $(".tabMenu1>dt").removeClass("on")
        $(this).addClass("on")
        // this는 내가 클릭한 dt태그를 지칭.
    })





    
})