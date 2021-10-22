// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

function init() {
  // TODO

  const hornSelection = document.getElementById('horn-select');

  hornSelection.addEventListener('change', e => {
    const hornType = e.target.value;
    const hornImg = document.querySelector('header + img');
    const audio = document.querySelector('audio');
    hornImg.src = `assets/images/${hornType}.svg`;
    audio.src = `assets/audio/${hornType}.mp3`;
  });

  const volumeSlider = document.querySelector('#volume-controls input');

  volumeSlider.addEventListener('input', e => {
    const hornAudio = document.querySelector('audio');
    const volumeValue = e.target.value;
    let volumeLevel = 0;
    if (volumeValue >= 67) {
      volumeLevel = 3;
    }
    else if (volumeValue >= 34 && volumeValue <= 66) {
      volumeLevel = 2;
    }
    else if (volumeValue >= 1 && volumeValue <= 33) {
      volumeLevel = 1;
    }
    else {
      volumeLevel = 0;
    }
    hornAudio.volume = volumeValue / 100;
    const volumeImage = document.querySelector('#volume-controls img');

    volumeImage.src = `assets/icons/volume-level-${volumeLevel}.svg`;
    volumeImage.alt = `Volume Level ${volumeLevel}`;
  });

  const audioButton = document.querySelector('button');

  audioButton.addEventListener('click', () => {
    if (document.getElementById('horn-select').value === "party-horn") {
      jsConfetti.addConfetti();
    }
    document.querySelector('audio').play();
  })
}