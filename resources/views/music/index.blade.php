@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">
               		<h1>Top Musik di Indonesia</h1>
               	</div>
               	<p>&ensp;&ensp;&ensp;&ensp;Updated at : {{ $date }}</p>

                @yield('chart')

            </div>
        </div>
    </div>
</div>
@endsection