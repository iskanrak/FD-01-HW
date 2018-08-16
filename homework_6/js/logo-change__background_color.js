document.addEventListener('DOMContentLoaded', function(){
    var logo = document.getElementsByClassName('logo')[0];
    function changeBackground(color) {
        logo.style.backgroundColor = color;
    }
    function getRandomColor () {
        var r=Math.floor(Math.random() * (256));
        var g=Math.floor(Math.random() * (256));
        var b=Math.floor(Math.random() * (256));
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }
    logo.addEventListener('mouseenter', function() {
        logo.classList.remove('logo_background');
        changeBackground(getRandomColor());
        setTimeout(function(){logo.classList.add('logo_background');},1000);
    });
    setInterval(function(){
        changeBackground(getRandomColor());
    }, 1000)

});