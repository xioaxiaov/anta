
$(function () {
    var aBtns = $("#yuanid").find("span");
    var oUl = $("#lunboid").find("ul");
    var timer = null; //用于记录定时器返回值
    var iNow = 0; //代表当前图片显示的下标

    aBtns.click(function () {
        iNow = $(this).index();
        tab();
    })

    //自动循环轮播
    timer = setInterval(function () {
        iNow++;
        tab();
    }, 4000);

    //添加移入移出
    $("#play").mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        timer = setInterval(function () {
            iNow++;
            tab();
        }, 2000);
    })


    //切换，单独封装成函数
    function tab() {
        aBtns.removeClass("active").eq(iNow).addClass("active");

        //如果是最后一张图片显示，它对应的按钮下标是0
        if (iNow == aBtns.size()) {
            aBtns.eq(0).addClass("active");
        }

        oUl.animate({
            left: -1920 * iNow
        }, 300, function () {
            //当最后一张图片动画结束的时候，直接切回下标为0的图片
            if (iNow == aBtns.size()) {
                iNow = 0;
                oUl.css("left", -190);
            }
        });
    }

})
