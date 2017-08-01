<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Music;
use GuzzleHttp\Client;

class MusicController extends Controller
{
    public function index() {
    	$musics = Music::All();
    	$counter = 1;
        $date = (new \DateTime())->format('Y-m-d');
        return view('music.index', compact('musics','counter','date'));
    }

    public function showShazam() {
        $musics = Music::where('vendor', 'shazam')->get();
        $counter = 1;
        $date = (new \DateTime())->format('Y-m-d');
        return view('music.shazam', compact('musics','counter','date'));
    }

    public function showMusicWeekly() {
        $musics = Music::where('vendor', 'musicweekly')->get();
        $counter = 1;
        $date = (new \DateTime())->format('Y-m-d');
        return view('music.musicweekly', compact('musics','counter','date'));
    }

    public function showItunes() {
        $musics = Music::where('vendor', 'itunes')->get();
        $counter = 1;
        $date = (new \DateTime())->format('Y-m-d');
        return view('music.itunes', compact('musics','counter','date'));
    }

    public function getDataShazam() {
    $client = new Client();
	 	//fetching data from API ParseHub scrapper
        $res = $client->request('GET', 'https://www.parsehub.com/api/v2/projects/tssQ1ubd2EBx/last_ready_run/data?api_key=tr6VAdhcfF_K&format=json');
        $result = $res->getBody();
        $musics = json_decode($result); 
        $musics = $musics->shazam;

        //saving JSON Data to database
        foreach ($musics as $music) {
        	$data = new Music();
        	$data->title 	  = $music->title;
        	$data->url   	  = $music->url;
            $data->image_url  = $music->img;
            $data->vendor     = 'shazam';
        	if(isset($music->artist)) {
        		$data->artist 	  = $music->artist;
        		$data->artist_url = $music->artist_url;
        	}   
        	//save to database
        	$data->save();
        }
    }
    public function getDataMusicWeekly() {
    $client = new Client();
        //fetching data from API ParseHub scrapper
        $res = $client->request('GET', 'https://www.parsehub.com/api/v2/projects/twg4TV4cV5ED/last_ready_run/data?api_key=tr6VAdhcfF_K&format=json');
        $result = $res->getBody();
        $musics = json_decode($result); 
        $musics = $musics->musicweekly;

        //saving JSON Data to database
        foreach ($musics as $music) {
            $data = new Music();
            $data->title      = $music->title;
            $data->image_url  = $music->img;
            $data->vendor     = 'musicweekly';
            //save to database
            $data->save();
        }
    }
    public function getDataItunes() {
    $client = new Client();
        //fetching data from API ParseHub scrapper
        $res = $client->request('GET', 'https://www.parsehub.com/api/v2/projects/tGRR7TF-Pzs1/last_ready_run/data?api_key=tr6VAdhcfF_K&format=json');
        $result = $res->getBody();
        $musics = json_decode($result); 
        $musics = $musics->itunes;

        //saving JSON Data to database
        foreach ($musics as $music) {
            $data = new Music();
            $data->title      = $music->title;
            $data->url        = $music->url;
            if(isset($music->artist)) {
                $data->artist     = $music->artist;
                $data->artist_url = $music->artist_url;
            }   
            $data->image_url  = $music->img;
            $data->vendor     = 'itunes';
            //save to database
            $data->save();
        }
    }
    
    public function update() {
        echo "Fetching data...";
        $this->getDataShazam(); echo "Shazam done.";
        $this->getDataMusicWeekly(); echo "MusicWeekly done.";
        $this->getDataItunes(); echo "iTunes done.";
        echo "Fetch data completed!";
    }
}
