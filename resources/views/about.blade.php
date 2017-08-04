@extends('layouts.master')

@section('content')
  <style>
    h3 {
      text-align: center;
    }
    p {
      text-align: center;
    }
    .col-md-6:not(:last-child) {
      border-right: 1px solid black;
    }
  </style>

  <div class="col-md-12">
    <h3>A Little Information</h3>
    <hr>

    <p>
      This dashboard is created to visualize the data of places in Bali that are often visited by the tourists.
    </p>

    <br>  

    <h3>Objectives</h3>
    <hr>

    <p>
      Bali was nominated as top world's tourists destination. This visualization is hoped to be a references of top places in Bali, as well as the uncovered gem in Bali.
    </p>
  
    <br>

    <h3>About Us</h3>
    <hr>

    
    <h5 align="center">This visualization is created by :</h5>

    <div class="row">
      <div class="col-md-6">
        <h6 align="center">
          Vincent Endrahadi

        </h6>
      </div>
      <div class="col-md-6">
        <h6 align="center">Ida Ayu Putu Krisdayanti</h6>
      </div>
    </div>


  </div>


@endsection
