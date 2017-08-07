@extends('layouts.layout')

@section('content')
        <div class="flex-center position-ref full-height">
                <div class="top-right links">
                    <a href="{{ url('/music/search') }}"><i class="fa fa-search fa-1x" aria-hidden="true" style="color:white"></i>&ensp;Search </a>
                </div>

            <div class="content">
                <div id="logo" class="title">
                    <a href="{{ url('/') }}" style="text-decoration: none; color: #eee;"> Musikinian.com </a>
                </div>
                <div class="sub-title m-b-md">
                    Tempatnya Update Musik Kamu.
                </div>

                <div class="links">
                    <a class="grow" href="{{ url('/music/shazam') }}">Shazam</a>
                    <a class="grow" href="{{ url('/music/musicweekly') }}">MusicWeekly</a>
                    <a class="grow" href="{{ url('/music/itunes') }}">iTunes</a>
                    <hr>
                </div>
            </div>
           
            <div class="footer">
                <p>Copyright © 2017, Taufan Mahaputra.</p>
            </div>
        </div>
@endsection