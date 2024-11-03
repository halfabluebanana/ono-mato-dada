const socket = io();

// Reference the slider
const soundSlider = document.getElementById('soundSlider');

// Listen for changes on the slider
soundSlider.addEventListener('input', () => {
    const duration = soundSlider.value;
    socket.emit('sliderChange', { duration });
});

// Listen for duration updates from other users
socket.on('updateSoundDuration', (data) => {
    soundSlider.value = data.duration;
    updateSoundDuration(data.duration);
});

// Play a sound with the current slider value as the duration
function playSound(phoneme) {
    const duration = soundSlider.value;

    const audio = new Audio(`/sounds/${phoneme}.mp3`);
    audio.playbackRate = 1 / duration; // Adjust playback speed to mimic duration effect
    audio.play();
}

function updateSoundDuration(duration) {
    console.log(`Sound duration updated to: ${duration} seconds`);
}

