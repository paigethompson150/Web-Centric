$(document).ready(function (){
  const drums = document.getElementById('drums');
  const guitar = document.getElementById('guitar');
  const sax = document.getElementById('sax');
  const bass = document.getElementById('bass');
  const triangle = document.getElementById('triangle');
  var drums_audio = new Audio('audio/drums.mp3');
  var guitar_audio = new Audio('audio/guitar.mp3');
  var sax_audio = new Audio('audio/sax.mp3');
  var bass_audio = new Audio('audio/bass.mp3');
  var triangle_audio = new Audio('audio/triangle.mp3');

  drums.addEventListener('mousedown', () => {
    drums.classList.add("active");
    drums_audio.play();
  });

  drums.addEventListener("mouseup", () => {
    drums.classList.remove("active");
    drums_audio.pause()
  });

  guitar.addEventListener("mousedown", () => {
    guitar.classList.add("active");
    guitar_audio.play();
  });
  
  guitar.addEventListener("mouseup", () => {
    guitar.classList.remove("active");
    guitar_audio.pause()
  });
  
  sax.addEventListener('mousedown', () => {
    sax.classList.add("active");
    sax_audio.play();
  });
  
  sax.addEventListener('mouseup', () => {
    sax.classList.remove("active");
    sax_audio.pause();
  });
  
  bass.addEventListener('mousedown', () => {
    bass.classList.add('active');
    bass_audio.play();
  });

  bass.addEventListener('mouseup', () => {
    bass.classList.remove('active');
    bass_audio.pause();
  });

  triangle.addEventListener('mousedown', () => {
    triangle.classList.add('active');
    triangle_audio.play();
  });

  triangle.addEventListener('mouseup', () => {
    triangle.classList.remove('active');
    triangle_audio.pause();
  });


  document.addEventListener(
    "keypress",
    (event) => {
      const keyName = event.code
      if (!event.repeat) {
        if (keyName == "KeyA") {
          guitar.classList.add('active');
          guitar_audio.play();
        } else if (keyName == "KeyS") {
          sax.classList.add('active');
          sax_audio.play();
        } else if (keyName == "KeyD") {
          drums.classList.add('active');
          drums_audio.play();
        } else if (keyName == "KeyF") {
          bass.classList.add('active');
          bass_audio.play();
        } else if (keyName == "KeyG") {
          triangle.classList.add('active');
          triangle_audio.play();
        }
      }
  })

  document.addEventListener(
    "keyup",
    (event) => {
      const keyName = event.code 
      if (keyName == "KeyA") {
        guitar.classList.remove('active');
        guitar_audio.pause();
      } else if (keyName == "KeyS") {
        sax.classList.remove('active');
        sax_audio.pause();
      } else if (keyName == "KeyD") {
        drums.classList.remove('active');
        drums_audio.pause();
      } else if (keyName == "KeyF") {
        bass.classList.remove('active');
        bass_audio.pause();
      } else if (keyName == "KeyG") {
        triangle.classList.remove('active');
        triangle_audio.pause();
      }

    })
});

