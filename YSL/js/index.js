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
        
        let sub4Cont = document.querySelectorAll(".tabMenu2>dt")
    
        for(g=0; g<sub4Cont.length; g++){ 
            sub4Cont[g].addEventListener("click",function(){
                for(k=0;k<sub4Cont.length;k++){
                    sub4Cont[k].classList.remove("on")
                }
               this.classList.add("on")
            })
        }


}
   