document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById('play-button');
    const audio = document.getElementById('lofi-song');
    const uploadInput = document.getElementById('upload');
    const uploadPreview = document.getElementById('upload-preview');

    // Play Button Functionality
    playButton.addEventListener('click', () => {
        audio.play().then(() => {
            playButton.textContent = "🎵 Now Playing...";
        }).catch(error => {
            console.error("Playback error:", error);
            alert("Playback blocked! Try interacting with the page first.");
        });
    });

    // Upload Functionality
    uploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (file.type.startsWith('image/')) {
                    uploadPreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Memory" style="width: 100%; border-radius: 10px;">`;
                } else if (file.type.startsWith('video/')) {
                    uploadPreview.innerHTML = `<video controls src="${e.target.result}" style="width: 100%; border-radius: 10px;"></video>`;
                }
            };
            reader.readAsDataURL(file);
        }
    });
});