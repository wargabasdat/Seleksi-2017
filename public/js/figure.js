function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}


var kab = getParameterByName("kab");
var figure;
var x = 2;
if (kab == "Denpasar") {
  figure = {
    "frames": [], 
    "layout": {
      "autosize": false, 
      "dragmode": "pan", 
      "yaxis": {
        "range": [
          0, 
          600.8947368421052
        ], 
        "type": "linear", 
        "autorange": false, 
        "title": "Rata-rata Kunjungan Wisatawan/Hari"
      }, 
      "paper_bgcolor": "rgb(255, 255, 255)", 
      "plot_bgcolor": "rgb(255, 255, 255)", 
      "title": "Grafik Kunjungan Wisatawan ke Objek Wisata di Kota Denpasar", 
      "height": 523, 
      "width": 930, 
      "titlefont": {
        "size": 21
      }, 
      "xaxis": {
        "range": [
          -0.5, 
          15.485590778097983
        ], 
        "type": "category", 
        "autorange": false, 
        "title": "Objek Wisata"
      }, 
      "hovermode": "closest", 
      "breakpoints": [], 
      "margin": {
        "r": 110, 
        "b": 135, 
        "l": 90
      }
    }, 
    "data": [
      {
        "autobinx": true, 
        "uid": "46e5fa", 
        "ysrc": "IdaAyuAri:4:1a8b24", 
        "xsrc": "IdaAyuAri:4:598200", 
        "name": "B", 
        "mode": "markers", 
        "y": [
          "119", 
          "16", 
          "40", 
          "590", 
          "1", 
          "36", 
          "45", 
          "1", 
          "440", 
          "9", 
          "2", 
          "208", 
          "0", 
          "0"
        ], 
        "x": [
          "MUSEUM BALI", 
          "MUSEUM LEMAYUR", 
          "TAMAN BUDAYA", 
          "SERANGAN", 
          "PRASASTI BLANJONG", 
          "PS. KUMBASARI", 
          "PASAR BADUNG", 
          "MUSEUM SIDIK JARI", 
          "MONUMEN PERJUANGAN RAKYAT BALI", 
          "MANGROVE PARK", 
          "PURA DALEM SAKENAN", 
          "DESA BUDAYA KERTALANGU", 
          "PURA MASPAHIT TONJA", 
          "PURA MASPAHIT GRENCENG"
        ], 
        "type": "bar", 
        "autobiny": true
      }
    ]
  }
} else if (kab == "Gianyar") {
  figure = {
    "frames": [], 
    "layout": {
      "autosize": false, 
      "dragmode": "pan", 
      "yaxis": {
        "range": [
          0, 
          1297.8947368421052
        ], 
        "type": "linear", 
        "autorange": false, 
        "title": "Rata-rata Kunjungan Wisatawan/Hari"
      }, 
      "paper_bgcolor": "rgb(255, 255, 255)", 
      "plot_bgcolor": "rgb(255, 255, 255)", 
      "title": "Grafik Kunjungan Wisatawan ke Objek Wisata di Kabupaten Gianyar", 
      "height": 523, 
      "width": 930, 
      "titlefont": {
        "size": 21
      }, 
      "xaxis": {
        "range": [
          -0.5, 
          19.485590778097983
        ], 
        "type": "category", 
        "autorange": false, 
        "title": "Objek Wisata"
      }, 
      "hovermode": "closest", 
      "breakpoints": [], 
      "margin": {
        "r": 110, 
        "b": 135, 
        "l": 90
      }
    }, 
    "data": [
      {
        "autobinx": true, 
        "uid": "46e5fa", 
        "ysrc": "IdaAyuAri:4:1a8b24", 
        "xsrc": "IdaAyuAri:4:598200", 
        "name": "B", 
        "mode": "markers", 
        "y": [
          "1233", 
          "796", 
          "88", 
          "390", 
          "22", 
          "2", 
          "453", 
          "571", 
          "217", 
          "835", 
          "99", 
          "19", 
          "139", 
          "13", 
          "93", 
          "81", 
          "124", 
          "121", 
          "43"
        ], 
        "x": [
          "TIRTA EMPUL", 
          "GOA GAJAH", 
          "GUNUNG KAWI SEBATU", 
          "GUNUNG KAWI TAMPAKSIRING", 
          "YEH PULU", 
          "ALAM SIDAN", 
          "TAMAN BURUNG & RIMBA REPTIL", 
          "BALI ZOO PARK", 
          "WISATA GAJAH TARO", 
          "BALI SAFARI AND MARINE PARK", 
          "RAFTING ADVENTURE", 
          "RAFTING SOBEK", 
          "TAMAN NUSA", 
          "MUSEUM RUDANA", 
          "MUSEUM NEKA", 
          "MUSEUM ARMA", 
          "MUSEUM RATNA WARTA", 
          "MUSEUM ANTONIO BLANCO", 
          "MUSEUM ARKEOLOGI GARCA"
        ], 
        "type": "bar", 
        "autobiny": true
      }
    ]
  }
} else if (kab == "Badung"){
  figure = {
    "frames": [], 
    "layout": {
      "autosize": false, 
      "dragmode": "pan", 
      "yaxis": {
        "range": [
          0, 
          3200.8947368421052
        ], 
        "type": "linear", 
        "autorange": false, 
        "title": "Rata-rata Kunjungan Wisatawan/Hari"
      }, 
      "paper_bgcolor": "rgb(255, 255, 255)", 
      "plot_bgcolor": "rgb(255, 255, 255)", 
      "title": "Grafik Kunjungan Wisatawan ke Objek Wisata di Kabupaten Badung", 
      "height": 523, 
      "width": 930, 
      "titlefont": {
        "size": 21
      }, 
      "xaxis": {
        "range": [
          -0.5, 
          8.485590778097983
        ], 
        "type": "category", 
        "autorange": false, 
        "title": "Objek Wisata"
      }, 
      "hovermode": "closest", 
      "breakpoints": [], 
      "margin": {
        "r": 110, 
        "b": 135, 
        "l": 90
      }
    }, 
    "data": [
      {
        "autobinx": true, 
        "uid": "46e5fa", 
        "ysrc": "IdaAyuAri:4:1a8b24", 
        "xsrc": "IdaAyuAri:4:598200", 
        "name": "B", 
        "mode": "markers", 
        "y": [
          "234", 
          "916", 
          "3137", 
          "25"
        ], 
        "x": [
          "SANGEH", 
          "TAMAN AYUN", 
          "ULUWATU", 
          "NUNGNUNG"
        ], 
        "type": "bar", 
        "autobiny": true
      }
    ]
  }
} else if (kab == "Bangli"){
  figure = {
    "frames": [], 
    "layout": {
      "autosize": false, 
      "dragmode": "pan", 
      "yaxis": {
        "range": [
          0, 
          1400.8947368421052
        ], 
        "type": "linear", 
        "autorange": false, 
        "title": "Rata-rata Kunjungan Wisatawan/Hari"
      }, 
      "paper_bgcolor": "rgb(255, 255, 255)", 
      "plot_bgcolor": "rgb(255, 255, 255)", 
      "title": "Grafik Kunjungan Wisatawan ke Objek Wisata di Kabupaten Bangli", 
      "height": 523, 
      "width": 930, 
      "titlefont": {
        "size": 21
      }, 
      "xaxis": {
        "range": [
          -0.5, 
          5.485590778097983
        ], 
        "type": "category", 
        "autorange": false, 
        "title": "Objek Wisata"
      }, 
      "hovermode": "closest", 
      "breakpoints": [], 
      "margin": {
        "r": 110, 
        "b": 135, 
        "l": 90
      }
    }, 
    "data": [
      {
        "autobinx": true, 
        "uid": "46e5fa", 
        "ysrc": "IdaAyuAri:4:1a8b24", 
        "xsrc": "IdaAyuAri:4:598200", 
        "name": "B", 
        "mode": "markers", 
        "y": [
          "3", 
          "46", 
          "1390", 
          "42", 
          "180", 
          "138"
        ], 
        "x": [
          "PENULISAN", 
          "PURA KEHEN", 
          "PENELOKAN BATUR", 
          "DESA TRUNYAN", 
          "DESA PENGLIPURAN", 
          "P3GB"
        ], 
        "type": "bar", 
        "autobiny": true
      }
    ]
  }
} else if (kab == "Karangasem"){
  figure = {
    "frames": [], 
    "layout": {
      "autosize": false, 
      "dragmode": "pan", 
      "yaxis": {
        "range": [
          0, 
          250.8947368421052
        ], 
        "type": "linear", 
        "autorange": false, 
        "title": "Rata-rata Kunjungan Wisatawan/Hari"
      }, 
      "paper_bgcolor": "rgb(255, 255, 255)", 
      "plot_bgcolor": "rgb(255, 255, 255)", 
      "title": "Grafik Kunjungan Wisatawan ke Objek Wisata di Kabupaten Karangasem", 
      "height": 523, 
      "width": 930, 
      "titlefont": {
        "size": 21
      }, 
      "xaxis": {
        "range": [
          -0.5, 
          15.485590778097983
        ], 
        "type": "category", 
        "autorange": false, 
        "title": "Objek Wisata"
      }, 
      "hovermode": "closest", 
      "breakpoints": [], 
      "margin": {
        "r": 110, 
        "b": 135, 
        "l": 90
      }
    }, 
    "data": [
      {
        "autobinx": true, 
        "uid": "46e5fa", 
        "ysrc": "IdaAyuAri:4:1a8b24", 
        "xsrc": "IdaAyuAri:4:598200", 
        "name": "B", 
        "mode": "markers", 
        "y": [
          "30", 
          "227", 
          "89", 
          "115", 
          "47", 
          "24", 
          "90", 
          "216", 
          "2", 
          "249", 
          "90", 
          "0", 
          "0", 
          "0", 
          "0"
        ], 
        "x": [
          "PURI AGUNG KARANGASEM", 
          "BESAKIH", 
          "TIRTA GANGGA", 
          "TENGANAN", 
          "PADANG BAI", 
          "JEMELUK", 
          "TELAGA WAJA", 
          "TULAMBEN", 
          "YEH MALET", 
          "CANDI DASA", 
          "TAMAN UJUNG", 
          "RAFTING SOBEK", 
          "ISEH", 
          "SIBETAN", 
          "PUTUNG", 
          "BUKIT JAMBUL"
        ], 
        "type": "bar", 
        "autobiny": true
      }
    ]
  }
} else if (kab == "Buleleng"){
  figure = {
    "frames": [], 
    "layout": {
      "autosize": false, 
      "dragmode": "pan", 
      "yaxis": {
        "range": [
          0, 
          850.8947368421052
        ], 
        "type": "linear", 
        "autorange": false, 
        "title": "Rata-rata Kunjungan Wisatawan/Hari"
      }, 
      "paper_bgcolor": "rgb(255, 255, 255)", 
      "plot_bgcolor": "rgb(255, 255, 255)", 
      "title": "Grafik Kunjungan Wisatawan ke Objek Wisata di Kabupaten Buleleng", 
      "height": 523, 
      "width": 930, 
      "titlefont": {
        "size": 21
      }, 
      "xaxis": {
        "range": [
          -0.5, 
          16.485590778097983
        ], 
        "type": "category", 
        "autorange": false, 
        "title": "Objek Wisata"
      }, 
      "hovermode": "closest", 
      "breakpoints": [], 
      "margin": {
        "r": 110, 
        "b": 135, 
        "l": 90
      }
    }, 
    "data": [
      {
        "autobinx": true, 
        "uid": "46e5fa", 
        "ysrc": "IdaAyuAri:4:1a8b24", 
        "xsrc": "IdaAyuAri:4:598200", 
        "name": "B", 
        "mode": "markers", 
        "y": [
          "142", 
          "3", 
          "37", 
          "61", 
          "222", 
          "142", 
          "27", 
          "844", 
          "71", 
          "169", 
          "25", 
          "3", 
          "7", 
          "95", 
          "118"
        ], 
        "x": [
          "AIR TERJUN GITGIT", 
          "GEDONG KERTYA", 
          "MAKAM JAYA PRANA", 
          "AIR TERJUN MUNDUK", 
          "LOVINA", 
          "AIR TERJUN LES", 
          "PURA PULAKI", 
          "AIR PANAS BANJAR", 
          "PURA BEJI", 
          "WIHARA BANJAR", 
          "PURA MADUE KARANG", 
          "MUSEUM BULELENG", 
          "TAMAN NASIONAL BALI BARAT", 
          "EKS. PELABUHAN BULELENG", 
          "AIR PANAS BANYUWEDANG"
        ], 
        "type": "bar", 
        "autobiny": true
      }
    ]
  }
} else if (kab == "Jembrana"){
  figure = {
    "frames": [], 
    "layout": {
      "autosize": false, 
      "dragmode": "pan", 
      "yaxis": {
        "range": [
          0, 
          90.8947368421052
        ], 
        "type": "linear", 
        "autorange": false, 
        "title": "Rata-rata Kunjungan Wisatawan/Hari"
      }, 
      "paper_bgcolor": "rgb(255, 255, 255)", 
      "plot_bgcolor": "rgb(255, 255, 255)", 
      "title": "Grafik Kunjungan Wisatawan ke Objek Wisata di Kabupaten Jembrana", 
      "height": 523, 
      "width": 930, 
      "titlefont": {
        "size": 21
      }, 
      "xaxis": {
        "range": [
          -0.5, 
          16.485590778097983
        ], 
        "type": "category", 
        "autorange": false, 
        "title": "Objek Wisata"
      }, 
      "hovermode": "closest", 
      "breakpoints": [], 
      "margin": {
        "r": 110, 
        "b": 135, 
        "l": 90
      }
    }, 
    "data": [
      {
        "autobinx": true, 
        "uid": "46e5fa", 
        "ysrc": "IdaAyuAri:4:1a8b24", 
        "xsrc": "IdaAyuAri:4:598200", 
        "name": "B", 
        "mode": "markers", 
        "y": [
          "4", 
          "11", 
          "12", 
          "56", 
          "85", 
          "8", 
          "7", 
          "2", 
          "17", 
          "6", 
          "6", 
          "9", 
          "31", 
          "22", 
          "23", 
          "52", 
          "13"
        ], 
        "x": [
          "BUNUT BOLONG", 
          "PANTAI MEDEWI", 
          "RAMBUT SIWI", 
          "PANTAI DELODBRAWAH", 
          "PANTAI BALUK RENING", 
          "BENDUNGAN PALASARI", 
          "TELUK GILIMANUK", 
          "DESA SANGKARAGUNG", 
          "MUSEUM GILIMANUK", 
          "PANTAI CANDI KESUMA", 
          "PANTAI PERANCAK", 
          "PANTAI PEKUTATAN", 
          "PANTAI PENGERAGOAN", 
          "PANTAI GUMBRIH", 
          "DESA BLIMBINGSARI", 
          "DESA WISATA EKASARI", 
          "JUUK MANIS"
        ], 
        "type": "bar", 
        "autobiny": true
      }
    ]
  }
} else if (kab == "Tabanan"){
  figure = {
    "frames": [], 
    "layout": {
      "autosize": false, 
      "dragmode": "pan", 
      "yaxis": {
        "range": [
          0, 
          8700.8947368421052
        ], 
        "type": "linear", 
        "autorange": false, 
        "title": "Rata-rata Kunjungan Wisatawan/Hari"
      }, 
      "paper_bgcolor": "rgb(255, 255, 255)", 
      "plot_bgcolor": "rgb(255, 255, 255)", 
      "title": "Grafik Kunjungan Wisatawan ke Objek Wisata di Kabupaten Tabanan", 
      "height": 523, 
      "width": 930, 
      "titlefont": {
        "size": 21
      }, 
      "xaxis": {
        "range": [
          -0.5, 
          13.485590778097983
        ], 
        "type": "category", 
        "autorange": false, 
        "title": "Objek Wisata"
      }, 
      "hovermode": "closest", 
      "breakpoints": [], 
      "margin": {
        "r": 110, 
        "b": 135, 
        "l": 90
      }
    }, 
    "data": [
      {
        "autobinx": true, 
        "uid": "46e5fa", 
        "ysrc": "IdaAyuAri:4:1a8b24", 
        "xsrc": "IdaAyuAri:4:598200", 
        "name": "B", 
        "mode": "markers", 
        "y": [
          "2043", 
          "338", 
          "1287", 
          "51", 
          "317", 
          "8676", 
          "13", 
          "26", 
          "459", 
          "23", 
          "0", 
          "0", 
          "0"
        ], 
        "x": [
          "ULUN DANU BERATAN", 
          "BEDUGUL", 
          "KEBUN RAYA EKA KARYA", 
          "TPB MARGARANA", 
          "ALAS KEDATON", 
          "TANAH LOT", 
          "MUSEUM SUBAK", 
          "AIR PANAS PENATAHAN", 
          "JATILUWIH", 
          "TAMAN KUPU-KUPU LESTARI", 
          "AREAL PURA BATUKARU", 
          "PURI ANYAR KERAMBITAN", 
          "PURI GEDE KERAMBITAN"
        ], 
        "type": "bar", 
        "autobiny": true
      }
    ]
  }
} else if (kab == "Klungkung"){
  figure = {
    "frames": [], 
    "layout": {
      "autosize": false, 
      "dragmode": "pan", 
      "yaxis": {
        "range": [
          0, 
          650.8947368421052
        ], 
        "type": "linear", 
        "autorange": false, 
        "title": "Rata-rata Kunjungan Wisatawan/Hari"
      }, 
      "paper_bgcolor": "rgb(255, 255, 255)", 
      "plot_bgcolor": "rgb(255, 255, 255)", 
      "title": "Grafik Kunjungan Wisatawan ke Objek Wisata di Kabupaten Klungkung", 
      "height": 523, 
      "width": 930, 
      "titlefont": {
        "size": 21
      }, 
      "xaxis": {
        "range": [
          -0.5, 
          4.985590778097983
        ], 
        "type": "category", 
        "autorange": false, 
        "title": "Objek Wisata"
      }, 
      "hovermode": "closest", 
      "breakpoints": [], 
      "margin": {
        "r": 110, 
        "b": 135, 
        "l": 90
      }
    }, 
    "data": [
      {
        "autobinx": true, 
        "uid": "46e5fa", 
        "ysrc": "IdaAyuAri:4:1a8b24", 
        "xsrc": "IdaAyuAri:4:598200", 
        "name": "B", 
        "mode": "markers", 
        "y": [
          "127", 
          "164", 
          "613", 
          "8"
        ], 
        "x": [
          "KERTA GOSA", 
          "GOA LAWAH", 
          "KAWASAN NUSA PENIDA", 
          "LEVI RAFTING"
        ], 
        "type": "bar", 
        "autobiny": true
      }
    ]
  }
}
