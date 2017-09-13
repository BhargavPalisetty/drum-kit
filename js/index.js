function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) ;
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
if(!audio)return;
 key.classList.add('playing'); 
 audio.currentTime = 0;
 audio.play();
}
 
function terminateTransition(e){
 if(e.propertyName != 'transform') return;
 this.classList.remove('playing');
  
};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend',terminateTransition));

window.addEventListener('keydown', playSound);
// window.addEventListener('keyup', function debug(e){
 
//   e.target.classList.add('key');
//    console.log(e);
 
// });