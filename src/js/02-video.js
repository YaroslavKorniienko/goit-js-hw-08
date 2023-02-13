import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.getElementById('vimeo-player');
const player = new Player(vimeoPlayer);
const STORAGE_KEY = 'videoplayer-current-time';

updateTime();

const timeUpdate = throttle(function (time) {
  localStorage.setItem(STORAGE_KEY, time.seconds);
}, 1000);

player.on('timeupdate', timeUpdate);

function updateTime() {
  const currentTime = localStorage.getItem(STORAGE_KEY);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
