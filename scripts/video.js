var blacknessMin = 0.0;
var blacknessMax = 0.2;
var scale = 0.9;
var translateX = 1;
var translateY = 0.25;
var tint;
var tintIntensity = 0;

var sourceVideo = document.getElementById("source");
var processorCanvas = document.createElement('canvas');
document.body.insertBefore(processorCanvas, sourceVideo);
var holderCanvas = document.createElement('canvas');
document.body.insertBefore(holderCanvas, sourceVideo);
var playbackCanvas = document.getElementById('playback');

var height = sourceVideo.height;
var width = sourceVideo.width;

processorCanvas.setAttribute('width', width);
processorCanvas.setAttribute('height', height);

holderCanvas.setAttribute('width', width);
holderCanvas.setAttribute('height', height);

playbackCanvas.setAttribute('width', width);
playbackCanvas.setAttribute('height', height);

var procContext = processorCanvas.getContext('2d');
var holdContext = holderCanvas.getContext('2d');
var playContext = playbackCanvas.getContext('2d');

holdContext.fillStyle = '#000';
holdContext.fillRect(0, 0, width, height);

function loop() {
	DrawVideoOnCanvas();
	if (window.requestAnimationFrame) window.requestAnimationFrame(loop);
}

function setAlpha(procContext) {
	var foreground = procContext.getImageData(0, 0, width, height);
  for (i = 0; i < foreground.width * foreground.height * 4; i += 4) {
		var blackness = (
      foreground.data[i + 0] +
  		foreground.data[i + 1] +
	  	foreground.data[i + 2]
      ) / (255);

    var alpha = 255 * Math.min(1,
      Math.max(0,
        (blackness - blacknessMin) / blacknessMax
      )
    );
		foreground.data[i + 3] = alpha;
	}
  procContext.putImageData(foreground, 0, 6);
}

function DrawVideoOnCanvas() {
  procContext.globalCompositeOperation = 'exclusion';
  procContext.fillStyle = 'hsl(' +
    ((tint || tint === 0) ? tint : (Date.now() % 5000)/5000) * 255 +
    ', 100%, 75%)';
  procContext.fillRect(0, 0, width, height);
  procContext.globalCompositeOperation = 'source-over';

  playContext.globalCompositeOperation = 'difference';
  playContext.globalAlpha = 0.2 + 0.2 * tintIntensity;
  playContext.drawImage(processorCanvas, 0, 0, width, height);
  playContext.globalAlpha = 1;
  playContext.globalCompositeOperation = 'destination-over';

  holdContext.drawImage(playbackCanvas, 0, 0, width, height);
  holdContext.fillStyle = 'rgba(0,0,0,' + '0.3)';//(1 - scale * 10) +')';
  holdContext.fillRect(0, 0, width, height);

	procContext.drawImage(sourceVideo, 0, 0, width, height);
  setAlpha(procContext);

  playContext.clearRect(0, 0, width, height);
  playContext.drawImage(processorCanvas, 0, 0, width, height);

  playContext.scale(scale,scale);
  playContext.translate(width * (1 - scale) * translateX, height * (1 - scale) * translateY);
  playContext.globalAlpha = scale;

	playContext.drawImage(holderCanvas, 0, 0, width, height);

  playContext.globalAlpha = 1;
  playContext.setTransform(1, 0, 0, 1, 4, 0);
}

function onMouseMove(e){
  var rect = playbackCanvas.getBoundingClientRect();
  translateY = (e.clientY - rect.top) / rect.height;
  translateX = (e.clientX - rect.left) / rect.width;
  tint = translateY;
  tintIntensity = 10-translateX;
}

playbackCanvas.addEventListener('mousemove', onMouseMove);

function touchMove(e){
  onMouseMove(e.touches[0]);
}

playbackCanvas.addEventListener('touchstart', function(e){
  e.target.addEventListener('touchmove', touchMove);
  source.paused && source.play();
});

playbackCanvas.addEventListener('touchend', function(e) {
  e.target.removeEventListener('touchmove', touchMove);
})

// ripped from an old project
var preload = (url, progressUpdate)=>{
	return new Promise((resolve, reject)=>{
		var req = new XMLHttpRequest();
		req.open('GET', url, true);
		req.responseType = 'blob';
		req.onload = function() {
			if (this.status === 200) {
				try {
					resolve(URL.createObjectURL(this.response));
				} catch(e) {
					reject(e);
				}
			}
			 reject({ type: 'ResponseError', status: this.status });
		}
		if(progressUpdate)
			req.onprogress = (event)=>progressUpdate(event.loaded, event.total);
		req.onerror = function(e) {
			 reject(e);
		}

		req.send();
	})
};

preload('//storage.googleapis.com/creeq-media/ewf-bw.mp4').then((src)=>{
  source.src = src;
  loop();
});
