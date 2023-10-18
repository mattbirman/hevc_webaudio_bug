const audioContext = new AudioContext();
const audioElement = document.querySelector("#a");
const track = audioContext.createMediaElementSource(audioElement);
const gainNode = audioContext.createGain();

track.connect(gainNode).connect(audioContext.destination);

const volumeControl = document.querySelector("#volume");
const volumeDisplay = document.querySelector("#volume-display");

volumeControl.addEventListener(
    "input",
    () => {
        gainNode.gain.value = volumeControl.value;
        volumeDisplay.innerHTML = volumeControl.value;
    },
    false,
);

// Select our play button
const playButton = document.querySelector("button");

playButton.addEventListener(
    "click",
    () => {
        if (!audioContext) {
        }
        // Check if context is in suspended state (autoplay policy)
        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        // Play or pause track depending on state
        if (playButton.dataset.playing === "false") {
            audioElement.play();
            playButton.dataset.playing = "true";
        } else if (playButton.dataset.playing === "true") {
            audioElement.pause();
            playButton.dataset.playing = "false";
        }
    },
    false,
);
