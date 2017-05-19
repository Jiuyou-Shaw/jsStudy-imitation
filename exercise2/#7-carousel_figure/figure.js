(function(){
    /****************和oBtns有关的都不起作用****************/
    var oCarFig = document.querySelector(".car-fig");
    var oFig = document.querySelector(".fig");
    var oPre = document.querySelector(".pre");
    var oNext = document.querySelector(".next");
    var oBtns = document.querySelectorAll(".btns span");
    var index = 0;
    var timer;
    //轮播方式
    function Carousel(offset) {
        var newLeft = parseInt(oFig.style.left) + offset;
        oFig.style.left = newLeft +"em";
        if(newLeft < -160) {
            oFig.style.left = 0 + "em";
        }
        if(newLeft > 0) {
            oFig.style.left = -160 + "em";
        }
    }

    //自动轮播
    function autoCar() {
        timer = setInterval(function() {
            oNext.click();
        }, 1000);
    }
    
    function stopAuto() {
        clearInterval(timer);       //undefined
    }

    //顺序轮播
    oPre.addEventListener("click", function() {
        index += 1;     //
        if(index < 0) {
            index = 4;
        }
        Carousel(40);
        buttonsShow();
    });
    
    //逆序轮播
    oNext.addEventListener("click", function() {
        index -= 1;     //
        if(index > 4) {
            index = 0;
        }
        Carousel(-40);
        buttonsShow();
    });
    //按钮点选
    for(let i=0; i<oBtns[i].length; i++) {
        oBtns[i].addEventListener("click", function() {   
            var curIndex = parseInt(this.getAttribute("index"));
            var offset = 40 * (inndex - curIndex);
            autoCar(offset);
            index = curIndex;
            buttonsShow();
        });
    }
    //按钮样式
    function buttonsShow() {
        for(let i=0; i<oBtns.length; i++) {
            if(oBtns[i].classList.contains("on")) {
                oBtns[i].classList.remove("on");
            }
        }
        oBtns[index].classList.add("on");
    }

    oCarFig.onmouseover = stopAuto;
    oCarFig.onmouseout = autoCar;
    autoCar();

})();
