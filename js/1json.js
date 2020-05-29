$(function(){
    $.ajax({
        type: "get",
        url: "./json/1.json",
        success: function (arr) {
            //arr 所有的数据
            // var cookieStr = $.cookie("goods");
            // if (cookieStr) {
            //     var cookieArr = JSON.parse(cookieStr);

            //     var newArr = [];
            //     for (var i = 0; i < arr.length; i++) {
            //         for (var j = 0; j < cookieArr.length; j++) {
            //             if (arr[i].id == cookieArr[j].id) {
            //                 //将商品的数量赋值上去
            //                 arr[i].num = cookieArr[j].num;

            //                 //这个商品加入购物车过
            //                 newArr.push(arr[i]);
            //             }
            //         }
            //     }

                //newArr 加入购物车，商品详情数据
                //想办法将数据添加到页面上
                var html = ``;
                for (var i = 0; i < arr.length; i++) {
                    html += `<li class="goods-item J_goods_item">
                    <div class="goods-body">
                        <a class="goods-pic">
                            <img
                                alt="" class="loading J_goods_img"
                                src="${arr[i].img}"
                                style="display: inline;"></a> <a target="_blank" href="/goods-12696.html"
                            class="goods-name ellipsis">${arr[i].wenzi}</a>
                        <div class="goods-thumbs J_goods_thumbs">
                        </div> <a target="_blank" href="/goods-12696.html" class="goods-price">
                            <span>${arr[i].jiage}</span>
                            <span class="mkt-price">￥269.00</span></a>
                    </div>
                </li>`;
                }

                $(".goods").find("ul").html(html);
            }
        
    })
    $.ajax({
        type: "get",
        url: "./json/2.json",
        success: function (arr) {
            //arr 所有的数据
            // var cookieStr = $.cookie("goods");
            // if (cookieStr) {
            //     var cookieArr = JSON.parse(cookieStr);

            //     var newArr = [];
            //     for (var i = 0; i < arr.length; i++) {
            //         for (var j = 0; j < cookieArr.length; j++) {
            //             if (arr[i].id == cookieArr[j].id) {
            //                 //将商品的数量赋值上去
            //                 arr[i].num = cookieArr[j].num;

            //                 //这个商品加入购物车过
            //                 newArr.push(arr[i]);
            //             }
            //         }
            //     }

                //newArr 加入购物车，商品详情数据
                //想办法将数据添加到页面上
                var html = ``;
                for (var i = 0; i < arr.length; i++) {
                    html += `<li class="goods-item J_goods_item">
                    <div class="goods-body">
                        <a class="goods-pic">
                            <img
                                alt="" class="loading J_goods_img"
                                src="${arr[i].img}"
                                style="display: inline;"></a> <a target="_blank" href="/goods-12696.html"
                            class="goods-name ellipsis">${arr[i].wenzi}</a>
                        <div class="goods-thumbs J_goods_thumbs">
                        </div> <a target="_blank" href="/goods-12696.html" class="goods-price">
                            <span>${arr[i].jiage}</span>
                            <span class="mkt-price">￥269.00</span></a>
                    </div>
                </li>`;
                }

                $(".goods2").find("ul").html(html);
            }
        
    })
})