<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Musikinian - Tempatnya Update Musik Kamu.</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Cabin:400,400i,500i,600,600i,700,700i" rel="stylesheet">
        <!-- Styles -->
        <link href="{{ asset('css/welcome.css') }}" rel="stylesheet">
        <link rel="shortcut icon" type="image/x-icon" href="{{ asset('img/logo.png') }}"/>

    </head>
    <body>
        
        @yield('content')
    </body>
</html>
