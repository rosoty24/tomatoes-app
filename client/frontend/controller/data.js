Template.data.rendered = function(){
	var bar = $('.value-bar');
	$(function(){
	  $(bar).each(function(){
	    bar_width = $(this).attr('aria-valuenow');
	    $(this).width(bar_width + '%');
	  });
	});
};
Template.data.helpers({
	getdata:function(){
		return data.find({});
	}
});