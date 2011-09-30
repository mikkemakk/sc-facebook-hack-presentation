# Javascript Widget control

<pre class="brush: html">
  <object height="81" width="700" id="myPlayer" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
  <param name="movie" value="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fsoundcloud.com%2Fmatas%2Fhobnotropic&amp;enable_api=true&amp;object_id=myPlayer&amp;color=f06&amp;theme_color=f0f">
  <param name="allowscriptaccess" value="always">
  <embed allowscriptaccess="always" height="81" src="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fsoundcloud.com%2Fmatas%2Fhobnotropic&amp;enable_api=true&amp;object_id=myPlayer&amp;color=0066CC&amp;theme_color=ff6600" type="application/x-shockwave-flash" width="700" name="myPlayer">
  </object>

<a href="javascript:soundcloud.getPlayer('myPlayer').api_play(); return false" class="button big">Play</a> / 
<a href="javascript:soundcloud.getPlayer('myPlayer').api_stop(); return false" class="button big">Stop</a>

</pre>

See [SoundCloud Custom Player](http://developers.soundcloud.com/docs/custom-player#introduction)

<div class="sc_logo"></div>