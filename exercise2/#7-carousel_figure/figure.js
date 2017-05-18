(function(){
    var oBtns = document.querySelectorAll(".btns span");
    var oImgs = document.querySelectorAll(".fig img");
    var oNext = document.querySelector(".next");
    
    for(let i=0; i<oBtns.length; i++) {

        oBtns[i].addEventListener("click", function() {
            for(let j=0; j<oImgs.length; j++){
                var hasOn = oImgs[j].classList.contains("on");
                //点击btn切换
                if(hasOn) {
                        oImgs[j].classList.remove("on");
                        oImgs[i].classList.add("on");
                        oBtns[j].classList.remove("on");
                        oBtns[i].classList.add("on");
                        
                } else {
                    oImgs[i].classList.add("on");
                }
            } 
        });

        oNext.addEventListener("click", function() {
            var hasOn = oImgs[i].classList.contains("on");
            if(hasOn) {
                oImgs[i].classList.remove("on");
                oBtns[i].classList.remove("on");
                let j = i + 1;
                if(j < oImgs.length) {                 //i不是最后一项
                    oImgs[j].classList.add("on");
                    oBtns[j].classList.add("on");
                } else {
                    oImgs[0].classList.add("on");
                    oBtns[0].classList.add("on");
                }
            }
        });


    }
    
})();