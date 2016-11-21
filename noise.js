var getSourceIndex = function() {
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
  var index = getSourceIndex();

  $('.instrument').on('click', 'button', function(event) {

    var note = $(this);

    if (note.hasClass('c')) {$('#cAudio')[index].play();}
    else if (note.hasClass('d')) {$('#dAudio')[index].play();}
    else if (note.hasClass('e')) {$('#eAudio')[index].play();}
    else if (note.hasClass('f')) {$('#fAudio')[index].play();}
    else if (note.hasClass('g')) {$('#gAudio')[index].play();}
    else if (note.hasClass('a')) {$('#aAudio')[index].play();}
    else if (note.hasClass('b')) {$('#bAudio')[index].play();}

  });

};


var typeToPlayTone = function() {
  var index = getSourceIndex();

  $('.instrument').keydown(function(event) {

    var note = event.key;

    if (note == 'c') {$('#cAudio')[index].play();}
    else if (note == 'd') {$('#dAudio')[index].play();}
    else if (note == 'e') {$('#eAudio')[index].play();}
    else if (note == 'f') {$('#fAudio')[index].play();}
    else if (note == 'g') {$('#gAudio')[index].play();}
    else if (note == 'a') {$('#aAudio')[index].play();}
    else if (note == 'b') {$('#bAudio')[index].play();}

  });

};

$(document).ready( function() {
  clickToPlayTone();
  typeToPlayTone();

});
