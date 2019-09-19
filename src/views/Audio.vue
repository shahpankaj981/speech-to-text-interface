<template>
  <div>
<!--    <audio-upload baseurl="http://13.59.65.163:5002/speech-meeting-app/"></audio-upload>-->
    <audio-upload baseurl="http://localhost:8080/speech-meeting-app"></audio-upload>
  </div>
</template>

<script>
// @ is an alias to /src
import AudioUpload from '../components/Audio'

export default {
  name: 'audioForm',
  components: {
    AudioUpload
  }
}
</script>
