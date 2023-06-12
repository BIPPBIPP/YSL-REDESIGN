$(document).ready(function(){

    // 1. clothes Slide
    let count = 0;
    let perView1 = 2;
    let trainWidth1 = $(".train2").width()
    $(".train2").width(trainWidth1/perView1)

    $(".btnNext").click(function(e){

        e.preventDefault()
        count++;
        if(count>9){count=0}
        $(".train2").css("transform","translateX("+(-10*count)+"%)")
    })


    let perView2 = 2;
    let trainWidth2 = $(".train3").width()

    $(".train3").width(trainWidth2/perView2)
    $(".btnPrev").click(function(e){

        e.preventDefault()
        count++;
        if(count>9){count=0}
        $(".train3").css("transform","translateX("+(-10*count)+"%)")
    })



    // 2. photos
    // 2-1. slide
        $('.post-wrapper').slick({
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            nextArrow:$('.next'),
            prevArrow:$('.prev'),
        });

// 2-2. popup창
        $(".show2").click(function(){
            $(".pop_wrap").fadeIn();
        })
        $(".pop_close").click(function(){
            $(".pop_wrap").fadeOut()
        })

})