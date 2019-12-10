(function(){
    $('.input_sub').on('click',function(e){
      e.preventDefault();//阻止默认行为
      // 注册点击登录事件
      $('.input_sub').on('click',function(){
        let email=$('.input_txt').val().trim();
        let pass=$('.input_pass').val().trim();
        if(email===''||pass==='' ){
          $('.modal-body').text('请输入正确的用户名或者密码');
          $('#example').modal({keyboard:true})//按esc取消模态框
          return;
        }else{
          $.ajax({
            url:'http://localhost:8080/api/v1/admin/user/login',
            // url:'window.BigNew.user_login',
            type:'post',
            // dataType:'json',
            data:{
              username:email,
              password:pass
            },
            success:function(res){
            if(res.code===200){
              localStorage.setItem('token',res.token);
              $('.modal-body').text(res.msg);
              $('#example').modal();
              $('#example').on('hidden.bs.modal',function(){
                location.href='./index.html'
              })
            }else{
              $('.modal-body').text(res.msg );
              $('#example').modal({keyboard:true});
            }
            }
          })

        }
      })
    });
   
})()
