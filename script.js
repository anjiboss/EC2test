let btn = document.getElementById('btn')
let stopBtn = document.getElementById('stop')

btn.onclick = () => {
  let chuck = []
  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    mediaRecorder = new MediaRecorder(stream)
    mediaRecorder.start()
    mediaRecorder.addEventListener('dataavailable', (e) => {
      chuck.push(e.data)
    })
    mediaRecorder.addEventListener('stop', (e) => {
      console.log(chuck)
      let blob = new Blob(chuck)

      let audioUrl = URL.createObjectURL(blob)
      audio = new Audio(audioUrl)
      audio.setAttribute('controls', 1)
      document.getElementById('container').appendChild(audio)
    })
  })
  stopBtn.onclick = function () {
    mediaRecorder.stop()
  }
}
