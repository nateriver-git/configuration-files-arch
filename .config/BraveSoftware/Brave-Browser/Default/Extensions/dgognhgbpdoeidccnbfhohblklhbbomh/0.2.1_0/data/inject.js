// method 1
document.cookie = 'wide=1;';

// method 2
window.addEventListener('yt-navigate-finish', async () => {
  for (let n = 0; n < 10; n += 1) {
    const b = document.querySelector('#player .ytp-size-button');
    if (b) {
      b.click();
    }
    else {
      break;
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
});
