<template>
  <div class="container">
    <b-form-group>
    <b-form-input placeholder="username" v-model="name"></b-form-input>
    <br>
    <b-form-input type="password" placeholder="password" v-model="password"></b-form-input>
    </b-form-group>
      <b-button @click="signUp" variant="success">Register</b-button>
    <b-button @click="signIn" v-if="hidden == true" variant="success">Login</b-button>
    <p @click="show" class="pointer">already have account ?</p>
  </div>
</template>

<script>
import axios from 'axios'
const baseURL = `http://neoal.xyz:3010/api`
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      password: '',
      hidden: false
    }
  },
  methods: {
    signUp () {
      axios.post(`${baseURL}/users/signup`, {username: this.name, password: this.password})
        .then(response => {
          console.log('terdaftar', response.data.data)
        })
        .catch(err => console.error(err))
    },
    signIn () {
      axios.post(`${baseURL}/users/signin`, {username: this.name, password: this.password})
        .then(response => {
          console.log(response.data.token)
          localStorage.setItem('token', response.data.token)
          alert('you have loged in,now you can access profile page know')
          this.$router.push({name: 'Blog'})
        })
        .catch(err => console.error(err))
    },
    show () {
      this.hidden = !this.hidden
    }
  }
}
</script>

<style>
  .pointer{
    cursor: pointer;
  }
</style>
