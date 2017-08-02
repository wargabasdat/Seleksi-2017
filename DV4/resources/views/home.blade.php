<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../public/favicon.ico">

    <title>Tempat Wisata Bali</title>

  

    <!-- Custom styles for this template -->
    <link href="/public/app.css" rel="stylesheet">
  </head>

<body>

    @include('layouts.nav')

    <div class="container" background="red">
        <div align="center">
            <img src="{{ URL::asset('petakontur.jpg') }}" alt="bali" id="bali" class="img-responsive" width="auto" height="550" usemap="#balimap">
        </div>
    </div>

    <map name="balimap" id="Map">
        <area alt="tabanan" title="" href="tabanan" shape="poly" coords="320,284,334,296,353,302,358,313,373,324,385,342,399,357,411,358,419,354,427,347,431,337,434,328,433,317,435,305,439,301,445,297,451,291,455,287,455,277,458,266,461,258,470,257,476,250,481,244,481,234,481,223,482,211,482,206,479,201,474,196,476,186,477,174,477,167,463,164,331,271,332,255,330,238,330,234,336,226,343,208,355,201,371,195,385,190,397,184,405,182,411,183,423,182,438,178,449,173,461,165,333,272" id="tabanan" />
        <area alt="denpasar" title="" href="denpasar" shape="poly" coords="492,462,498,455,505,453,511,441,520,437,529,434,532,429,536,424,537,420,538,415,539,406,542,400,545,396,535,391,531,385,523,377,514,364,510,359,500,364,493,368,491,369,489,368,487,375,482,376,477,380,472,380,470,386,469,398,468,402,471,411,473,417,475,429,483,447" id="denpasar" />
        <area alt="gianyar" title="" href="gianyar" shape="poly" coords="511,310,523,300,522,290,518,284,511,278,505,274,515,261,522,248,529,235,534,225,539,214,543,197,544,193,560,208,569,210,567,223,571,235,575,245,582,248,581,263,573,280,569,295,567,322,573,332,581,340,589,348,592,354,586,361,578,361,573,368,566,372,560,376,553,382,550,390,545,396,533,388,524,379,518,369,513,362,509,359" id="gianyar" />
        <area alt="klungkung" title="" href="klungkung" shape="poly" coords="570,292,598,290,608,287,612,284,622,284,626,284,625,296,632,307,633,317,640,326,647,326,662,328,673,342,650,352,636,359,618,359,603,357,594,358,587,347,585,343,572,330,569,322" id="klungkung" />
    </map>






</body>
</html>