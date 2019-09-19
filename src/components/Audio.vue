<template>
  <div class="row container-fluid">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <b-card class="main-box" no-block>
        <div class="row">
          <div class="col-md-12">
            <b-tabs>
              <br><br>
              <b-tab title="Upload File">
                <b>Upload File</b> &nbsp;
                <input type="file"  accept=".mp3,.wav" ref="file" v-on:change="handleFileChange()">

                <br>
                <div class="row">
                  <div class="col-md-12">
                    <hr>
                    <button class="btn btn-outline-primary btn-block"
                            @click="submitFile" v-if="!uploadingStatus">
                      Submit
                    </button>

                    <button class="btn btn-block btn-primary" type="button" v-else disabled>
                      <span class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"></span>
                      &nbsp;&nbsp;&nbsp;<span v-text="uploadingStatusText"></span>
                    </button>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Record Audio">
                <div style="text-align: left !important;">
                  <!--              <button >Primary</button>-->

                  <button type="button"
                          class="btn btn-outline-success btn-block"
                          @click="start"
                          v-if="recordButton">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 32 32"
               fill="#000000"
               class="icon">
            <path d="M16,23.1c3.9,0,7-3.1,7-7v-2v-1v-2v-1v-2c0-3.9-3.1-7-7-7s-7,3.1-7,7v2v1v2v1v2C9,20,12.1,23.1,16,23.1z M13,14.1h-2v-1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2v-1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2c0-2.8,2.2-5,5-5s5,2.2,5,5h-2 c-0.6,0-1,0.4-1,1s0.4,1,1,1h2v1h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2v1h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0,2.8-2.2,5-5,5s-5-2.2-5-5h2 c0.6,0,1-0.4,1-1S13.6,14.1,13,14.1z">
            </path>
            <path
                d="M26,16.1h-2c0,4.4-3.6,8-8,8s-8-3.6-8-8H6c0,5.2,4,9.4,9,9.9v3.1h-3v2h3h2h3v-2h-3V26 C22,25.5,26,21.3,26,16.1z">
            </path>
          </svg>
        </span>&nbsp;
                    <span>Start Recording</span>
                  </button>
                  <button type="button"
                          class="button btn-outline-danger btn-block"
                          v-if="!recordButton"
                          @click="stop">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 32 32"
               fill="#FFFFFF"
               width="16"
               height="16"
               class="icon icon">
            <rect x="10" y="10" width="12" height="12"></rect>
            <path d="M15.6,2.1c-7.7,0-14,6.3-14,14s6.3,14,14,14s14-6.3,14-14S23.3,2.1,15.6,2.1z M15.6,28.1 c-6.6,0-12-5.4-12-12s5.4-12,12-12s12,5.4,12,12S22.2,28.1,15.6,28.1z"></path>
          </svg>
        </span>
                    Stop
                  </button>
                </div>
                <div class="row" v-if="show">
                  <div class="col-md-4">
                    <audio id="audio-player" controls :src="source">
                    </audio>
                    <button class="button button-radius-12" @click="remove">
                      Remove
                    </button>
                  </div>
                </div>

                <br>
                <div class="row">
                  <div class="col-md-12">
                    <hr>
                    <button class="btn btn-outline-primary btn-block"
                            @click="submitFile" v-if="!uploadingStatus">
                      Submit
                    </button>

                    <button class="btn btn-block btn-primary" type="button" v-else disabled>
                      <span class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"></span>
                      &nbsp;&nbsp;&nbsp;<span v-text="uploadingStatusText"></span>
                    </button>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Register Meeting" :baseurl="this.baseurl" :disabled="!savedAudioFile">
                <register-meeting :savedAudioFile="savedAudioFile"
                                  @meetingSaved="handleMeetingSaved"></register-meeting>
              </b-tab>
              <b-tab title="Register User" :baseurl="this.baseurl" :disabled="!meetingId">
                <register-user></register-user>
              </b-tab>
              <b-tab title="Train Voice" :baseurl="this.baseurl" :disabled="!meetingId"
                     @click="getUsers">
                <train-voice :audioname="savedAudioFile"
                             :audiofullpath="audioFullPath"
                             :users="users"
                             @voiceRecognized="handleVoiceRecognized"
                             :meetingid="meetingId"></train-voice>
              </b-tab>
            </b-tabs>
          </div>
        </div>
        <br>

        <!--        <div class="row" v-if="uploadResponse">-->
        <!--          <div class="col-md-12">-->
        <!--&lt;!&ndash;            <div class="row">&ndash;&gt;-->
        <!--&lt;!&ndash;              <div class="col-md-4">&ndash;&gt;-->
        <!--&lt;!&ndash;                <button class="button button-radius-8" @click="cropTime('start')">Start</button>&ndash;&gt;-->
        <!--&lt;!&ndash;                <button class="button button-radius-8" @click="cropTime('end')">End</button>&ndash;&gt;-->
        <!--&lt;!&ndash;              </div>&ndash;&gt;-->
        <!--&lt;!&ndash;            </div>&ndash;&gt;-->
        <!--&lt;!&ndash;            <div class="row">&ndash;&gt;-->
        <!--&lt;!&ndash;              <div class="col-md-4">&ndash;&gt;-->
        <!--&lt;!&ndash;                <input type="text" v-model="startTime" class="form-control" placeholder="Start Time">&ndash;&gt;-->
        <!--&lt;!&ndash;                <input type="text" v-model="endTime" class="form-control" placeholder="End Time">&ndash;&gt;-->
        <!--&lt;!&ndash;              </div>&ndash;&gt;-->
        <!--&lt;!&ndash;            </div>&ndash;&gt;-->
        <!--            -->
        <!--          </div>-->
        <!--        </div>-->
        <div class="row container-fluid" v-if="transcribed" style="text-align: left !important;">
          <div class="col-md-12">
            <hr>
            <div><h3>Meeting Conversation</h3></div>
            <div class="row" v-for="(con,index) in conversation">
              <span class="col-md-4">
                <b>{{ recognizedSpeakers[con.speaker] !== 'Unknown' ?
                `${recognizedSpeakers[con.speaker].first_name}
                 ${recognizedSpeakers[con.speaker].last_name}` : 'Speaker ' + con.speaker }} &nbsp;</b>
                ( {{ con.from }} - {{ con.to }}) :
              </span>
              <span class="col-md-8" v-text="con.vocal">
              </span>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import RegisterUser from '../components/RegisterUser'
import RegisterMeeting from '../components/RegisterMeeting'
import TrainVoice from './TrainVoice'

export default {
  name: 'audioUpload',
  components: {
    RegisterUser,
    RegisterMeeting,
    TrainVoice
  },
  props: [ 'baseurl' ],
  data () {
    return {
      audioChunks: [],
      rec: {},
      recordedAudio: {},
      recordButton: true,
      show: false,
      source: '',
      startTime: '',
      endTime: '',
      recordAudio: false,
      uploadResponse: false,
      audioFile: null,
      uploadingStatusText: '',
      uploadingStatus: false,
      conversation: [],
      meetingId: null,
      transcribed: false,
      savedAudioFile: null,
      audioFullPath: '',
      users: [],
      recognizedSpeakers:[]
    }
  },
  mounted () {

  },
  watch: {
    savedAudioFile () {
      let self = this
      this.$http.get(this.baseurl + '/audio/' + this.savedAudioFile)
        .then(response => {
          console.log('audio url', response)
          self.audioFullPath = 'http://localhost:8080' + response.data.audio_url
        })
        .catch(error => {
          return ''
        })
    }
  },
  computed: {

  },
  methods: {
    start () {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          this.handleCallback(stream)
        })
    },
    stop () {
      this.rec.stop()
      this.recordButton = true
    },
    handleFileChange () {
      console.log(this.$refs.file.files[0])
      this.audioFile = this.$refs.file.files[0]
    },
    handleCallback (stream) {
      this.recordButton = false
      this.rec = new MediaRecorder(stream)
      this.audioChunks = []
      this.rec.start()
      this.rec.ondataavailable = e => {
        this.audioChunks.push(e.data)
        let blob = new Blob(this.audioChunks, { type: 'audio/wav' })

        this.audioFile = blob
        this.source = URL.createObjectURL(blob)
        this.$nextTick(() => {
          this.show = true
        })
        this.sendData(blob)
      }
    },
    handleMeetingSaved (event) {
      this.meetingId = event
    },
    handleVoiceRecognized(speakers) {
      console.log('speakers', speakers);
      this.recognizedSpeakers = speakers;
    },
    submitFile () {
      var self = this
      if (!this.audioFile) {
        this.$snotify.error('File is required.', 'Error!!');

        return false
      }
      this.uploadingStatusText = 'Uploading...'
      this.uploadingStatus = true
      console.log('Uploading file....')
      let formData = new FormData()
      let mimeType = this.audioFile.name.split('.').pop();
      formData.append('audio', this.audioFile, 'audio' + Math.floor(Math.random() * 256000) + '.'+mimeType)
      //axios call here....
      this.$http.post(this.baseurl + '/upload/audio', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((result) => {
          console.log('File Uploaded successfully. Now transcribing...');
          this.$snotify.success('File uploaded successfully!!', 'Success');
          this.uploadingStatusText = 'Transcribing...'
          this.savedAudioFile = result.data.filename
          this.$http.get(this.baseurl + '/transcribe/' + this.savedAudioFile)
            .then((transcribedResult) => {
              console.log('transcribed successfully');
              this.$snotify.success('Speech transcribed successfully!!', 'Success');
              self.formatConversation(transcribedResult.data.data)
              this.uploadingStatus = false
              self.transcribed = true
            })
            .catch((error) => {
              this.uploadingStatus = false
              this.$snotify.error('Error transcribing speech!!', 'Error!!');
            })
        })
        .catch((error) => {
          this.uploadingStatus = false
          this.$snotify.error('Error uploading file!!', 'Error!!');
        })
    },
    formatConversation (result) {
      console.log('formatting the conversation for display')
      let results = result.results;
      let speakerLabels = result.speaker_labels;
      this.recognizedSpeakers = result.recognized_speakers;
      let conversations = [];
      let speakerLabelCount=0;
      for(let i=0;i<results.length;i++){
        let r = results[i];
        let timestamps = r.alternatives[0].timestamps;
        for (let j = 0; j < timestamps.length; j++) {
          let a = timestamps[j];
          a = a.concat(speakerLabels[speakerLabelCount++]);
          conversations.push(a)
        }
      }
      let formattedConversations = []
      for (let i = 0; i < conversations.length; i++) {
        if (i === 0) {
          formattedConversations.push({
            'speaker': speakerLabels[i].speaker,
            'from': conversations[i][3].from,
            'to': conversations[i][3].to,
            'vocal': conversations[i][0]
          })
        } else {
          if (conversations[i][3].speaker === conversations[i - 1][3].speaker) {
            formattedConversations[formattedConversations.length - 1].vocal += ' ' + conversations[i][0]
            formattedConversations[formattedConversations.length - 1].to = conversations[i][3].to
          } else {
            formattedConversations.push({
              'speaker': speakerLabels[i].speaker,
              'from': conversations[i][3].from,
              'to': conversations[i][3].to,
              'vocal': conversations[i][0]
            });
          }
        }
      }
      this.conversation = formattedConversations
      this.uploadResponse = true
    },
    sendData (blob) {

    },
    getUsers () {
      console.log('Fetching users...')
      this.$http.get(this.baseurl + '/attendees')
        .then(response => {
          this.users = response.data.data
        })

    },
    remove () {
      this.audioChunks = []
      this.source = ''
      this.show = false
    }
  }
}
</script>

<style scoped>
  .main-box {
    box-shadow: 0px 0px 10px 5px darkslategrey !important;
    flex: 100% !important;
  }

  .icon {
    vertical-align: middle;
    font-size: 1em;
    color: inherit;
    height: 2rem;
    width: 2rem;
  }

  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 30px;
    height: 30px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
