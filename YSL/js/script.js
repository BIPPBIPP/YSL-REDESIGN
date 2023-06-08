$(document).ready(function(){

    // mainpage slide
    let MainSlide =  new Swiper('.station1',{
        loop:true,
        direction:'horizontal',
        pagination: {
            el:".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        autoplay: {
            delay: 10000,
        },
        speed:2000,

    });


    // sub1-2 page

    let swiper4 = new Swiper(".station4",{
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
            el:".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
      
    });
    let swiper5 = new Swiper(".station5",{
        slidesPerView: 5,
        spaceBetween: 5,
        centeredSlides: true,
        pagination: {
            el:".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
      
    });
    


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




        