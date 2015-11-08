$(document).ready(function() {
	
	$("#add-button").click(function() {
		var item = $("#todo").val();
		$(".list").append('<li class="item">'+item+'</li>');
		//makes input box blank
		$("#todo").val("");
	})

	$(".list").on('click', 'li', function() {
		$(this).wrap("<strike>");
		$(this).fadeOut("slow");
	})
});
