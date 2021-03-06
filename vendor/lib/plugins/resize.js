// resize.js: Shining plugin for resizing the stage's base font size depending on available screen dimensions
Shining.pluginProcesses['resize'] = setInterval(function() {
  var width = $(window).width();
  if (width >= 640 && width < 800) {
    $('#main-inner').css({fontSize: '100%'});
  } else if (width >= 800 && width < 1024) {
    $('#main-inner').css({fontSize: '110%'});
  } else if (width >= 1024 && width < 1280) {
    $('#main-inner').css({fontSize: '120%'});
  } else if (width >= 1280 && width < 1440) {
    $('#main-inner').css({fontSize: '130%'});
  } else if (width > 1440) {
    $('#main-inner').css({fontSize: '140%'});
  }  
}, 500);
