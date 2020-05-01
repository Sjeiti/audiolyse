// http://techslides.com/html5-canvas-animation-converted-to-video

const [getAudioData, bufferLength] = initAudio()

const images = []

const spacer = document.querySelector('.spacer')

const downloadButton = document.querySelector('a[download]')

// const colorTransparent = 'rgba(0, 0, 0, 0)'
const colorLight = 'rgb(200, 200, 200)'
const colorDark = 'rgb(51, 77, 114)' // 'rgb(0, 0, 0)' // 'rgb(117, 167, 255)' //

const [canvasElement, canvasCtx] = createCanvas()
document.querySelector('.spacer').appendChild(canvasElement)

const [backgroundCanvas, backgroundContext] = createCanvas()
const [middlegroundCanvas, middlegroundContext] = createCanvas()
const [foregroundCanvas, foregroundContext] = createCanvas()

const dotHeight = 4
const mirror = true

let width = canvasElement.offsetWidth
let height = canvasElement.offsetHeight
let width2 = width/2
let height2 = height/2

const barNum = 60
let barDist = width/barNum
let barWidth = barDist*0.7

let playing = false

window.addEventListener('resize', onWindowResize)
setTimeout(()=>{
  onWindowResize()
  draw()
}, 40)

//

function initAudio(){
  const fftSize = 512 // 2048
  const audioElement = document.querySelector('audio')
  audioElement.addEventListener('play', onAudioPlay)
  audioElement.addEventListener('ended', onAudioStop)
  //
  //
  const audioContext = new (window.AudioContext || window.webkitAudioContext)()
  const analyser = audioContext.createAnalyser()
  analyser.fftSize = fftSize
  const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)
  //
  document.body.addEventListener('click', onBodyClickResume, false)
  function onBodyClickResume(){
    audioContext.resume().then(() => {
      console.log('Playback resumed successfully')
    })
    document.body.removeEventListener('click', onBodyClickResume)
  }
  //
  const streamingAudioSource = audioContext.createMediaElementSource(audioElement)
  streamingAudioSource.connect(analyser)
  streamingAudioSource.connect(audioContext.destination)

  return [()=>(analyser.getByteTimeDomainData(dataArray),dataArray), bufferLength]
}

function draw() {
  if (playing) {
    drawLines()
    canvasCtx.clearRect(0,0,width,height)
    canvasCtx.drawImage(backgroundCanvas,0,0)
    canvasCtx.drawImage(middlegroundCanvas,0,0)
    if (mirror) {
      canvasCtx.save()
      canvasCtx.scale(1,-1)
      canvasCtx.drawImage(middlegroundCanvas,0,0,width,-height)
      canvasCtx.restore()
    }
    canvasCtx.drawImage(foregroundCanvas, 0, 0)
    //
    // canvasElement.toBlob(blob=>saveAs(blob, 'myImage.png'))
    // const dataUrl = canvasElement.toDataURL('image/webp')
    images.push(canvasElement.toDataURL('image/webp'))
  }
  //
  requestAnimationFrame(draw)
}

function drawLines(){
  const dataArray = getAudioData()
  middlegroundContext.clearRect(0,0,width,height)
  middlegroundContext.beginPath()
  middlegroundContext.moveTo(0, height2)
  for (let i = 0, l=bufferLength; i<l; i++) {
    const x = i/bufferLength*width
    const v = dataArray[i] / 128.0
    const y = v * height2
    middlegroundContext.lineTo(x, y)
  }
  middlegroundContext.lineTo(width, height2)
  middlegroundContext.fill()
  middlegroundContext.fillRect(0, height/2 - dotHeight/2, width, dotHeight)
}

function onWindowResize(){
  // width = window.innerWidth
  // height = window.innerHeight
  width = spacer.offsetWidth
  height = spacer.offsetHeight
  width2 = width/2
  height2 = height/2
  barDist = width/barNum
  barWidth = barDist*0.7
  canvasElement.width = backgroundCanvas.width = middlegroundCanvas.width = foregroundCanvas.width = width
  canvasElement.height = backgroundCanvas.height = middlegroundCanvas.height = foregroundCanvas.height = height
  // canvasElement.width = backgroundCanvas.width = middlegroundCanvas.width = foregroundCanvas.width = width
  // canvasElement.height = backgroundCanvas.height = middlegroundCanvas.height = foregroundCanvas.height = height
  // ;[canvasElement, backgroundCanvas, middlegroundCanvas, foregroundCanvas].forEach(canvas=>{
  //   canvas.width = width
  //   canvas.height = height
  //   canvas.setAttribute('width', width)
  //   canvas.setAttribute('height', height)
  // })
  drawPrepare()
}

let stream = null
let recorder = null
let data = []

function onAudioPlay(e){
  console.log('e.type',e.type) // todo: remove log
	playing = true
  //
  ///
  ////
  /////
  downloadButton.removeAttribute('href')
  data.length = 0
  stream = canvasElement.captureStream(25)
  recorder = new MediaRecorder(stream)
  recorder.ondataavailable = event => data.push(event.data)
  recorder.start()
  /////
  const recordingTimeMS = 5000
  startRecording(stream, recordingTimeMS)
    .then (recordedChunks => {
      let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
      downloadButton.href = URL.createObjectURL(recordedBlob);
      downloadButton.download = "RecordedVideo.webm";

      console.log("Successfully recorded " + recordedBlob.size + " bytes of " +
          recordedBlob.type + " media.");
    })
}

function onAudioStop(e){
  console.log('e.type',e.type) // todo: remove log
	playing = false
  //
  stream?.getTracks().forEach(track => track.stop())
}

function drawPrepare(){
  middlegroundContext.fillStyle = colorDark
  //
  backgroundContext.fillStyle = colorLight
  backgroundContext.fillRect(0,0,width,height)
  //
  foregroundContext.fillStyle = colorLight
  for (let j=0;j<barNum;j++) {
    const x = j*barDist
    foregroundContext.fillRect(x,0,barWidth,height)
  }
  //
  canvasCtx.drawImage(backgroundCanvas,0,0)
  canvasCtx.fillRect(0, height/2 - dotHeight/2, width, dotHeight)
  canvasCtx.drawImage(foregroundCanvas, 0, 0)
}

function createCanvas(){
	const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  return [canvas, context]
}

// function blobToDataURL(blob, callback) {
//     var a = new FileReader();
//     a.onload = function(e) {callback(e.target.result);}
//     a.readAsDataURL(blob);
// }

function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = event => data.push(event.data);
  recorder.start();
  console.log(recorder.state + " for " + (lengthInMS/1000) + " seconds...");

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = event => reject(event.name);
  });

  let recorded = wait(lengthInMS).then(
    () => recorder.state == "recording" && recorder.stop()
  );

  return Promise.all([
    stopped,
    recorded
  ])
  .then(() => data);
}

function wait(delayInMS) {
  return new Promise(resolve => setTimeout(resolve, delayInMS));
}