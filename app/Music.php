<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Music extends Model
{
    //
    use Searchable;
}
