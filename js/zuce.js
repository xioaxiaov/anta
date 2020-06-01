var user = document.querySelector('#user')
var bbb = document.querySelector("#ul11")
var a = document.querySelector(".ul2")
var exit = document.querySelector('#exit')
 
// 验证cookie是否存在
var username = utils.getCookie('username')
if (username) {
    // 已登录
    bbb.style.display="none"
    a.style.display="block"
    bbb.innerHTML = username
}
 
console.log(exit);
// 退出登录
utils.on(exit, 'click', function () {
    if (confirm('确定要退出吗？')) {
        // 删除cookie，切换样式
        utils.setCookie('username', '', { expires: -1, path: '/' })
        a.style.display="none"
        bbb.style.display="block"
    } 
})



 var shen = document.querySelector(".shengti")
utils.on(shen, 'click', function (e) {
    e = e || window.event
    var target = e.target||e.srcElement
    // 取到用户名和密码发送后端
    if(target.id == "btn99"){
        var btn1 = document.getElementById('#btn99')
var userInput1 = document.querySelector('#userInput1')
var pwdInput1 = document.querySelector('#pwdInput1')
    
    var username = userInput1.value
    var pwd = pwdInput1.value
    // 发请求
    // url: api/user/register.php
    // method: post
    // query: { username, pwd }
    // response: { code: 1, msg: '注册成功' }
    utils.post('../api/user/register.php', { username, pwd }, resp => {
        console.log(resp)
        if (resp.code === 1) {
            alert(`${resp.msg}，即将跳转登录页`)
            location.replace('./login.html')
        } else {
            alert(resp.msg)
        }
            
    })}
 
    // 阻止默认行为，让表单不提交
    if (e.preventDefault) {
        e.preventDefault()
    } else {
        return false
    }
})


 
utils.on(shen, 'click', function (e) {
    e = e || window.event
    var target = e.target||e.srcElement
    
    if(target.id=="btn99"){

    
    var btn2 = document.querySelector('#btn99')
    var userInput2 = document.querySelector('#userInput2')
    var pwdInput2 = document.querySelector('#pwdInput2')

    var username = userInput2.value
    var pwd = pwdInput2.value
    // 发送登录请求
    utils.post('../api/user/login.php', { username, pwd }, resp => {
        console.log(resp)
        if (resp.code === 1) {
            // 存cookie，这里作为演示咱们直接存用户名
            // 真实开发当中得结合后端，这里存令牌
            utils.setCookie('username', username, { path: '/'})
            alert(`${resp.msg}，即将返回首页`)
            location.href = '../index.html'
        } else {
            alert(resp.msg)
        }
    })
 
    if (e.preventDefault) {
        e.preventDefault()
    } else {
        return false
    }}
})