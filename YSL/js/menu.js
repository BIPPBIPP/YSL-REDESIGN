$(document).ready(function(){
    // btnMenu클래스 버튼을 클릭했을 때 nav태그가 보이게 되도록 기능
    let menuState = false
    // 변수는 바깥에 저장, 안그럼 함수 안에서 계속 false로 저장됨
// 1. 메뉴 버튼 클릭 후, 메뉴창 오픈
$(".btnMenu").click(function(e){

     e.preventDefault()
//  리턴되어 저장되는 함수를 막아줌

    if(menuState==false){
        // 메뉴가 현재 닫혀있는 상태 ->여는 기능
        $(".btnMenu").addClass("close")
        $("nav").addClass("on")
        $(".logo>a").addClass("on")
        menuState = true
    }else{
        // 메뉴가 현재 열려 있는 상태 -> 닫는 기능
        $(".btnMenu").removeClass("close")
        $("nav").removeClass("on")
        $(".logo>a").removeClass("on")
        menuState = false
    }


    
 
   
   
})

// 2.1뎁스 클릭 -> 2뎁스 오픈 & close // => 열고 닫는 메뉴 완성
$(".gnb>li").click(function(){


if($(this).hasClass("on")==true){
    $(this).css("height","50px")
    $(this).removeClass("on")
}else{
    $(this).css("height","50px")
    $(this).removeClass("on")
    let gnb2dep = $(this).children("ul").children().length
    $(this).css("height",(gnb2dep+1)*50+"px")
    $(this).addClass("on")
}

// 2뎁스를 클릭했을 때 1뎁스가 닫히지 않게 된다.
})
$(".gnb ul").click(function(){
    return false
})




// 3. lnb 메뉴 클릭 시, 작동
$(".lnb>li").click(function(){
    //1뎁스 li를 클릭했을 때, 2뎁스 목록이 보이게 하는 기능

// 리스트 클릭했을 때 내가 클릭한 리스트한테 on클래스가 있다 / 없다

if($(this).hasClass("on")==true){
    $(this).css("height","50px")
    $(this).removeClass("on")
}else{
    $(this).css("height","50px")
    $(this).removeClass("on")

    let lnb2dep = $(this).children("ul").children().length
    $(this).css("height",(lnb2dep+1)*50+"px")
    $(this).addClass("on")
}

// 마지막 뎁스를 클릭했을 때, img가 따라서 내려가는 경우
if($(this).index()==2){
    // index()는 뎁스의 순서를 선택할 때
    if($(this).hasClass("on")==true){
        $(".menuImg").addClass("hidden")
    }else{
        $(".menuImg").removeClass("hidden")
    }
    
}
// => 열고 닫는 메뉴 완성


})
$(".lnb ul").click(function(){
    return false
})
})
