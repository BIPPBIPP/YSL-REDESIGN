window.onload = function(){
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
        
        let dtList2 = document.querySelectorAll(".tabMenu2>dt")
    
        for(g=0; g<dtList2.length; g++){ 
            dtList2[g].addEventListener("click",function(){
                for(k=0;k<dtList2.length;k++){
                    dtList2[k].classList.remove("on")
                }
               this.classList.add("on")
            })
        }


}
   