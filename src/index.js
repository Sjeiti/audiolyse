const [getAudioData, bufferLength] = initAudio()

// const colorTransparent = 'rgba(0, 0, 0, 0)'
const colorLight = 'rgb(200, 200, 200)'
const colorDark = 'rgb(51, 77, 114)' // 'rgb(0, 0, 0)' // 'rgb(117, 167, 255)' //

const [canvasElement, canvasCtx] = createCanvas()
document.querySelector('.spacer').appendChild(canvasElement)

const [backgroundCanvas, backgroundContext] = createCanvas()
const [middlegroundCanvas, middlegroundContext] = createCanvas()
const [foregroundCanvas, foregroundContext] = createCanvas()

const dotHeight = 8
const mirror = true

let width = canvasElement.offsetWidth
let height = canvasElement.offsetHeight
let width2 = width/2
let height2 = height/2

const barNum = 60
let barDist = width/barNum
let barWidth = barDist*0.7

window.addEventListener('resize', onWindowResize)
setTimeout(()=>{
  onWindowResize()
  draw()
}, 40)

//

function initAudio(){
  const fftSize = 512 // 2048
  const audioElement = document.querySelector('audio')
  // audioElement.addEventListener('durationchange', draw)
  // audioElement.addEventListener('progress', draw)
  // audioElement.addEventListener('playing', draw)
  // audioElement.addEventListener('timeupdate', draw)
  //
  const audioContext = new (window.AudioContext || window.webkitAudioContext)()
  const analyser = audioContext.createAnalyser()
  analyser.fftSize = fftSize
  const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)
  //
  const streamingAudioSource = audioContext.createMediaElementSource(audioElement)
  streamingAudioSource.connect(analyser)
  streamingAudioSource.connect(audioContext.destination)

  return [()=>(analyser.getByteTimeDomainData(dataArray),dataArray), bufferLength]
}

function draw() {
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
  requestAnimationFrame(draw)
}

function drawLines(){
  const dataArray = getAudioData()
  const scale = 4
  const sliceWidth = width * scale / bufferLength
  middlegroundContext.clearRect(0,0,width,height)
  middlegroundContext.beginPath()
  middlegroundContext.moveTo(0, height2)
  let x = 0
  for (let i = 0; i<bufferLength; i+=4) {
    const v = dataArray[i] / 128.0
    const y = v * height2
    middlegroundContext.lineTo(x, y)
    x += sliceWidth
  }
  middlegroundContext.lineTo(width, height2)
  middlegroundContext.fill()
  middlegroundContext.fillRect(0, height/2 - dotHeight/2, width, dotHeight)
}

function onWindowResize(){
  width = window.innerWidth
  height = window.innerHeight
  width2 = width/2
  height2 = height/2
  barDist = width/barNum
  barWidth = barDist*0.7
  canvasElement.width = backgroundCanvas.width = middlegroundCanvas.width = foregroundCanvas.width = width
  canvasElement.height = backgroundCanvas.height = middlegroundCanvas.height = foregroundCanvas.height = height
  drawPrepare()
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
}

function createCanvas(){
	const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  return [canvas, context]
}