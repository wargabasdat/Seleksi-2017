$(document).ready(function() {
	var chart = $("#line-chartcanvas-laos");

	var jumlah = {
		labels : ["2014", "2015", "2016"],
		datasets : [
			{
				label : "Pengguna Internet",
				data : [pengguna_laos_2014, pengguna_laos_2015, pengguna_laos_2016],
				backgroundColor : "lightgreen",
				borderColor : "lightgreen",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Media Sosial",
				data : [medsos_laos_2014, medsos_laos_2015, medsos_laos_2016],
				backgroundColor : "turquoise",
				borderColor : "turquoise",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Hiburan",
				data : [hiburan_laos_2014, hiburan_laos_2015, hiburan_laos_2016],
				backgroundColor : "lightblue",
				borderColor : "lightblue",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Berita",
				data : [berita_laos_2014, berita_laos_2015, berita_laos_2016],
				backgroundColor : "pink",
				borderColor : "pink",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Pendidikan",
				data : [pendidikan_laos_2014, pendidikan_laos_2015, pendidikan_laos_2016],
				backgroundColor : "violet",
				borderColor : "violet",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Komersial",
				data : [komersial_laos_2014, komersial_laos_2015, komersial_laos_2016],
				backgroundColor : "gold",
				borderColor : "gold",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Layanan Publik",
				data : [layananpublik_laos_2014, layananpublik_laos_2015, layananpublik_laos_2016],
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
			text : "Penggunaan Internet di Laos",
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