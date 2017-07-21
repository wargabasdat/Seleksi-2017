$(document).ready(function () {
	var chart = $("#bar-chartcanvas");
	
	var pengguna = {
		labels : [""],
		datasets : [
			{
				label : "Brunei Darussalam",
				data : [pengguna_brunei_2014],
				backgroundColor : ["rgb(220, 110, 110)"],
				borderColor : ["rgb(161, 54, 54)"],
				borderWidth : 1
			},
			{
				label : "Indonesia",
				data : [pengguna_indonesia_2014],
				backgroundColor : ["rgb(238, 181, 194)"],
				borderColor : ["rgb(232, 120, 146)"],
				borderWidth : 1
			},
			{
				label : "Malaysia",
				data : [pengguna_malaysia_2014],
				backgroundColor : ["rgb(210, 139, 210)"],
				borderColor : ["rgb(181, 75, 181)"],
				borderWidth : 1
			},
			{
				label : "Singapura",
				data : [pengguna_singapura_2014],
				backgroundColor : ["rgb(181, 158, 229)"],
				borderColor : ["rgb(151, 113, 228)"],
				borderWidth : 1
			},
			{
				label : "Vietnam",
				data : [pengguna_vietnam_2014],
				backgroundColor : ["rgb(184, 205, 253)"],
				borderColor : ["rgb(128, 166, 255)"],
				borderWidth : 1
			},
			{
				label : "Laos",
				data : [pengguna_laos_2014],
				backgroundColor : ["rgb(209, 247, 255)"],
				borderColor : ["rgb(169, 242, 255)"],
				borderWidth : 1
			},
			{
				label : "Thailand",
				data : [pengguna_thailand_2014],
				backgroundColor : ["rgb(148, 205, 178)"],
				borderColor : ["rgb(103, 203, 156)"],
				borderWidth : 1
			},
			{
				label : "Filipina",
				data : [pengguna_filipina_2014],
				backgroundColor : ["rgb(183, 235, 172)"],
				borderColor : ["rgb(144, 233, 126)"],
				borderWidth : 1
			},
			{
				label : "Myanmar",
				data : [pengguna_myanmar_2014],
				backgroundColor : ["rgb(199, 213, 108)"],
				borderColor : ["rgb(188, 210, 43)"],
				borderWidth : 1
			},
			{
				label : "Kamboja",
				data : [pengguna_kamboja_2014],
				backgroundColor : ["rgb(225, 203, 117)"],
				borderColor : ["rgb(222, 190, 64)"],
				borderWidth : 1
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Pengguna Internet Tahun 2014",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "right"
		},
		scales : {
			yAxes : [
				{
					ticks : {
						beginAtZero: true
					}
				}
			]
		}
	};

	var chart = new Chart(chart, {
		type : "bar",
		data : pengguna,
		options : options
	});

});