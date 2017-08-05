$(document).ready(function() {
	var chart = $("#line-chartcanvas");

	var jumlah = {
		labels : ["2014", "2015", "2016"],
		datasets : [
			{
				label : "Pengguna Internet",
				data : [pengguna_thailand_2014, pengguna_thailand_2015, pengguna_thailand_2016],
				backgroundColor : "lightgreen",
				borderColor : "lightgreen",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Media Sosial",
				data : [medsos_thailand_2014, medsos_thailand_2015, medsos_thailand_2016],
				backgroundColor : "turquoise",
				borderColor : "turquoise",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Hiburan",
				data : [hiburan_thailand_2014, hiburan_thailand_2015, hiburan_thailand_2016],
				backgroundColor : "lightblue",
				borderColor : "lightblue",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Berita",
				data : [berita_thailand_2014, berita_thailand_2015, berita_thailand_2016],
				backgroundColor : "pink",
				borderColor : "pink",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Pendidikan",
				data : [pendidikan_thailand_2014, pendidikan_thailand_2015, pendidikan_thailand_2016],
				backgroundColor : "violet",
				borderColor : "violet",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Komersial",
				data : [komersial_thailand_2014, komersial_thailand_2015, komersial_thailand_2016],
				backgroundColor : "gold",
				borderColor : "gold",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Layanan Publik",
				data : [layananpublik_thailand_2014, layananpublik_thailand_2015, layananpublik_thailand_2016],
				backgroundColor : "orange",
				borderColor : "orange",
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
			text : "Penggunaan Internet di Thailand",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "right"
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