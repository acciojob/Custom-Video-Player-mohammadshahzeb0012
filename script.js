/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


ranges[0].addEventListener("input",()=>{
    video.volume = ranges[0].value
})
ranges[1].addEventListener("input",()=>{
    const selectSpeed = parseFloat(ranges[1].value);
    video.playbackRate =  selectSpeed
})

function changeSeekTime(direction){
    direction === 'prev' ? (video.currentTime -=10) : video.currentTime  += 25
}

skipButtons[0].addEventListener('click',()=> changeSeekTime('prev'))

skipButtons[1].addEventListener('click',()=> changeSeekTime('next'))

toggle.addEventListener('click', () => {
    toggle.innerText = '❚ ❚'

    if (video.paused) {
        video.play()
    } else {
        video.pause()
        toggle.innerText = `►`
    }
})

video.addEventListener('timeupdate', () => {
    const currentTime = parseInt((video.currentTime / video.duration) * 100);
    progressBar.style.flexBasis = `${currentTime}%`
});

