$("#submit").click(function(e){
	
	$("#submit").attr("disabled", true);
	var _url = "http://52.24.102.160:8080/getdeals"
	 $.ajax({
        type : 'GET',
        url : _url,           
        data: $("#input"),
        success: function (msg) {
			var results = msg.results;
			var left = true;
			var res = "";
			if (results.length == 0) {
				$("#shead").html("No Results");
			} else {
				var summary = "Found <b><font color = 'red'>" + results.length+ "</b></font> Deals For <font color = 'red'><b>" + document.getElementById("input").value + "</b></font>";
				$("#shead").html(summary);
			}
			for (var i=0; i<results.length; i++) {
				var content;
				if (left) {
					content = 
							"<div class='timeline-item alt'>"+
                      		"<div class='timeline-desk'>"+
                          	"<div class='panel'>"+
                            "<div class='panel-body'>"+
                            "<span class='timeline-icon red'>"+
                            "<i class='fa fa-check-square-o'></i>"+
							"</span><h1>";
					var d = new Date(results[i].DealDate);
					d = d.toDateString();
					var date = d.substr(4, d.length-4);
					content+= date;
					content+= "</h1><p><strong>Deal Title:</strong> ";
					content+= results[i].DealTitle;
					content+= "</p><p><strong>Associate:</strong> ";
					content+= (results[i].FirstName + ' ' + results[i].LastName);
					content+= "</p><p><strong>Contact:</strong> ";
					content+= results[i].EmailAddress;
					content+= "</p><p><strong>Revenue:</strong> ";
					content+= results[i].Revenue;
					content+= "</p></div></div></div></div>";

				} else {
					content =
					"<div class='timeline-item'>"+
                    "<div class='timeline-desk'>"+
                    "<div class='panel'>"+
                    "<div class='panel-body'>"+
                    "<span class='timeline-icon red'>"+
                    "<i class='fa fa-check-square-o'></i>"+
					"</span><h1>";
					var d = new Date(results[i].DealDate);
					d = d.toDateString();
					var date = d.substr(4, d.length-4);
					content+= date;
					content+= "</h1><p><strong>Deal Title:</strong> ";
					content+= results[i].DealTitle;
					content+= "</p><p><strong>Associate:</strong> ";
					content+= (results[i].FirstName + ' ' + results[i].LastName);
					content+= "</p><p><strong>Contact:</strong> ";
					content+= results[i].EmailAddress;
					content+= "</p><p><strong>Revenue:</strong> ";
					content+= results[i].Revenue;
					content+= "</p></div></div></div></div>";
				} 
				left = !left;
				res += content;
			}
			$("#result").html(res);
				 $("#submit").attr("disabled", false);
		}
	 });

});
