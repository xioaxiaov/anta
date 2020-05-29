
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
    //关晓彤等移入移除
       var hh = $(".hoverup-inner").find("a")
        $(".hoverup-inner").on("mouseenter","a", function() {
            $(this).find("div").addClass("yiru");
            $(this ,"div").find('img').addClass("yiru1");
        })
        $(".hoverup-inner").on("mouseleave","a", ()=> {
            hh.find("div").removeClass("yiru")
            $(this ,"div").find('img').removeClass("yiru1");
        })
   
            // hh.mouseenter( ()=> {
            //     hh.find("div").addClass("yiru");
            // }).mouseleave( ()=> {
            //     hh.find("div").removeClass("yiru")
            // })
})
