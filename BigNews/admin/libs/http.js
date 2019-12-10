(function(w){
var baseURL='http://localhost:8080/api/v1';
var BigNew={
    baseURL:baseURL,
    user_login: baseURL + '/admin/user/login',//用户登录
    user_info: baseURL +'/admin/user/info',//用户信息
    user_detail: baseURL + '/admin/user/detail',//用户详情
    user_edit: baseURL + '/admin/user/edit',//编辑用户信息
    category_list: baseURL + '/admin/category/list', //文章类别查询
    category_add: baseURL + '/admin/category/add',//文章类别新增
    category_search: baseURL +'/admin/category/search',//文章类别搜索
    category_edit: baseURL +'/admin/category/edit',//文章类别编辑
    category_delete: baseURL +'/admin/category/delete',//文章类别删除
    article_query: baseURL+'/admin/article/query',//文章搜索
    article_publish: baseURL+'/admin/article/publish',//发布文章
    article_search: baseURL+'/admin/article/search',//根据id获取文章信息
    article_edit: baseURL+'/admin/article/edit',//文章编辑
    article_delete: baseURL+'/admin/article/delete',//删除文章
    comment_list:baseURL+'/admin/comment/search',//文章评论搜索
    comment_pass:baseURL+'/admin/comment/pass',//评论审核通过
    comment_reject:baseURL+'/admin/comment/reject',//评论审核不通过
    comment_delete:baseURL+'/admin/comment/delete' //删除评论
};

// 暴露接口
w.BigNew = BigNew;
})(window)