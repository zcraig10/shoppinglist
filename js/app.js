$(document).ready(function() {
	
	$("#add-button").click(function() {
		var item = $("#todo").val();
		$(".list").append('<li class="item">'+item+'</li>');
		//makes input box blank
		$("#todo").val("");
	})
	$(".item").click(function() {
		$(this).wrap("<strike>");
		$(this).fadeOut("slow");
	})
});

function deleteitem(item) {

}

//jQuery:
// clear whole list when done??

//CSS:
//align items on lines


//figure out how to use onclick to call the deleteitem function
//hint: don't use item.click 