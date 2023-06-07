window.onload = function(){

// mainpage slide
let MainSlide =  new Swiper('.station',{
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

})



// subpage 3 
    let dtList1 = document.querySelectorAll(".tabMenu1>dt")
    
    for(i=0; i<dtList1.length; i++){ 
        dtList1[i].addEventListener("click",function(){
            for(j=0; j< dtList1.length; j++){
                dtList1[j].classList.remove("on")
            }
           this.classList.add("on")
        })
    }     
        //    this는 앞에서 선택한 dt를 가리키는 것.
        // 클릭하는 맥락 안에서 클릭한 태그를 this로 표현할 수 있다.
        


}
   