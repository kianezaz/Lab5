// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  let voices = []; // global array

  window.speechSynthesis.onvoiceschanged = () => {
    // Get List of Voices
    voices = window.speechSynthesis.getVoices();
    const voiceSelection = document.querySelector('select');
    for (let i = 0; i < voices.length; i++) {
      const voiceOption = document.createElement('option');
      voiceOption.text = voices[i].name;
      voiceSelection.add(voiceOption);
    }
  }

  const speakButton = document.querySelector('button');

  speakButton.addEventListener('click', () => {
    const text = document.getElementById('text-to-speak').value;
    let utterance = new SpeechSynthesisUtterance(text)
    const selectedVoice = document.querySelector('select').value;
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedVoice) {
        utterance.voice = voices[i];
      }
    }
    speechSynthesis.speak(utterance);
  });
}