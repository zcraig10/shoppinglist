$(document).ready(function() {
	
	$("#add-button").click(function() {
		var item = $("#todo").val();
			$(".list").append(item);
	})
});

//	$("#todo").click(function() {
//		$(".list").append("1");
//	})
//});