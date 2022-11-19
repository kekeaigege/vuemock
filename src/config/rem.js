(function() {
    function resize() {
        //设计稿的宽度是750px 设计稿的100px相当于1rem 屏幕宽度相当于7.5rem
        var designWidth = 750;
        var baseFontSize = 100;
        var width = window.innerWidth;
        var currrentFontSize = (width / designWidth) * 100;
        console.log(currrentFontSize)
        document.querySelector('html').style.fontSize = currrentFontSize + 'px'
    }
    window.onresize = function () {
        resize();
    }
    document.addEventListener('DOMContentLoaded', resize)
}())