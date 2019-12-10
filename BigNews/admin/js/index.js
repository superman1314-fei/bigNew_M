    
(function(){
    $.ajax({
        url:'http://localhost:8080/api/v1/admin/user/info',
        type:'get',
        success:function(res){
            $('.user_info img').attr('src',res.data.userPic)
            $('.user_info span').html('欢迎&nbsp;&nbsp;&nbsp'+res.data.nickname+'');
            $('.user_center_link img').attr('src',res.data.userPic)
        }
    })
    //退出功能 删除token和跳转登录页面
    $('.logout').on('click',function(){
        //删除token
            localStorage.removeItem('token');
            //跳转登录页
            window.location.href='./login.html'
    })
})()
$('div.level01 ').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
    // $('ul.level02 li.eq()')index
    if($(this).index()===1){
        $('.level02').stop().slideToggle();//获取上卷 和下拉
       $('.level02 li:eq(0) a')[0].click() //点击文章管理默认第一个
        $(this).find('b').toggleClass('rotate0')//箭头旋转

        
    }
    
    
})
$('.level02>li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
})