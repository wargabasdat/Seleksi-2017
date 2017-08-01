<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Musikinian - Tempatnya Update Musik Kamu.</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('img/logo.png') }}"/>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        html, body {
                background-color: #404040;
                background: url('{{ URL::to('/') }}/img/bg.jpeg') no-repeat center center fixed; 
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
                padding: 50px;
        }
        .top-left {
            position: absolute;
            left: 60px;
            top: 18px;
        }
        .title {
            font-family: 'Cabin', sans-serif;
            text-shadow: 0 0 2px #01a378, 0 0 5px #01a378,
                         0 0 10px #01a378, 0 0 15px #01a378,
                         0 0 20px #01a378;
        }
        .links > a {
                color: #fff;
                padding: 0 25px;
                font-size: 27px;
                font-weight: 600;
                letter-spacing: .2rem;
                font-style: italic;
        }
        .links > a:hover {
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="top-left links title">
                <a href="{{ url('/') }}">Musikinian.com</a>
        </div>
        <div class="content">
            @yield('content')
        </div>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
