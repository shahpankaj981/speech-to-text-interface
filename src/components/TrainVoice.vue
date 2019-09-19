<template>
  <div>
    <form id="voice-register-form" style="text-align: left;" @submit.prevent="submit">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="first_name">User</label>
            <select class="form-control" v-model="form.attendee_id" required>
              <option value="">Select User</option>
              <option v-for="(name,id) in users" :value="id" v-text="name"></option>
            </select>
            <!--            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <audio :src="audiofullpath" id="audio-player" controls style="width: 100% !important;">
            <!--            <source :src="audiofullpath">-->
          </audio>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <button type="button"
                  :class="crop ? 'btn btn-block btn-danger' :'btn btn-block btn-success'"
                  @click="cropTime"
                  v-text="crop ? 'Stop Cropping' : 'Start Cropping'"></button>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-2">
          <button type="button" @click="reset" class="btn btn-danger">Reset</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <hr>
          <table class="table table-striped">
            <tr>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Action</th>
            </tr>
            <tr v-for="(voice, key) in form.voice_list">
              <td v-text="voice.start"></td>
              <td v-text="voice.end"></td>
              <td>
                <a href="javascript:void(0)"
                   class="btn btn-sm btn-outline-danger"
                   @click="removeVoice(key, voice)">
                  Remove
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <hr>
      <!--      <div class="form-check">-->
      <!--        <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
      <!--        <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
      <!--      </div>-->
      <div class="row">
        <div class="col-md-12">
          <button type="submit" class="btn btn-block btn-outline-primary"
                  :disabled="processing"
                  v-text="processing ? processingText : 'Submit'"></button>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col-md-12">
        <hr>
        <button type="button" class="btn btn-block btn-dark" @click="recognizeSpeakers"
                :disabled="recognizeProcessing"
                v-text="recognizeProcessing ? 'Recognizing Voices.....' : 'Recognize Voices'"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trainVoice',
  props: [ 'audioname', 'audiofullpath', 'users', 'meetingid' ],
  data () {
    return {
      baseurl: null,
      crop: false,
      startTime: null,
      endTime: null,
      processing: false,
      processingText: '',
      recognizeProcessing: false,
      audioPath: '',
      form: {
        attendee_id: '',
        audio_name: '',
        voice_list: []
      }
    }
  },
  mounted () {
    this.baseurl = this.$parent.$attrs.baseurl;
  },
  methods: {
    submit () {
      this.processing = true
      if (this.form.voice_list.length < 1) {
        this.$snotify.error('You must crop at least once voice sample.!!', 'Error!!');

        return '';
      }
      this.form.audio_name = this.audioname
      this.processingText = 'Registering voice samples.....'
      this.$http.post(this.baseurl + '/attendee-voice', this.form)
        .then((result) => {
          console.log(result)
          this.processingText = 'Training the voice samples for the user.....'
          this.$http.post(this.baseurl + '/train-attendee/' + this.form.attendee_id)
            .then((result) => {
              this.processing = false
              this.reset();
              this.$snotify.success('Voice samples registered and trained successfully!!', 'Success!!');

            })
            .catch(error => {
              this.processing = false
              this.$snotify.error('Something went wrong!!', 'Error');
            })
        })
        .catch(error => {
          this.processing = false
          this.$snotify.error('Something went wrong!!', 'Error');
        })
    },
    recognizeSpeakers () {
      this.recognizeProcessing = true
      this.$http.post(this.baseurl + '/recognize-speaker/' + this.meetingid)
        .then((result) => {
          this.recognizeProcessing = false;
          this.$emit('voiceRecognized', result.data.data.recognized_speakers);

          this.$snotify.success('Voices recognized successfully!!', 'Success!!');
        })
        .catch(error => {
          this.recognizeProcessing = false
          this.$snotify.error('Something went wrong!!', 'Error!!');
        })
    },
    cropTime (event) {
      let aud = document.getElementById('audio-player')
      let currentTime = aud.currentTime
      if (!this.crop) {
        this.startTime = currentTime
      } else {
        this.endTime = currentTime
        if (this.endTime - this.startTime < 1) {
          this.$snotify.error('The time frame should be at least 1 second.!!', 'Error');

          return ;
        }
        this.form.voice_list.push({
          start: this.startTime,
          end: this.endTime
        })
        this.startTime = null
        this.endTime = null
      }
      this.crop = !this.crop
    },
    reset(){
      this.form.attendee_id='';
      this.form.voice_list = [];
    },
    removeVoice (key, voice) {
      if (!confirm('Are you sure you want to delete?')) {
        return
      }
      this.$delete(this.form.voice_list, key)

      //this.checks = this.values.related_checks;
    }
  }
}
</script>