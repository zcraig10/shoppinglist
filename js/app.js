$(document).ready(function() {
	
	$("#add-button").click(function() {
		var item = $("#todo").val();
			$(".list").append(item);
	})
});

//jQuery:
// make input box blank after clicking add-button
// new item needs to go to new line
// strikethrough after clicking on item
// clear whole list when done??

//CSS:
//align items on lines