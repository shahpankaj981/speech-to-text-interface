<template>
    <form style="text-align: left;" id="register-meeting" @submit.prevent="submitMeetingForm">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="organization">Organization Name</label>
            <input type="text"
                   class="form-control"
                   name="organization"
                   id="organization"
                   aria-describedby=""
                   v-model="form.organization"
                   placeholder="Enter Organization Name">
            <!--            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="meeting_location">Meeting Location</label>
            <input type="text"
                   name="meeting_location"
                   class="form-control"
                   id="meeting_location"
                   v-model="form.meeting_location"
                   aria-describedby="emailHelp"
                   placeholder="Enter Location">
<!--            <small id="emailHelp" class="form-text text-muted">We'll never share your email with-->
<!--              anyone else.-->
<!--            </small>-->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="total_attendee">Number of Attendees</label>
            <input type="number"
                   min="1"
                   class="form-control"
                   name="total_attendee"
                   id="total_attendee"
                   aria-describedby=""
                   v-model="form.total_attendee"
                   placeholder="Enter Number of Attendees">
          </div>
        </div>
      </div>
      <hr>
      <!--      <div class="form-check">-->
      <!--        <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
      <!--        <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
      <!--      </div>-->
      <div class="row">
        <div class="col-md-12">
          <button type="submit" class="btn btn-block btn-outline-primary">Submit</button>
        </div>
      </div>
    </form>
</template>

<script>
export default {
  name: 'registerMeeting',
  props: ['savedAudioFile'],
  data () {
    return {
      baseurl:null,
      form:{
        organization:'',
        meeting_location:'',
        total_attendee:'',
        audio_filename:''
      }
    }
  },
  mounted () {
    this.baseurl = this.$parent.$attrs.baseurl;
  },
  methods: {
    submitMeetingForm(){
      console.log('Registering the meeting...')
      this.form.audio_filename = this.savedAudioFile;
      //return;
      this.$http.post(this.baseurl+'/meeting', this.form)
        .then((result) => {
          console.log('Meeting registered successfully.');
          let meetingId = result.data.meeting.id;
          this.$emit('meetingSaved', meetingId);
        })
        .catch(error => {

        })

    }
  }
}
</script>