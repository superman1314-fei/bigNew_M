$(function(){
    getData()
function getData(){
    $.get({
        url:BigNew.category_list,
        success:function(res){
            // console.log(res);
            $('tbody').html(template('categoryList',res))//动态生成数据
        }
    })
}
$('#myModal').on('show.bs.modal	',function(e){
    let dom=e.relatedTarget;
   
    
    if(dom==$('#xinzengfenlei')[0]){
        $('#exampleModalLabel').text('新增文章分类')
        $('.btn-confirm').text('新增').addClass('.btn-success').removeClass('ben-primary')
        $('form')[0].reset();//将表单中的数据全部重置，而且reset这个方法是原生对象需要转为dom对象
        $('.btn-confirm').on('click',function(){
            let name=$('#recipient-name').val()
            let slug=$('#message-text').val()
            if(name=='' || slug==''){
                alert('请写数据')
                return;
            }
            $.post({
                url:BigNew.category_add,
                data:{
                    name:name,
                    slug:slug
                },
                success:function(res){
                    console.log(res);
                    if(res.code==201){
                        $('#myModal').modal('hide')
                        getData()
                    }
                
                }
            })
        })
    }else{
        $('#exampleModalLabel').text('编辑文章分类')
        $('.btn-confirm').text('编辑').addClass('btn-primary').removeClass('btn-success');
        //得到一个文章类别的id 根据id，发送ajax请求
        let cateId=$(dom).attr('data-id')
       $.get({
           url:BigNew.category_search,
           data:{id:cateId},
           success:function(res){
             if(res.code===200){
                 $('#recipient-name').val(res.data[0].name)
                 $('#message-text').val(res.data[0].slug)
                 $('#cateid').val(res.data[0].id)
               
                 
                 
             }
               
           }
       })
       $('.btn-confirm').on('click',function(){
           let name=$('#recipient-name').val()
           let slug=$('#message-text').val()
           let id=$('#cateid').val()
        //    console.log(13);
           
           $.post({
               url:BigNew.category_edit,
               data:{name:name,slug:slug,id:id},
               success:function(res){
                $('#myModal').modal('hide')
                getData()
                
              }
           })
        
       })
        

    }
  
})
  // 实现删除,因为我们不能直接给注册事件，需要用委托来做
      $('tbody').on('click','#btn-delete',function(){
          let deleteId=$(this).attr('data-id');
        //   console.log(deleteId);
        let ans = confirm('你确定要删除吗')
       
        if(ans){
            $.post({
                url:BigNew.category_delete,
                data:{id:deleteId},
                success:function(res){
                    // console.log(res);
                    if(res.code===204){
                        getData()
                    }
                }
            })
        }
          
      })



})
