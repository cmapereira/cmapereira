let playbtn = document.getElementById('play');
let pausebtn = document.getElementById('pause');
let stopbtn = document.getElementById('stop');
let player = document.getElementById('audioplay');
let intro = document.getElementById('intro');


function Play(){
  player.play();
  playbtn.classList.add('active');
  pausebtn.classList.remove('active');
}

function Pause(){
  player.pause();
  playbtn.classList.remove('active');
  pausebtn.classList.add('active');
}

function Stop(){
  player.pause();
  player.currentTime = 0;
  playbtn.classList.remove('active');
  pausebtn.classList.remove('active'); 
}

function Intro(){
  Play(player.currentTime = 61);
}


playbtn.addEventListener('click', Play);
pausebtn.addEventListener('click', Pause);
stopbtn.addEventListener('click', Stop);
intro.addEventListener('click', Intro);