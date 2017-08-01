@extends('music.index')

@section('chart')
	<div class="panel-body">
	    <table class="table table-hover">
		  <tr>
		  	<th>No</th>
		    <th>Title</th>
		  </tr>
	  
		@foreach($musics as $music)
		 <tr>
		 	<td>{{ $counter++ }}</td>
		    <td><img src="{{ $music->image_url }}"> 
		    	<strong> &ensp;&ensp;&ensp;&ensp;{{ $music->title }}</strong></td>
	 	 </tr>
		@endforeach
		</table>
    </div>
@endsection