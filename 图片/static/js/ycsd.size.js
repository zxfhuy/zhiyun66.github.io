!new function (){
    var a = this;
    a.width = 660, a.fontSize = 100, a.widthProportion = function (){
        var b = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / a.width;
        return b > 1 ? 1 : b;
    }, a.changePage = function (){
        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + Math.floor(a.widthProportion() * a.fontSize * 120) / 100 + "%!important");
    }, a.changePage(), window.addEventListener("resize", function (){
        a.changePage();
    }, !1)
};