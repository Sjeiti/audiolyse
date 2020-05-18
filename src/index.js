import 'mc_picker'

// const verticalScale = 1
const locationVars = location.search.substr(1).split(/&/).map(s=>s.split(/=/)).reduce((acc,[key,val])=>(acc[key] = parseInt(val, 10), acc),{})

const waveOrFreq = false
const [getAudioData, bufferLength, audioElement] = initAudio(locationVars.fftSize||2048) // 128 // 512 // 2048

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

let stream = null

const barSize = locationVars.bar||2
const barMargin = locationVars.margin||4
const barNum = 60
let barDist = width/barNum
let barWidth = barDist*0.7

const maxRecordingMillis = locationVars.t||8000
const waitAfterRecordMillis = 1000
let playing = false

const start = combine(onWindowResize, draw)

window.addEventListener('resize', onWindowResize)
setTimeout(start, 40)

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

function initAudio(fftSize){
  const audioElement = document.querySelector('audio')
  audioElement.addEventListener('play', onAudioPlay)
  audioElement.addEventListener('ended', onAudioStop)
  //
  const audioContext = new (window.AudioContext || window.webkitAudioContext)()
  const analyser = audioContext.createAnalyser()
  analyser.fftSize = fftSize
  analyser.smoothingTimeConstant = 0.6 // 0.8
  // analyser.minDecibels = -80 // -100
  // analyser.maxDecibels = -40 // -30
  const bufferLength = analyser.fftSize
  // const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)
  // window.dootoorrooy = dataArray // todo remove
  //
  document.body.addEventListener('click', onBodyClickResume, false)
  function onBodyClickResume(){
    audioContext.resume().then(console.log.bind(console, 'Playback resumed successfully'))
    document.body.removeEventListener('click', onBodyClickResume)
  }
  //
  const streamingAudioSource = audioContext.createMediaElementSource(audioElement)
  streamingAudioSource.connect(analyser)
  streamingAudioSource.connect(audioContext.destination)
  //
  const getAudioData = waveOrFreq
      ?(()=>(analyser.getByteTimeDomainData(dataArray), dataArray))
      :(()=>(analyser.getByteFrequencyData(dataArray), dataArray))
  //
  return [getAudioData, bufferLength, audioElement]
}

function initFileReader(audioElement) {
  const fileReader = document.querySelector('input[type=file]')
  fileReader.addEventListener('change', e=>{
    const {target: {files: [file]}} = e
    const {name} = file
    const reader = new FileReader()
    reader.onload = function(e){
      const dataURL = reader.result
      const snd = new Audio(dataURL) // weird FF noise-suffix fix
      audioElement.src = snd.src
      audioElement.dataset.name = name
      audioElement.play()
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
    waveOrFreq?drawWave():drawFreq()
    mainContext.clearRect(0,0,width,height)
    mainContext.drawImage(backgroundCanvas,0,0)
    mainContext.drawImage(middlegroundCanvas,0,0)
    if (mirror) {
      mainContext.save()
      mainContext.scale(1,-1)
      mainContext.drawImage(middlegroundCanvas,0,0,width,-height)
      mainContext.restore()
    }
    // waveOrFreq&&mainContext.drawImage(foregroundCanvas, 0, 0)
    //
    // canvasElement.toBlob(blob=>saveAs(blob, 'myImage.png'))
    // const dataUrl = canvasElement.toDataURL('image/webp')
    images.push(mainCanvas.toDataURL('image/webp'))
  }
  requestAnimationFrame(draw)
}

function drawWave(){
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

function drawFreq(){
  const dataArray = getAudioData()
  middlegroundContext.clearRect(0,0,width,height)
  for (let i = 0, l=bufferLength; i<l; i+=4) {
    const x = (i/bufferLength)*width * (barSize + barMargin)
    const v = 0.5*(dataArray[i]/256.0)
    const y = v * height
    middlegroundContext.fillRect(x, height2, barSize, Math.max(y, mirror?barSize/2:barSize))
  }
}

function onWindowResize(){
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

function onAudioPlay(e){
  console.log('e.type',e.type) // todo: remove log
	playing = true
  //
  downloadButton.removeAttribute('href')
  stream = mainCanvas.captureStream(25)
  //
  startRecording(stream, maxRecordingMillis).then(onRecordingEnded)
}

function onAudioStop(e){
  console.log('onAudioStop',e,stream) // todo: remove log
  downloadButton.classList.add('rotate')
  setTimeout(()=>{
	  playing = false
    stream?.getTracks().forEach(track => track.stop())
  }, waitAfterRecordMillis)
}

function onRecordingEnded(recordedChunks){
  console.log('onRecordingEnded') // todo: remove log
  let recordedBlob = new Blob(recordedChunks, { type: 'video/webm' })
  downloadButton.href = URL.createObjectURL(recordedBlob)
  downloadButton.download = (audioElement.dataset.name||audioElement.src).split(/\//g).pop().replace(/\.\w+$/,'.webm')
  downloadButton.classList.remove('rotate')
  console.log(`Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`)
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
  mainContext.fillStyle = colorDark
  mainContext.clearRect(0,0,width,height)
  mainContext.drawImage(backgroundCanvas,0,0)
  // mainContext.fillRect(0, height/2 - dotHeight/2, width, dotHeight)
  // mainContext.drawImage(foregroundCanvas, 0, 0)
}

function createCanvas(){
	const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  return [canvas, context]
}

function startRecording(stream, lengthInMS) {
  const recorder = new MediaRecorder(stream)
  const data = []

  recorder.ondataavailable = e => data.push(e.data)
  recorder.start()
  console.log(`${recorder.state} for ${lengthInMS/1000} seconds...`)

  const stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve
    recorder.onerror = event => reject(event.name)
  })
  // stopped.then(console.log.bind(console, 'recorderstopped'))

  const recorded = wait(lengthInMS).then(
    () => recorder.state === 'recording' && recorder.stop()
  )
  // recorded.then(console.log.bind(console, 'recorderrecorded'))

  return Promise.all([
    stopped,
    recorded
  ])
  .then(() => data)
}

function wait(delayInMS) {
  return new Promise(resolve => setTimeout(resolve, delayInMS))
}

function combine(){
	return ()=>Array.from(arguments).forEach(fn=>fn())
}

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
//
// const WIDTH = 400
// const HEIGHT = 300
// const [testCanvas, canvasCtx] = createCanvas()
// testCanvas.width = WIDTH
// testCanvas.height = HEIGHT
// testCanvas.style.width = `${WIDTH}px`
// testCanvas.style.height = `${HEIGHT}px`
// testCanvas.style.border = '1px solid #F04'
// testCanvas.style.position = 'static'
// console.log('testCanvas',testCanvas) // todo: remove log
// document.querySelector('section').appendChild(testCanvas)
// // document.querySelector('.spacer').appendChild(testCanvas)
// function drew() {
//   if (!window.dootoorrooy) return
//   requestAnimationFrame(drew)
//
//   canvasCtx.fillStyle = 'rgb(200, 200, 200)'
//   canvasCtx.fillRect(0, 0, WIDTH, HEIGHT)
//
//   canvasCtx.lineWidth = 2
//   canvasCtx.strokeStyle = 'rgb(0, 0, 0)'
//
//   const sliceWidth = WIDTH * 1.0 / bufferLength
//   let x = 0
//
//   canvasCtx.beginPath()
//   for(var i = 0; i < bufferLength; i++) {
//     const v = window.dootoorrooy[i]/128.0
//     const y = v * HEIGHT/2
//
//     if(i === 0)
//       canvasCtx.moveTo(x, y)
//     else
//       canvasCtx.lineTo(x, y)
//
//     x += sliceWidth
//   }
//
//   canvasCtx.lineTo(WIDTH, HEIGHT/2)
//   canvasCtx.stroke()
// }
// // setTimeout(drew, 1000)
//
//
//
// function drww() {
//   requestAnimationFrame(drww)
//   // analyser.getByteFrequencyData(dataArray)
//   canvasCtx.fillStyle = 'rgb(0, 0, 0)'
//   canvasCtx.fillRect(0, 0, WIDTH, HEIGHT)
//   var barWidth = (WIDTH / bufferLength) * 2.5
//   var barHeight
//   var x = 0
//   for(var i = 0; i < bufferLength; i++) {
//     barHeight = window.dootoorrooy[i]
//     canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)'
//     canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2)
//     x += barWidth + 1
//   }
// }
// setTimeout(drww, 1000)