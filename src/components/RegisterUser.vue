<template>
  <div>
    <form style="text-align: left;" @submit.prevent="submit">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="first_name">First Name</label>
            <input type="text"
                   class="form-control"
                   name="first_name"
                   id="first_name"
                   v-model="form.first_name"
                   aria-describedby=""
                   placeholder="Enter First Name">
            <!--            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="last_name">Last Name</label>
            <input type="text"
                   class="form-control"
                   name="last_name"
                   id="last_name"
                   v-model="form.last_name"
                   aria-describedby=""
                   placeholder="Enter Last Name">
            <!--            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email"
                   class="form-control"
                   id="exampleInputEmail1"
                   v-model="form.email"
                   aria-describedby="emailHelp"
                   placeholder="Enter email">
<!--            <small id="emailHelp" class="form-text text-muted">We'll never share your email with-->
<!--              anyone else.-->
<!--            </small>-->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="gender">Gender</label>
            <select name="gender" class="form-control" v-model="form.gender">
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Others</option>
            </select>
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
  </div>
</template>

<script>
export default {
  name: 'registerUser',
  props: [],
  data () {
    return {
      baseurl:null,
      form:{
        first_name:'',
        last_name:'',
        email:'',
        gender:''
      }
    }
  },
  mounted () {
    this.baseurl = this.$parent.$attrs.baseurl;
  },
  methods: {
    submit(){
      console.log('Registering user...');
      this.$http.post(this.baseurl+'/attendee', this.form)
        .then((result) => {
          console.log('User registered successfully.');
          alert(result.data.message+' with id '+result.data.attendee.id);
        })
        .catch(error => {

        })
    },
    cropTime (event) {
      let aud = document.getElementById('audio-player')
      if (event === 'start') {
        this.startTime = aud.currentTime
      }
      if (event === 'end') {
        this.endTime = aud.currentTime
      }
    }
  }
}
</script>