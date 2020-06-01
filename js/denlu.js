
const den = {
    reupdate: function () {
        var html = `<div class="box0">
            <div class="box1">
            <div class="box2">
                <div>
                    <input type="text" id="userInput2" placeholder="邮箱/手机号码/安踏帐号">
                    <input type="password" id="pwdInput2" placeholder="密码">
                    <div class="denru">
                        <input  class="btn11"  type="submit" id="btn2" value="立即登录">
                    </div>
                </div>
                <div class="box3">
                    <span>其它方式登录</span>
                </div>
            </div>
            <div class="box4">
                <img src="../img/7YGS$WID74)28X{I405{1[4.png" alt="" >
            </div>
            <div class="box5" >
            <a class="outer-link" style="text-decoration: none;
            color: #333; padding-right: 5px;"  href="/antacom/passport/reg">帐号注册</a><span>|</span>
            <a class="outer-link" style="text-decoration: none;
            color: #333;" href="/antacom/passport/forgot">忘记密码</a>
            </div>
            </div >
            </div>`
        $(".shengti").html(html);
    },
    zuce: function(){
        var html = ` <div class="box0">
        <div class="box1">
            <div id="fitting-tab" class="fitting-tab">
                <div class="fitting-text  fit-active" id="btn1" style="background-color: black;">
                    <div class="trangle  trangle1" ></div>
                    手机注册
                </div>
                <div class="fitting-text " id="btn2">
                    <div class="trangle1" ></div>
                    邮箱注册
                </div>


                <div class="shouji0">
                    <h5>请输入手机号码注册：</h5>
                    <input type="text" class="input1" placeholder="手机号码">
                    <input type="text" class="input1" placeholder="验证码" style="width: 170px;">
                    <img src="../img/RUA$YP}]H9Z2J5{IP)W~7D8.png" alt="" style="  min-width: 20px; width: 120px; position: relative;
                top: 18px;">
                    <div>
                        <input type="checkbox" name="agree" id="agree-check">
                        我已充分阅读、理解并接受隐私政策的全部内容
                    </div>


                    <input class="btn11" type="submit" id="submit_button" value="确认">
                </div>
                <div class="shouji1" style="display: none;">
                    <h5>请输入邮箱地址注册：</h5>
                    <input type="text" class="input1" id="userInput1"  placeholder="e-mail">
                    <input type="password" class="input1" id="pwdInput1" placeholder="密码">
                    <input type="text" class="input1" placeholder="验证码" style="width: 170px;">
                    <img src="../img/RUA$YP}]H9Z2J5{IP)W~7D8.png" alt="" style="min-width: 20px; width: 120px; position: relative;
                top: 18px;">
                    <div>
                        <input type="checkbox" name="agree" id="agree-check">
                        我已充分阅读、理解并接受隐私政策的全部内容
                    </div>
                    <input class="btn11" type="submit" id="btn99" value="确认">
                </div>
            </div>
        </div>
    </div>`
    $(".shengti").html(html);
             var shouji =  document.getElementById("btn1")
             var youxiang = document.getElementById("btn2")
             var shouji0 = document.querySelector(".shouji0")
             var shouji1 = document.querySelector(".shouji1")
             var sanjiao = document.querySelectorAll(".trangle1")
             youxiang.onclick = function(){
                 shouji0.style.display = "none"
                 shouji1.style.display = "block"
                 youxiang.style.background = "#000"
                 shouji.style.background = "#ccc"
                 sanjiao[0].className = '';
                 sanjiao[1].className = 'trangle';
                 
             }
             shouji.onclick = function(){
                 shouji0.style.display = "block"
                 shouji1.style.display = "none"
                 shouji.style.background = "#000"
                 youxiang.style.background = "#ccc"
                 sanjiao[1].className = '';
                 sanjiao[0].className = 'trangle';
             }
             
    }
}


