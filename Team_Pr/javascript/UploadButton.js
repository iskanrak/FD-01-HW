$(function() {
    $(".UploadButton").mousemove(function(e) {
        var offL, offR, inpStart
        offL = $(this).offset().left;
        offT = $(this).offset().top;
        aaa= $(this).find("input").width();
        $(this).find("input").css({
            left:e.pageX-aaa-30,
            top:e.pageY-offT-10
        })
    });
});