const music=new Audio('audio/1.mp3');


const songs=[
    {
        id:1,
        songName:`Yummy<br>
        <div class="subtitle">Justin Bieber</div>`,
        poster:"Yummy.jpg",
    },
    {
        id:2,
        songName:`Let Me Love You<br>
        <div class="subtitle">D J Snake,Justin Bieber</div>`,
        poster:"let.png",
    },
    {
        id:3,
        songName:`Safari<br><div class="subtitle">Serena</div>`,
        poster:"safari.jpg",
    },
    {
        id:4,
        songName:`On My Way<br><div class="subtitle">Alan Walker</div>`,
        poster:"on.jpg",
    },
    {
        id:5,
        songName:`Shape of You<br><div class="subtitle">Ed Sheeran</div>`,
        poster:"shape.jpg",
    },
    {
        id:6,
        songName:`Faded<br><div class="subtitle">Alan Walker</div>`,
        poster:"faded.jpg",
    },
    {
        id:7,
        songName:`Love Your Voice<br><div class="subtitle">JONY</div>`,
        poster:"voice.jpg",
    },
    {
        id:8,
        songName:`Believer<br><div class="subtitle">Imagine Dragons</div>`,
        poster:"believer.jpg",
    },
    {
    id:9,
    songName:`Satisfya<br><div class="subtitle">Imran Khan</div>`,
    poster:"s.jpg",
    },
    {
    id:10,
    songName:`Arcade<br><div class="subtitle">Duncan Laurence</div>`,
    poster:"a.jpg",
    }
];
function updateSongDetails(song) {
    const poster = document.getElementById('poster');
    const title = document.getElementById('title');

    poster.src = song.poster;
    title.innerHTML = song.songName;
}

// Initialize the current song
let currentSongIndex = 0;
updateSongDetails(songs[currentSongIndex]);

// Play/pause functionality
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play()
            .then(() => {
                playButton.classList.remove('bi-play-fill');
                playButton.classList.add('bi-pause-fill');
            })
            .catch((error) => {
                console.error('Error playing audio:', error);
            });
    } else {
        music.pause();
        playButton.classList.remove('bi-pause-fill');
        playButton.classList.add('bi-play-fill');
    }
});

let poster = document.getElementById('poster');
const playlistPlayButtons = Array.from(document.getElementsByClassName('playlistplay'));

playlistPlayButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentSongIndex = index;
        const selectedSong = songs[currentSongIndex];
        music.src = `audio/${currentSongIndex + 1}.mp3`; // Set the correct audio source
        music.play()
            .then(() => {
                updateSongDetails(selectedSong);
                playButton.classList.remove('bi-play-fill');
                playButton.classList.add('bi-pause-fill');
            })
            .catch((error) => {
                console.error('Error playing audio:', error);
            });
    });
});
// Get the next button element
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
    // Increment the current song index to play the next song
    currentSongIndex = (currentSongIndex + 1) % songs.length;

    // Update the audio source and play the next song
    const selectedSong = songs[currentSongIndex];
    music.src = `audio/${selectedSong.id}.mp3`;
    music.play()
        .then(() => {
            updateSongDetails(selectedSong);
            playButton.classList.remove('bi-play-fill');
            playButton.classList.add('bi-pause-fill');
        })
        .catch((error) => {
            console.error('Error playing audio:', error);
        });
});
const prevButton = document.getElementById('prevButton');

prevButton.addEventListener('click', () => {
    // Decrease the current song index to go to the previous song
    currentSongIndex--;

    // If the current index becomes less than 0, wrap around to the last song
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    const selectedSong = songs[currentSongIndex];
    music.src = `audio/${currentSongIndex + 1}.mp3`; // Set the correct audio source
    music.play()
        .then(() => {
            updateSongDetails(selectedSong);
            playButton.classList.remove('bi-play-fill');
            playButton.classList.add('bi-pause-fill');
        })
        .catch((error) => {
            console.error('Error playing audio:', error);
        });
});
const downloadButton = document.getElementById('download');

downloadButton.addEventListener('click', () => {
    // Get the current audio source (the URL of the currently playing song)
    const audioSource = music.src;

    // Create an anchor element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = audioSource;

    // Extract the filename from the URL and set it as the download attribute
    const fileName = audioSource.substring(audioSource.lastIndexOf('/') + 1);
    downloadLink.download = fileName;

    // Trigger the download
    downloadLink.click();
});


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_songs = document.querySelector('.pop_songs'); // Use querySelector to select the first element with the class 'pop_songs'

pop_song_right.addEventListener('click', () => {
    pop_songs.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_songs.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.querySelector('.Artists_bx'); // Use querySelector to select the first element with the class 'Artists_bx'

pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});
