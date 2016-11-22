var getAudioSourceIndex = function() {
  var audio = document.createElement('audio');
  if (audio.canPlayType('audio/mpeg;')) {
      return 0;
  } else if (audio.canPlayType('audio/ogg;')) {
      return 1;
  } else {
      return 2;
  }
};

var clickToPlayTone = function() {
  var index = getAudioSourceIndex();

    $('.instrument').on('click', 'button', function(event) {

    // classes are named 'note *' --> note = 5
    var noteLetter = $(this).attr('class')[5];
    $('#' + noteLetter + 'Audio')[index].play();

  });

};

var flashColorOnPlay = function(note) {

  // flashes color like clicking

  // adds color
  $('.' + note).addClass('active');

  // removes color
  var resetColor = function() {
    $('.' + note).removeClass('active');
  };

  // delays removal of color to give the flash
  var timeoutID = window.setTimeout(resetColor, 100);

};


var typeToPlayTone = function() {
  var index = getAudioSourceIndex();

  $(window).keydown(function(event) {

    var noteLetter = event.key;
    $('#' + noteLetter + 'Audio')[index].play();

    flashColorOnPlay(noteLetter);

  });
};



$(document).ready( function() {
  clickToPlayTone();
  typeToPlayTone();

});
