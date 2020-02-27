function playSound(e){
    //Links audio clip to key
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
     //Links visual to key stroke
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    const hand = document.querySelector(`.hand[data-key = "${e.keyCode}"]`);
    
   if(!audio) return;
    //resets audio clip if key is pressed(or we'll have to wait for it to start over)
    audio.currentTime = 0;
    //plays audio
    audio.play();
    key.classList.add('play');
    hand.classList.add('play');
    }
  
  
  function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('play');
  }

  function removePlay(e){
    //Links visual to key stroke
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    const hand = document.querySelector(`.hand[data-key = "${e.keyCode}"]`);
 
    hand.classList.remove('play');
  }

  
  const keys = document.querySelectorAll('.key');
  const hands = document.querySelectorAll('.hand');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  window.addEventListener('keyup', removePlay);