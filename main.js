
    let playbtn = document.getElementById('play');
    let volumebtn = document.getElementById('volumeicon');
    let myicondiv = document.getElementById('myicondiv');
    let slider = document.getElementById("change_vol");
    let songIndex = 0;
    let audio = document.getElementById('audio');
    let title = document.getElementById('title')
    let cover = document.getElementById('cover')
    let progressbar = document.getElementById('progressbar')
    let drpdownbtn = document.getElementById('drpdownbtn')
    let drpdowncontent = document.getElementById('drpdwncontent')
    let btnicon = document.getElementById('btnicon')
    let allplaybtn = document.querySelectorAll('.allplaybtn')
    audio.controls = false;

    // This is an function to shuffle songs
    // function shuffle(array) {
        
    //     let currentIndex = array.length, randomIndex;

    //     // While there remain elements to shuffle...
    //     while (currentIndex != 0) {

    //         // Pick a remaining element...
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex--;

    //         // And swap it with the current element.
    //         [array[currentIndex], array[randomIndex]] = [
    //             array[randomIndex], array[currentIndex]];
    //     }

    //     return array;
    // }

    
    // shuffle(songs);
    
    const songs = [
        'Ik Tera by Maninder Buttar',   // Song Name will go here
        'Dil Bechara',  //  Song Name will go here
        'Sooraj Dooba Hain ',   // Song Name will go here
        'Tujhe Kitna Chahne Lage' ,   // Song Name will go here
        'Filhall - B Praak',
        'Jai Jai Shivshankar',
        'Pachtaoge-(Jaani-Ve)-Arijit-Singh',
        'Qismat'
    ]
    
    loadSong(songs[songIndex]); // Load the song using songIndex



    function loadSong(song) {
        audio.src = `assests/${song}.mp3`; //change the song src on the basis of loadSongInex
        title.innerHTML = `${song}`;
        cover.src = `assests/${song}.jpg`;
    }

    function play(){
        const isplaying = playbtn.classList.contains('fa-play');// To Check whether the i tag has fa-play .

        if (isplaying) {
            playbtn.classList.remove('fa-play');
            playbtn.classList.add('fa-pause');
            audio.play();
            console.log('ifworking')
        }
        else {
            playbtn.classList.remove('fa-pause')
            playbtn.classList.add('fa-play');
            console.log('elseworking')
            audio.pause();
        }
        
    };




    function next_aud() {
        songIndex++;

        if (songIndex > songs.length - 1) {
            songIndex = 0;
        }
        else {

        }
        loadSong(songs[songIndex]);
        isplaying = playbtn.classList.contains('fa-pause')
        if (isplaying) {
            audio.play();
        }
    }

    function prev_aud() {
        songIndex--;

        if (songIndex < 0) {
            songIndex = songs.length - 1;
        }

        loadSong(songs[songIndex]);
        isplaying = playbtn.classList.contains('fa-pause')
        if (isplaying) {
            audio.play();
        }
    }




    function change_vol() {
        audio.volume = document.getElementById("change_vol").value;
    }

    function changevolumeicon() {

        const notmuted = volumebtn.classList.contains('fa-volume-high') // To Check whether the i tag has fa-volume-high class .

        if (notmuted) {
            volumebtn.classList.remove('fa-volume-high');
            volumebtn.classList.add('fa-volume-off');
            slider.value = 0; // To decrease the slider to 0
            audio.volume = 0; // To decrease the volume of actual audio
        }
        else {
            volumebtn.classList.remove('fa-volume-off');
            volumebtn.classList.add('fa-volume-high');
            slider.value = 150; // To increase the slider to 150.
            audio.volume = 1;// To maximize the volume of actual audio.
        }


    }

    audio.addEventListener('timeupdate', ()=> {
        progress =parseInt((audio.currentTime/audio.duration)* 100)
        progressbar.value = progress;
        
    }
    )

    
    

 progressbar.addEventListener('change', ()=> {
     audio.currentTime = progressbar.value * audio.duration/100;

 } )

 drpdownbtn.addEventListener('click', ()=>{
    drpdowncontent.classList.toggle('hidden')
     const true1 =btnicon.classList.contains('fa-chevron-down')
    if (true1) {
        btnicon.classList.remove('fa-chevron-down')
        btnicon.classList.add('fa-chevron-up')
    } else {
        btnicon.classList.remove('fa-chevron-up')
        btnicon.classList.add('fa-chevron-down')
    }
 })





  function playfromlist(e){
        loadSong(e)
        play();
        
  }