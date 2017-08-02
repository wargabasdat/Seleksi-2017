<!DOCTYPE html>
<html>
    <head><meta charset="utf-8" /></head>
    <body>
        @include('layouts.nav')
        <script type="text/javascript" src="{{ asset('js/plotlyjs-bundle.js') }}"></script>
            
            
        <script type="text/javascript" src="{{ asset('js/figure.js') }}"></script>
        
        <div id="fb0d285e-483d-49f0-bc55-d745bd18a56e" style="width: 100%; height: 100%;" class="plotly-graph-div"></div>
        <script type="text/javascript">
            (function(){
                window.PLOTLYENV={'BASE_URL': 'https://plot.ly'};

                var gd = document.getElementById('fb0d285e-483d-49f0-bc55-d745bd18a56e')
                var resizeDebounce = null;

                function resizePlot() {
                    var bb = gd.getBoundingClientRect();
                    Plotly.relayout(gd, {
                        width: bb.width,
                        height: bb.height
                    });
                }

                
                window.addEventListener('resize', function() {
                    if (resizeDebounce) {
                        window.clearTimeout(resizeDebounce);
                    }
                    resizeDebounce = window.setTimeout(resizePlot, 100);
                });
                

                
                Plotly.plot(gd,  {
                    data: figure.data,
                    layout: figure.layout,
                    frames: figure.frames,
                    config: {"mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A", "linkText": "Export to plot.ly", "showLink": true}
                });
                
           }());
        </script>
    </body>
</html>
