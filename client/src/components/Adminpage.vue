<template>
  <div class="container">
    <b-form-group>
      <form @submit.prevent="submitArticle()">
      <b-form-file v-model="formData.image" :state="Boolean(formData.image)" placeholder="Choose a file..."></b-form-file>
      <b-form-input v-model="formData.title" placeholder="title"></b-form-input>
      <b-form-input v-model="formData.description" placeholder="description"></b-form-input>
      <wysiwyg v-model="formData.content"/>
      <b-button type="submit" variant="outline-success">Add Articles</b-button>
      </form>
    </b-form-group>
    <br>
    <h3>Do What Ever You Want</h3>
    <b-card-group deck>
      <shit
      v-for="article in myArticles"
      :key="article._id"
      :article="article"
    ></shit>
    </b-card-group>
  </div>
</template>

<script>
import shit from './Myshit'
import {mapActions, mapState} from 'vuex'
export default {
  components: {shit},
  data () {
    return {
      formData: {
        image: '',
        title: '',
        description: '',
        content: ''
      }
    }
  },
  computed: {
    ...mapState([
      'myArticles'
    ])
  },
  created () {
    this.getMyarticle()
  },
  methods: {
    ...mapActions([
      'addarticle',
      'getMyarticle'
    ]),
    submitArticle () {
      this.addarticle(this.formData).then(() => {
        this.reset()
        this.$router.push({name: 'Blog'})
      })
    },
    reset () {
      this.formData.image = ''
      this.formData.title = ''
      this.formData.description = ''
      this.formData.content = ''
    }
  }
}
</script>

<style>
</style>
