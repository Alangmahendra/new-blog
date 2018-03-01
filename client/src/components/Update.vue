<template>
 <div class="container" v-if="oneArticle">
    <b-form-group>
      <form @submit.prevent="update">
      <b-form-file v-model="formData.image" :state="Boolean(formData.image)" placeholder="Choose a file..."></b-form-file>
      <b-form-input v-model="formData.title" placeholder="title"></b-form-input>
      <b-form-input v-model="formData.description" placeholder="description"></b-form-input>
      <wysiwyg v-model="formData.content"/>
      <b-button type="submit" variant="outline-success">Update Articles</b-button>
      </form>
    </b-form-group>
  </div>
  <!-- <div>
    hello word
  </div> -->
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Update',
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
      'oneArticle'
    ])
  },
  mounted () {
    console.log('ada mounted')
    this.getOneArticle(this.$route.params.id)
  },
  methods: {
    ...mapActions([
      'updateArticle',
      'getOneArticle'
    ]),
    update () {
      this.updateArticle(this.formData).then(() => {
        console.log('kelar')
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
  },
  watch: {
    oneArticle: {
      deep: true,
      handler () {
        this.formData = {
          ...this.formData,
          ...this.oneArticle
        }
      }
    }
  }
}
</script>

<style>

</style>
