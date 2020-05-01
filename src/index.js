import 'mc_picker'

const [getAudioData, bufferLength, audioElement] = initAudio()

initFileReader(audioElement)

const images = []

const spacer = document.querySelector('.spacer')

const downloadButton = document.querySelector('a[download]')

let [colorLight, colorDark] = initColors()

const [mainCanvas, mainContext] = createCanvas()
document.querySelector('.spacer').appendChild(mainCanvas)

const [backgroundCanvas, backgroundContext] = createCanvas()
const [middlegroundCanvas, middlegroundContext] = createCanvas()
const [foregroundCanvas, foregroundContext] = createCanvas()

const dotHeight = 4
const mirror = true

let width = mainCanvas.offsetWidth
let height = mainCanvas.offsetHeight
let width2 = width/2
let height2 = height/2

const barNum = 60
let barDist = width/barNum
let barWidth = barDist*0.7

const maxRecordingMillis = 8000
let playing = false

window.addEventListener('resize', onWindowResize)
setTimeout(()=>{
  onWindowResize()
  draw()
}, 40)

//

function initAudio(){
  const fftSize = 512 // 128 // 512 // 2048
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

  return [()=>(analyser.getByteTimeDomainData(dataArray),dataArray), bufferLength, audioElement]
}

function initFileReader(audioElement) {
  const fileReader = document.querySelector('input[type=file]')
  fileReader.addEventListener('change', e=>{
    console.log('change e',e) // todo: remove log
    const {target: {files: [file]}} = e
    const {name} = file
    const reader = new FileReader()
    reader.onload = function(e){
      console.log('load e',e) // todo: remove log
      const dataURL = reader.result
      audioElement.src = dataURL
      audioElement.dataset.name = name
    }
    reader.readAsDataURL(file)
  })
}

function initColors() {
  const colors = Array.from(document.querySelectorAll('input[type=color]'))
  const onColorChange = (i, {target: { value }})=>{
    if (i===0) colorLight = value
    else colorDark = value
    drawPrepare()
  }
  colors.forEach((c,i)=>c.addEventListener('change',onColorChange.bind(null,i)))
  return colors.map(c=>c.value)
}

function draw() {
  if (playing) {
    drawLines()
    mainContext.clearRect(0,0,width,height)
    mainContext.drawImage(backgroundCanvas,0,0)
    mainContext.drawImage(middlegroundCanvas,0,0)
    if (mirror) {
      mainContext.save()
      mainContext.scale(1,-1)
      mainContext.drawImage(middlegroundCanvas,0,0,width,-height)
      mainContext.restore()
    }
    mainContext.drawImage(foregroundCanvas, 0, 0)
    //
    // canvasElement.toBlob(blob=>saveAs(blob, 'myImage.png'))
    // const dataUrl = canvasElement.toDataURL('image/webp')
    images.push(mainCanvas.toDataURL('image/webp'))
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
  mainCanvas.width = backgroundCanvas.width = middlegroundCanvas.width = foregroundCanvas.width = width
  mainCanvas.height = backgroundCanvas.height = middlegroundCanvas.height = foregroundCanvas.height = height
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
  stream = mainCanvas.captureStream(25)
  recorder = new MediaRecorder(stream)
  recorder.ondataavailable = event => data.push(event.data)
  recorder.start()
  /////
  startRecording(stream, maxRecordingMillis).then(onRecordingEnded)
}

function onAudioStop(e){
  console.log('e.type',e.type) // todo: remove log
	playing = false
  //
  downloadButton.classList.add('rotate')
  stream?.getTracks().forEach(track => track.stop())
}

function onRecordingEnded(recordedChunks){
  let recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
  downloadButton.href = URL.createObjectURL(recordedBlob);
  downloadButton.download = (audioElement.dataset.name||audioElement.src).split(/\//g).pop()
  downloadButton.classList.remove('rotate')
  console.log(`Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`);
}

function drawPrepare(){
  middlegroundContext.fillStyle = colorDark
  middlegroundContext.clearRect(0,0,width,height)
  backgroundContext.fillStyle = colorLight
  //
  backgroundContext.clearRect(0,0,width,height)
  backgroundContext.fillRect(0,0,width,height)
  //
  foregroundContext.fillStyle = colorLight
  foregroundContext.clearRect(0,0,width,height)
  for (let j=0;j<barNum;j++) {
    const x = j*barDist
    foregroundContext.fillRect(x,0,barWidth,height)
  }
  //
  mainContext.fillStyle = colorDark
  mainContext.clearRect(0,0,width,height)
  mainContext.drawImage(backgroundCanvas,0,0)
  mainContext.fillRect(0, height/2 - dotHeight/2, width, dotHeight)
  mainContext.drawImage(foregroundCanvas, 0, 0)
}

function createCanvas(){
	const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  return [canvas, context]
}

function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = event => data.push(event.data);
  recorder.start();
  console.log(`${recorder.state} for ${lengthInMS/1000} seconds...`);

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = event => reject(event.name);
  });

  let recorded = wait(lengthInMS).then(
    () => recorder.state === 'recording' && recorder.stop()
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