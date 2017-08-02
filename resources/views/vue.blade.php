@extends('music.index')

@section('chart')
	<div class="centerized">
		<div id="search-box">
            <!-- SearchBox widget will appear here -->
	    </div>
	 </div>

	<div class="panel-body block-center">
        <div id="refinement-list" class="col-sm-4">
          <!-- RefinementList widget will appear here -->
        </div>
        <div id="stats-container">
        </div>
        <div id="hits" class="col-sm-8">
		   
		</div>
		<div id='pagination-container' class="col-sm-offset-4 col-sm-6">
			
		</div>
    </div>
@endsection