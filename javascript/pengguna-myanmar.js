$(document).ready(function() {
	var chart = $("#line-chartcanvas");

	var jumlah = {
		labels : ["2014", "2015", "2016"],
		datasets : [
			{
				label : "Pengguna Internet",
				data : [pengguna_myanmar_2014, pengguna_myanmar_2015, pengguna_myanmar_2016],
				backgroundColor : "lightgreen",
				borderColor : "lightgreen",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Media Sosial",
				data : [medsos_myanmar_2014, medsos_myanmar_2015, medsos_myanmar_2016],
				backgroundColor : "turquoise",
				borderColor : "turquoise",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Hiburan",
				data : [hiburan_myanmar_2014, hiburan_myanmar_2015, hiburan_myanmar_2016],
				backgroundColor : "lightblue",
				borderColor : "lightblue",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Berita",
				data : [berita_myanmar_2014, berita_myanmar_2015, berita_myanmar_2016],
				backgroundColor : "pink",
				borderColor : "pink",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Pendidikan",
				data : [pendidikan_myanmar_2014, pendidikan_myanmar_2015, pendidikan_myanmar_2016],
				backgroundColor : "violet",
				borderColor : "violet",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Komersial",
				data : [komersial_myanmar_2014, komersial_myanmar_2015, komersial_myanmar_2016],
				backgroundColor : "gold",
				borderColor : "gold",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Layanan Publik",
				data : [layananpublik_myanmar_2014, layananpublik_myanmar_2015, layananpublik_myanmar_2016],
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
			text : "Penggunaan Internet di Myanmar",
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