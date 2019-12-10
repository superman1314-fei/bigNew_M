(function(){
    $.get({
        url:BigNew.user_detail,
        success:function(res){
        //  $('input.username').val(res.data.username);
        //      $('input.nickname').val(res.data.nickname);
        //      $('input.email').val(res.data.email);
        //  $('input.password').val(res.data.password);
            
            for(var key in res.data){
                $('input.'+key).val(res.data[key])
            }
             $('img.user_pic').attr('src',res.data.userPic)
            
        }
    })
$('#exampleInputFile').on('change',function(){
    // console.dir(this);
    let file=this.files[0]
    let url =URL.createObjectURL(file)
    $('.user_pic').attr('src',url)

})
$('.btn-edit').on('click',function(e){
    e.preventDefault(); //阻止默认跳转
    let form=$('#form')[0] //需要转为dom对象 拿到数据
    let userdata=new FormData(form);//需要new 出来的FormData 提交数据
    // console.log(userdata);
    
    $.post({
        url:BigNew.user_edit,
        data:userdata,
        processData:false,//阻止编译
        contentType:false,//不要设置请求类型
        success:function(res){
            if(res.code===200){
                // parent.location.reload()  父页刷新
                $.get({
                    url:BigNew.user_info,
                    success:function(res){
                       parent.$('.user_info img').attr('src',res.data.userPic)
                       parent.$('.user_info span').html('欢迎&nbsp;&nbsp;&nbsp'+res.data.nickname);
                       parent.$('.user_center_link img').attr('src',res.data.userPic)
                        
                       
                }
            })
            
        }
        }
})
})
})()