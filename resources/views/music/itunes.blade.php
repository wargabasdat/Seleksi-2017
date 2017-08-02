@extends('music.index')

@section('chart')
	<div class="panel-body">
	    <table class="table table-hover">
		  <tr>
		  	<th>No</th>
		    <th>Title</th>
		    <th>Artist</th>
		  </tr>
	  
		@foreach($musics as $music)
		 <tr>
		 	<td>{{ $counter++ }}</td>
		    <td><img src="{{ $music->image_url }}" style="height: 60px;width: 60px;"> 
		    	<strong> &ensp;&ensp;&ensp;&ensp;{{ $music->title }}</strong></td>
		    <td>{{ $music->artist }}</td>
	 	 </tr>
		@endforeach
		</table>

		@include('layouts.disqus')
    </div>
@endsection