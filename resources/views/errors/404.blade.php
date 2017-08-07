@extends('layouts.layout')

@section('content')
        <div class="flex-center position-ref full-height">
                <div class="top-right links">
                    <a href="http://taufanmp.com" target="_blank">Contact</a>
                </div>

            <div class="content">
                <div id="logo" class="title">
                    OOPS!
                </div>
                <div class="sub-title m-b-md">
                   THAT PAGE CAN’T BE FOUND.
                </div>

                <div class="links">
                    <a class="grow" href="{{ url('/') }}">Take me back, please!!</a>
                    <hr>
                </div>
            </div>

            <div class="footer">
                <p>Copyright © 2017, Taufan Mahaputra.</p>
            </div>
        </div>
@endsection