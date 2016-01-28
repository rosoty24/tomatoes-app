Session.set('CURRENTURL','');
Template.leftside.helpers({
    detial:function(){
    	//alert("Helo");
    	var current = Session.get('CURRENTURL');
    	console.log("GET Curernt "+current);
    	if(current){
            return true;
        }else{
            return false;
        }
    }
});