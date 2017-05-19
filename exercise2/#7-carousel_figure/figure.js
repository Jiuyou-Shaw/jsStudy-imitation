(function(){

    var oFig = document.querySelector(".fig");
    var oPre = document.querySelector(".pre");
    var oNext = document.querySelector(".next");

    function Carousel(offset) {
        var newLeft = parseInt(document.defaultView.getComputedStyle(oFig).left) + offset;
        document.defaultView.getComputedStyle(oFig).left = newLeft +"px";
        if(newLeft < -160) {
            oFig.style.left = 0 + "px";
        }
        if(newLeft > 0) {
            oFig.style.left = 160 + "px";
        }
    }

    function autoChange() {
        timer = setInterval(oNext.onclick(), 2000);
    }

    oPre.addEventListener("click", function(){
        Carousel(40);
    });

    oNext.addEventListener("click", function() {
        Carousel(-40);
    });

})();
