$(document).ready(function() {
	var chart = $("#line-chartcanvas");

	var jumlah = {
		labels : ["2014", "2015", "2016"],
		datasets : [
			{
				label : "",
				data : [pengguna_brunei_2014, pengguna_brunei_2015, pengguna_brunei_2016],
				backgroundColor : "blue",
				borderColor : ["rgb(177, 201, 249)"],
				fill : false,
				lineTension : 0,
				pointRadius : 5
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Pengguna Internet di Brunei",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : false
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
	};

	var chart = new Chart( chart, {
		type : "line",
		data : jumlah,
		options : options
	} );
	
});