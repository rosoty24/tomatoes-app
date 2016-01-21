// ============== Categories ================
Router.route('/admin/addCategory', {
    name: 'categories'
});
Router.route('/admin/manageCategory', {
    name: 'manageCategory'
});

Router.route('/admin/updateCategory/:_id',{
    name:'updateCategory',
    data:function(){
        return category.findOne({_id: this.params._id});
    }
});


// Router.route('/manageCategory',{
// 	name:'manageCategory'
// });

// Router.route('/addcategory',{
// 	name:'addcategory'
// });

// Router.route('/updateCategory/:_id',{
//     name: 'updateCategory',
//     data: function(){
//         var id = this.params._id;
//         var da = category.findOne({_id: id });
//         return da;
//     }
// });