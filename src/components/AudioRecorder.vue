<template>
  <div>
    <div id="controls">
      <button @click="startRecording">Record</button>
      <button id="pauseButton" disabled>Pause</button>
      <button id="stopButton" @click="stopRecording">Stop</button>
      <button  @click="download">Download</button>
    </div>
  </div>
</template>

<script>
import Recorder from 'recorder-js'

export default {
  name: 'audioRecorder',
  components: {
    Recorder
  },
  data () {
    return {
      audioContext: null,
      recorder: null,
      isRecording: false,
      recordingData: [],
      dataUrl: '',
      blob: null,
      audioChunks:null

    }
  },
  mounted () {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()

    this.recorder = new Recorder(this.audioContext, {
      // An array of 255 Numbers
      // You can use this to visualize the audio stream
      // If you use react, check out react-wave-stream
      onAnalysed: data => ''
    })

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => this.recorder.init(stream))
      .catch(err => console.log('Uh oh... unable to get stream...', err))
  },
  methods: {
    startRecording () {
      console.log('recording...');
      this.recorder.start()
        .then(() => {
          this.isRecording = true
          this.recorder.ondataavailable = e => {
            this.audioChunks.push(e.data)
            this.blob = new Blob(this.audioChunks)

            //this.source = URL.createObjectURL(blob)
            this.$nextTick(() => {
              this.show = true
            })
          }
        })
    },
    handleCallBack() {
      this.isRecording = true
      this.recorder.ondataavailable = e => {
        this.audioChunks.push(e.data)
        this.blob = new Blob(this.audioChunks)

        //this.source = URL.createObjectURL(blob)
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    stopRecording () {
      console.log('stopped....')
      this.recorder.stop()
        .then(({blob, buffer}) => {
          this.blob = blob;

          // buffer is an AudioBuffer
        })
    },
    download() {
      Recorder.download(this.blob, 'my-audio-file'); // downloads a .wav file
    },
    toggleRecording: function () {
      var that = this
      this.isRecording = !this.isRecording
      if (this.isRecording) {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
        navigator.getUserMedia({
          audio: true,
          video: false
        }, function (stream) {
          that.stream = stream
          that.audioRecorder = new MediaRecorder(stream, {
            mimeType: 'audio/wav',
            audioBitsPerSecond: 96000
          })
          that.audioRecorder.start()
          console.log('Media recorder started')
          that.audioRecorder.ondataavailable = function (event) {
            that.recordingData.push(event.data)
          }
        }, function (error) {
          alert(JSON.stringify(error))
        })
      } else {
        that.audioRecorder.stop()
        that.audioRecorder.ondataavailable = function (event) {
          that.recordingData.push(event.data)
        }
        that.audioRecorder.onstop = function (event) {
          console.log('Media recorder stopped')
          var blob = new Blob(that.recordingData, { type: 'audio/ogg' })
          that.dataUrl = window.URL.createObjectURL(blob)
        }
      }

    }
    ,
    togglePlay: function () {
      var audioElement = document.getElementById('audio')
      if (audioElement.paused === false) {
        audioElement.pause()
      } else {
        audioElement.play()
      }
    }


  }
}
</script>
