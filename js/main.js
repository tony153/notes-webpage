// JavaScript Document
var record_list=new Array();
initialization();
function initialization(){
	$("#qi_i1").val(localStorage.getItem("qi_i1"));
	$("#qi_i2").val(localStorage.getItem("qi_i2"));
//	$("#qi_i3").val(localStorage.getItem("qi_i3"));
	
	if(JSON.parse(localStorage.getItem("record_list")) != null ){
		record_list=JSON.parse(localStorage.getItem("record_list"));
		
		for(let i=0;i<record_list.length;i++){
			$("#record ul").prepend("<li><div class='cont'>"+record_list[i]+"<div id='del'>❌</div></div></li>");
		}
		checkListIsempty();
	}
	
}

function checkListIsempty(){
	if(record_list.length===0||record_list===null){
		$("#record ul").append("<empty>~空空如也~ (≧д≦ヾ)</empty>");
	}else if(record_list.length>0){
		$("empty").remove();
	}
}

$("#submit_button").on("click",function(){
	
	if($("#input textarea").val().trim()!==""){
		record_list.push($("#input textarea").val());
		$("#record ul").prepend("<li><div class='cont'>"+record_list[record_list.length-1]+"<div id='del'>❌</div></div></li>");
		$("#input textarea").val("");
		checkListIsempty();
		
		localStorage.setItem("record_list", JSON.stringify(record_list));
	}
});


$("#record ul").on("click","#del",function(){
	record_list.splice((record_list.length-1-$(this).closest("li").index()),1);
	$(this).closest("li").remove();
	checkListIsempty();
	
	localStorage.setItem("record_list", JSON.stringify(record_list));
});


$("#setting_button").on("click",function(){
	$("#setting_box").show();
	$("#setting_button").hide(500);
});
$("#set").on("click",function(){
	$("#setting_box").hide();
	$("#setting_button").show(500);
	localStorage.setItem("qi_i1", $("#qi_i1").val());
	localStorage.setItem("qi_i2", $("#qi_i2").val());
//	localStorage.setItem("qi_i3", $("#qi_i3").val());
});




$("#qi_current_date").on("click",function(){
	let dt = new Date();
	let current_date=dt.getDate()+"/"+(dt.getMonth()+1)+"/"+dt.getFullYear()+" ";
	let temp=$("#input textarea").val();
	$("#input textarea").val(temp+current_date);
});

$("#qi_current_time").on("click",function(){
	let dt = new Date();
	let current_time=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()+" ";
	let temp=$("#input textarea").val();
	$("#input textarea").val(temp+current_time);
});

$("#qi_s1").on("click",function(){
	let temp=$("#input textarea").val();
	$("#input textarea").val(temp+$("#qi_i1").val());
});
$("#qi_s2").on("click",function(){
	let temp=$("#input textarea").val();
	$("#input textarea").val(temp+$("#qi_i2").val());
});
//$("#qi_s3").on("click",function(){
//	let temp=$("#input textarea").val();
//	$("#input textarea").val(temp+$("#qi_i3").val());
//});


$("#clear_qs").on("click",function(){
	$("#qi_i1").val("");
	$("#qi_i2").val("");
	localStorage.removeItem("qi_i1");
	localStorage.removeItem("qi_i2");
})

$("#clear_record").on("click",function(){
	localStorage.removeItem("record_list");
	record_list=new Array();
	$("#record ul li").remove();
	console.log(JSON.stringify(record_list));
})
