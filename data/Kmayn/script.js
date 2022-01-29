	

$(document).ready(function(){
	$("#show_panel3").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#myTable tr").filter( function() {
			
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > 2);
			//$("#myTable tr")[0].addClass(".selectedSearch");
		});
		
		if($("#show_panel3").val() == "")
		{
			$("#myTable tr").show();
		}

	});
	
});
