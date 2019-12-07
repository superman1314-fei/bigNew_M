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
}
})(window)