# Examples

Javascript connect

<pre class="brush: js, html">
  SC.connectForm({
    size:         "m",                 // size of the button (s, m, l)
    client_id:    "0832b3330a7a5efb8999849b04317704",
    redirect_uri: "http://dl.dropbox.com/u/12477597/Permanent/api-intro/soundcloud-callback.html",
    connected: function(){
      SC.get("/me", function(me){
        $("#connect-with-soundcloud-hello").text("Hello " + me.full_name + "!");
      });

      SC.get("/me/favorites?order=favorited_at", function(tracks){
        $("#connect-with-soundcloud-favorite").text("Your latest favorite track is: \"" + tracks[0].title + "\".");
      });
    },
  });
</pre>

See [SoundCloud Connect](http://developers.soundcloud.com/docs/connect)

<div class="sc_logo"></div>