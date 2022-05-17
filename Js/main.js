// This is done to overcome a bug which causes the progressbar to be 50% at the middle of it.
document.addEventListener("DOMContentLoaded", (event) => {
    progressbar.value = 0;
});

// Defining The Variables
let playbtn = document.getElementById("play");
let volumebtn = document.getElementById("volumeicon");
let myicondiv = document.getElementById("myicondiv");
let slider = document.getElementById("change_vol");
let songIndex = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("title");
let cardsdiv = document.getElementById("cardsdiv");
let cover = document.getElementById("cover");
let cover1 = document.getElementById("cover1");
let progressbar = document.getElementById("progressbar");
let drpdownbtn = document.getElementById("drpdownbtn");
let drpdowncontent = document.getElementById("drpdwncontent");
let btnicon = document.getElementById("btnicon");
let shufflediv = document.getElementById("shufflediv");
let repeatdiv = document.getElementById("repeatdiv");
let repeatimg = document.getElementById("repeatimg");
let shuffleivimg = document.getElementById("shuffledivimg");
let allplaybtn = document.querySelectorAll(".allplaybtn");
let songcard = document.querySelectorAll(".songcard");
let maindiv = document.querySelector(".maindiv");
let nav = document.querySelector("nav");

// Work in progress

// This is an function to shuffle songs
function shuffle(array) {
    shufflediv.classList.add("bg-white");
    shuffledivimg.classList.add("filter");
    shuffledivimg.classList.add("invert");
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

// Array of songs

const songs = [
    '-Kalla Sohna Nai - AKHIL',
    'Agar_Tum_Saath_Ho',       
    'Ankhiyon Se Goli Mare',   
    'Badnam',
    'Believer',
    'Bones-Imagine-Dragons',   
    'Car Nachdi -Gippy Grewal',
    'Daru Badnaam',
    'Demons -Imagine Dragons',
    'Dheeme Dheeme',
    'Dil Bechara',
    'Diljit Dosanjh_ CLASH',
    'Dua-Karo',
    'Enemy - Imagine Dragons',
    'Filhall - B Praak',
    'G.O.A.T -Diljit Dosanjh',
    'Ghungroo - War',
    'Haan Main Galat',
    'High Rated Gabru',
    'Ik Tera by Maninder Buttar',
    'Illegal Weapon 2.0',
    'Ishq Di Baajiyaan',
    'Ishq Tera-Guru Randhaw',
    'JAB TAK',
    'Jai Jai Shivshankar',
    'Kaabil Hoon',
    'KALLA SOHNA NAI - Neha Kakkar',
    'KAUN TUJHE',
    'Kya hua tera wada',
    'Lahore',
    'Lakdi Ki Kaathi',
    'Mon Amour',
    'Muqabla',
    'Na Ja - Pav Dharia',
    'Naah Goriye -Bala',
    'Naam',
    'NAIN-Pav Dharia',
    'Pachtaoge-Arijit-Singh',
    'Qismat',
    'Radioactive-Imagine-Dragons',
    'Sadi Gali',
    'Sakhiyaan Remix',
    'Same Beef- Bohemia',
    'Sare Karo Dab-Raftaar',
    'Señorita-Shawn Mendes',
    'Sona Kitna Sona Hai',
    'Sooraj Dooba Hain ',
    'Taare Ginn - Dil Bechara',
    'Tera Yaar Hoon Main',
    'Teri Mitti - Kesari',
    'The Itch - NEFFEX',
    'Thunder - Imagine Dragons',
    'Tujhe Kitna Chahne Lage',
    'Ve Maahi - Kesari',
    'Whatever-It-Takes-Imagine-Dragons',
    'Wrecked - Imagine Dragons'
  ];

// Load the song using songIndex
loadSong(songs[songIndex]);

//change the song src on the basis of loadSongInex
function loadSong(song) {
    audio.src = `assests/${song}.mp3`;
    title.innerHTML = `${song}`;
    
    function checkFileExist() {
        var http = new XMLHttpRequest();
        http.open("HEAD", `assests/covers/${song}.jpg`, false);
        http.send();
        if (http.status === 200) {
            cover.src = `assests/covers/${song}.jpg`;
        } else {
            cover.src = "assests/covers/altimage.png";
        }
    }
    checkFileExist();
    songIndex =songs.indexOf(song);// I have done this to prevent a bug in which songIndex does not change using playfromlist function.

}


// let testBool = false;
function repeat() {
    repeatdiv.classList.toggle("bg-white");
    repeatimg.classList.toggle("filter");
    repeatimg.classList.toggle("invert");
}

// This is master play function to play songs
function play() {
    // Change the master play button in the music player when song is playing
    if (playbtn.src.match("svgs/play.svg")) {
        playbtn.src = "svgs/pause.svg";

        audio.play();
    } else {
        playbtn.src = "svgs/play.svg";

        audio.pause();
    }
    
}

// Function to jump to the next song.
function next_aud() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]); // Load the song using loadSong function
    isplaying = playbtn.src.match("svgs/pause.svg");
    if (isplaying) {
        audio.play();
    }
    
}

// Function to jump to the previous song.
function prev_aud() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]); // Load the song using loadSong function
    isplaying = playbtn.src.match("svgs/pause.svg");
    if (isplaying) {
        audio.play();
    }
    
}

// Function to change the volume of audio using the input made by change_vol input[range]
function change_vol() {
    audio.volume = document.getElementById("change_vol").value;
    valueofinput = document.getElementById("change_vol").value;

    if (valueofinput < 0.001) {
        volumebtn.src = "svgs/volume_off.svg";
    }

    if ((valueofinput < 0.5, valueofinput > 0.02)) {
        volumebtn.src = "svgs/volume_down.svg";
    }

    if (valueofinput > 0.5) {
        volumebtn.src = "svgs/volume_up.svg";
    }
}

// Function to change the volume to 0 or 100 when clicked on the volume icon
function changevolumeicon() {
    const notmuted = volumebtn.src.match("svgs/volume_up.svg");

    if (notmuted) {
        volumebtn.src = "svgs/volume_off.svg";
        slider.value = 0; // To decrease the slider to 0
        audio.volume = 0; // To decrease the volume of actual audio
    } else {
        volumebtn.src = "svgs/volume_up.svg";
        slider.value = 1; // To increase the slider to 150.
        audio.volume = 1; // To maximize the volume of actual audio.
    }
}

// Event listener to sync the progressbar with audio
audio.addEventListener("timeupdate", () => {
    progress = (audio.currentTime / audio.duration) * 100;
    progressbar.value = progress;
});

// Event listener to change audio duration using input range.
progressbar.addEventListener("change", () => {
    audio.currentTime = (progressbar.value * audio.duration) / 100;
});

// Function to play songs using the songcard(tiles).
function playfromlist(e) {
    loadSong(e);
    const isplaying = playbtn.src.match("svgs/play.svg"); // To Check whether the img tag has src = svgs/play.svg .
    if (isplaying) {
        playbtn.src = "svgs/pause.svg";
    }

    audio.play();
}

audio.onended = function () {

    let currentsong = title.innerText;
    let trueif = repeatdiv.classList.contains('bg-white')
    if (trueif) {
        playfromlist(currentsong)
    }
    else {
        next_aud()
    }
};

// For loop to display the songcard(tiles)
for (let i = 0; i < songs.length; i++) {
    let newchild2 = document.createElement("div");
    maindiv.appendChild(newchild2);

    newchild2.innerHTML = `<div class="m-2 w-40 h-[12rem]  songcard  text-white -z-[1]   ">

    <img class="h-[10rem] w-40" src="assests/covers/${songs[i]}.jpg" onerror="this.onerror=null;this.src='assests/covers/altimage.png'" alt="">
    <button class="relative  bottom-[6.5rem] left-14  z-10"
        onclick="playfromlist('${songs[i]}')"><img src="svgs/play.svg" class="filter invert"
            alt=""></button>
    <div class=" bg-white h-[3rem]   text-black pl-2 relative bottom-[3.9rem]">
        <h1 class="font-bold">${songs[i]}</h1>

        
    </div>


</div>`;
}

function sidenav() {
    nav.classList.toggle("hidden");
}



// Let's try this



// function myFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("mySearch");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myMenu");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < songs.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }


let searchInArray = (searchQuery, array, objectKey = null) => {

    return array.filter(d => {
        let data = objectKey ? d[objectKey] : d //Incase If It's Array Of Objects.
        let dataWords = typeof data == "string" && data?.split(" ")?.map(b => b && b.toLowerCase().trim()).filter(b => b)
        let searchWords = typeof searchQuery == "string" && searchQuery?.split(" ").map(b => b && b.toLowerCase().trim()).filter(b => b)

        let matchingWords = searchWords.filter(word => dataWords.includes(word))

        return matchingWords.length

    })


};




let found = searchInArray('dil bechara', songs);
console.table(found)
let xyz = found.forEach(element => {
    return element;
    
});

//   console.log(searchInArray("dil", songs));


// Date edited 29-04-22
